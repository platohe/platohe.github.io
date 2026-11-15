/**
 * Crypto Web Worker
 *
 * Offloads Web Crypto API operations to a background thread so they don't
 * block the main UI. The worker receives serialized op definitions and
 * returns typed-array results.
 *
 * Message format:
 *   { type: 'run', opId, input, args, inputType }
 *   { type: 'cancel' }
 *
 * Response format:
 *   { type: 'result', opId, output, duration, error? }
 */

let activeCancel = null

self.onmessage = async (e) => {
  const msg = e.data
  if (msg.type === 'cancel') {
    activeCancel = true
    return
  }
  if (msg.type === 'run') {
    activeCancel = null
    const { opId, input, args } = msg
    const start = performance.now()
    try {
      const result = await runCryptoOp(opId, input, args)
      self.postMessage({
        type: 'result',
        opId,
        output: result,
        duration: Math.round(performance.now() - start),
      })
    } catch (err) {
      self.postMessage({
        type: 'error',
        opId,
        error: err.message,
        duration: Math.round(performance.now() - start),
      })
    }
  }
}

async function runCryptoOp(opId, input, args) {
  switch (opId) {
    case 'aes-encrypt':
    case 'aes-decrypt':
      return await runAES(opId, input, args)
    case 'rsa-encrypt':
    case 'rsa-decrypt':
      return await runRSA(opId, input, args)
    case 'ecdsa-sign':
    case 'ecdsa-verify':
      return await runECDSA(opId, input, args)
    case 'hmac-sign':
    case 'hmac-verify':
      return await runHMAC(opId, input, args)
    case 'generate-rsa-keypair':
      return await runGenerateRSAGeneration(args)
    case 'generate-ec-keypair':
      return await runGenerateECKeypair(args)
    default:
      throw new Error(`Unknown crypto op: ${opId}`)
  }
}

async function runAES(opId, input, args) {
  const isEncrypt = opId === 'aes-encrypt'
  const algName = args.algorithm || 'AES-GCM'
  const keyBits = parseInt(args.keyBits) || 256
  const iv = args.iv ? hexToBytes(args.iv) : crypto.getRandomValues(new Uint8Array(12))

  // Import key
  const keyData = args.key ? base64ToBytes(args.key) : crypto.getRandomValues(new Uint8Array(keyBits / 8))
  const key = await crypto.subtle.importKey(
    'raw',
    keyData,
    { name: algName, length: keyBits },
    false,
    isEncrypt ? ['encrypt'] : ['decrypt']
  )

  const encoder = new TextEncoder()
  const data = encoder.encode(input)

  if (isEncrypt) {
    const encrypted = await crypto.subtle.encrypt(
      { name: algName, iv },
      key,
      data
    )
    return encodeResult(iv, new Uint8Array(encrypted))
  } else {
    const { iv: decIv, data: decData } = decodeResult(input)
    const decrypted = await crypto.subtle.decrypt(
      { name: algName, iv: decIv },
      key,
      decData
    )
    return new TextDecoder().decode(decrypted)
  }
}

async function runRSA(opId, input, args) {
  const isEncrypt = opId === 'rsa-encrypt'
  const hash = args.hash || 'SHA-256'
  const keyData = base64ToBytes(isEncrypt ? args.publicKey : args.privateKey)
  const key = await crypto.subtle.importKey(
    isEncrypt ? 'spki' : 'pkcs8',
    keyData,
    { name: 'RSA-OAEP', hash },
    false,
    isEncrypt ? ['encrypt'] : ['decrypt']
  )

  const encoder = new TextEncoder()
  const data = encoder.encode(input)

  if (isEncrypt) {
    const encrypted = await crypto.subtle.encrypt(
      { name: 'RSA-OAEP' },
      key,
      data
    )
    return bytesToBase64(new Uint8Array(encrypted))
  } else {
    const decrypted = await crypto.subtle.decrypt(
      { name: 'RSA-OAEP' },
      key,
      keyData.length > 0 ? keyData : input
    )
    return new TextDecoder().decode(decrypted)
  }
}

