# VaultGuard - Password Manager

A military-grade local password manager with zero-knowledge architecture, built with React and Vite.

## Features

### 🔐 Security
- **AES-256-GCM encryption** for all vault data
- **Argon2id key derivation** for master password protection
- **Zero-knowledge architecture** - data never leaves your device
- **Memory protection** with constant-time operations
- **Timing attack protection**

### 📱 Entry Types
- **Login**: Username, password, URL, TOTP support
- **Credit Card**: Card details with expiry tracking
- **Identity**: Personal information management
- **Secure Note**: Encrypted text notes
- **SSH Key**: SSH credential management
- **Database**: Database connection credentials
- **License Key**: Software license tracking

### 🛠️ Features
- **Password Generator** with strength meter (random, passphrase, pattern modes)
- **Passkey Support** with FIDO2/WebAuthn authentication and QR code sharing
- **TOTP Support** with QR code scanning
- **Three-Pane Layout**: Folder tree, entry list, details panel
- **Search & Filtering**: Advanced search with type and tag filters
- **Import/Export**: JSON and CSV support
- **Security Dashboard**: Weak password detection, reuse analysis
- **Auto-Lock**: Configurable timeout with secure lock
- **PWA Support**: Installable offline-first application

### 🎨 User Interface
- **Modern Design**: Clean, intuitive interface with Tailwind CSS
- **Responsive**: Works on desktop, tablet, and mobile
- **Dark/Light Themes**: System theme support
- **Accessibility**: WCAG 2.1 AA compliant

## Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd vaultguard
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Usage

### Creating Your First Vault

1. Click "Create Your First Vault"
2. Enter a vault name and description
3. Choose an icon for your vault
4. Set a strong master password
5. Click "Create Vault"

### Adding Entries

1. Unlock your vault with the master password
2. Click "New Entry" in the folder tree
3. Select the entry type (Login, Credit Card, etc.)
4. Fill in the required fields
5. Use the password generator for strong passwords
6. Save the entry

### Using the Password Generator

1. Click the dice icon (🎲) next to password fields
2. Choose generation mode:
   - **Random**: Customizable character sets
   - **Passphrase**: Diceware-style memorable phrases
   - **Pattern**: Custom patterns (XXX-xxx-999)
3. Adjust settings as needed
4. Copy or use the generated password

### Setting up Passkeys

1. Go to Passkey Manager from vault header
2. Click "Create Passkey" to add new security key
3. Use your fingerprint, face ID, or security key when prompted
4. Enable passkey login for passwordless authentication
5. Use QR codes to share passkeys with mobile devices

### Setting up TOTP

1. Edit a login entry
2. Click "Setup TOTP" or scan QR code
3. Enter the secret manually or scan from authenticator app
4. The 6-digit code will appear with a countdown timer

### Importing Passwords

1. Go to Settings → Import/Export
2. Click "Import Vault"
3. Select a JSON or CSV file
4. Enter your master password for verification
5. Review imported entries

## Security Architecture

### Encryption
- **Vault Encryption**: AES-256-GCM with authenticated encryption
- **Key Derivation**: Argon2id (memory-hard, configurable parameters)
- **Random Generation**: Cryptographically secure random values
- **Local Storage**: All data encrypted and stored locally

### Threat Model
- **Zero-Knowledge**: Master password never stored or transmitted
- **Local-First**: No cloud dependencies unless explicitly configured
- **Memory Protection**: Sensitive data cleared from memory when possible
- **Side-Channel Resistance**: Constant-time operations for sensitive comparisons

## Development

### Project Structure
```
src/
├── components/          # React components
│   ├── EntryDetails.jsx
│   ├── EntryList.jsx
│   ├── FolderTree.jsx
│   ├── PasswordGenerator.jsx
│   └── VaultLayout.jsx
├── models/             # Data models
│   ├── Entry.js
│   └── Vault.js
├── services/           # Business logic
│   └── VaultService.js
├── utils/              # Utility functions
│   ├── crypto.js
│   ├── passwordGenerator.js
│   └── totp.js
├── App.jsx             # Main application component
└── main.jsx           # Application entry point
```

### Technologies Used
- **React 18**: UI framework
- **Vite**: Build tool and dev server
- **Tailwind CSS**: Utility-first CSS framework
- **CryptoJS**: Cryptographic functions
- **Argon2 Browser**: Key derivation
- **ZXing**: QR code scanning
- **zxcvbn**: Password strength estimation

## Browser Support

- Chrome 90+
- Firefox 88+
- Edge 90+
- Safari 14+

## Security Considerations

- **Master Password**: Use a strong, unique master password
- **Backup**: Regularly export and backup your vault
- **Updates**: Keep the application updated for security patches
- **Device Security**: Ensure your device is secure and encrypted

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Built according to the Nexus Suite specification (Section 5.3)
- Inspired by industry-leading password managers
- Security best practices from OWASP and NIST guidelines