async function runECDSA(opId, input, args) {
  const isSign = opId === 'ecdsa-sign'
  const curve = args.curve || 'P-256'
  const hash = args.hash || 'SHA-256'
  const keyData = base64ToBytes(isSign ? args.privateKey : args.publicKey)
  const key = await crypto.subtle.importKey(
    isSign ? 'pkcs8' : 'spki',
    keyData,
    { name: 'ECDSA', namedCurve: curve },
    false,
    isSign ? ['sign'] : ['verify']
  )

  const encoder = new TextEncoder()
  const data = encoder.encode(input)

  if (isSign) {
    const signature = await crypto.subtle.sign(
      { name: 'ECDSA', hash },
      key,
      data
    )
    return bytesToBase64(new Uint8Array(signature))
  } else {
    const signature = base64ToBytes(args.signature)
    const valid = await crypto.subtle.verify(
      { name: 'ECDSA', hash },
      key,
      signature,
      data
    )
    return JSON.stringify({ valid })
  }
}

async function runHMAC(opId, input, args) {
  const isSign = opId === 'hmac-sign'
  const alg = args.algorithm || 'HMAC-SHA256'
  const hash = alg.replace('HMAC-', 'SHA-')
  const keyData = args.secret ? new TextEncoder().encode(args.secret) : crypto.getRandomValues(new Uint8Array(32))
  const key = await crypto.subtle.importKey(
    'raw',
    keyData,
    { name: 'HMAC', hash },
    false,
    isSign ? ['sign'] : ['verify']
  )

  const encoder = new TextEncoder()
  const data = encoder.encode(input)

  if (isSign) {
    const signature = await crypto.subtle.sign('HMAC', key, data)
    return bytesToBase64Url(new Uint8Array(signature))
  } else {
    const sigBytes = base64UrlToBytes(args.signature || input)
    const valid = await crypto.subtle.verify('HMAC', key, sigBytes, data)
    return JSON.stringify({ valid })
  }
}

async function runGenerateRSAGeneration(args) {
  const keySize = parseInt(args.keySize) || 2048
  const keyPair = await crypto.subtle.generateKey(
    { name: 'RSA-OAEP', modulusLength: keySize, publicExponent: new Uint8Array([1, 0, 1]), hash: 'SHA-256' },
    true,
    ['encrypt', 'decrypt']
  )
  const pub = await crypto.subtle.exportKey('jwk', keyPair.publicKey)
  const priv = await crypto.subtle.exportKey('jwk', keyPair.privateKey)
  return JSON.stringify({ publicKey: pub, privateKey: priv })
}

async function runGenerateECKeypair(args) {
  const curve = args.curve || 'P-256'
  const keyPair = await crypto.subtle.generateKey(
    { name: 'ECDSA', namedCurve: curve },
    true,
    ['sign', 'verify']
  )
  const pub = await crypto.subtle.exportKey('jwk', keyPair.publicKey)
  const priv = await crypto.subtle.exportKey('jwk', keyPair.privateKey)
  return JSON.stringify({ publicKey: pub, privateKey: priv })
}

// ── Helpers ───────────────────────────────────────────────────────

function hexToBytes(hex) {
  const bytes = new Uint8Array(hex.length / 2)
  for (let i = 0; i < bytes.length; i++) {
    bytes[i] = parseInt(hex.slice(i * 2, i * 2 + 2), 16)
  }
  return bytes
}

function bytesToBase64(bytes) {
  const chunks = []
  for (let i = 0; i < bytes.length; i += 8192) {
    chunks.push(String.fromCharCode(...bytes.subarray(i, i + 8192)))
  }
  return btoa(chunks.join(''))
}

function base64ToBytes(base64) {
  const binary = atob(base64)
  const bytes = new Uint8Array(binary.length)
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i)
  }
  return bytes
}

function bytesToBase64Url(bytes) {
  let binary = ''
  for (let i = 0; i < bytes.length; i++) {
    binary += String.fromCharCode(bytes[i])
  }
  return btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')
}

function base64UrlToBytes(b64url) {
  let b64 = b64url.replace(/-/g, '+').replace(/_/g, '/')
  while (b64.length % 4) b64 += '='
  const binary = atob(b64)
  const bytes = new Uint8Array(binary.length)
  for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i)
  return bytes
}

function encodeResult(iv, data) {
  const combined = new Uint8Array(iv.length + data.length)
  combined.set(iv, 0)
  combined.set(data, iv.length)
  return bytesToBase64(combined)
}

function decodeResult(base64Str) {
  const bytes = base64ToBytes(base64Str)
  const iv = bytes.subarray(0, 12)
  const data = bytes.subarray(12)
  return { iv, data }
}
