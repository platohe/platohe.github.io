# VaultGuard User Manual

## Table of Contents
1. [Introduction](#introduction)
2. [Getting Started](#getting-started)
3. [Vault Management](#vault-management)
4. [Entry Management](#entry-management)
5. [Security Features](#security-features)
6. [Advanced Features](#advanced-features)
7. [Troubleshooting](#troubleshooting)
8. [Best Practices](#best-practices)

---

## Introduction

VaultGuard is a military-grade local password manager with zero-knowledge architecture. Your data never leaves your device and is protected with industry-standard AES-256 encryption.

### Key Features
- **Zero-Knowledge Architecture**: Only you have access to your data
- **AES-256-GCM Encryption**: Military-grade encryption for all vault data
- **Cross-Platform**: Works on Windows, macOS, and Linux
- **Offline-First**: No internet connection required
- **Modern Interface**: Clean, intuitive design with Fluent UI

---

## Getting Started

### Creating Your First Vault

1. **Launch VaultGuard** and click "New vault" in the toolbar
2. **Fill in vault details**:
   - **Name**: A descriptive name for your vault
   - **Description**: Optional description to help identify the vault
   - **Icon**: Choose an icon to visually identify your vault
3. **Set a strong master password**:
   - At least 8 characters long
   - Use a mix of uppercase, lowercase, numbers, and symbols
   - Consider using a passphrase for better memorability
4. **Click "Create Vault"** to initialize your encrypted vault

### Opening an Existing Vault

1. Click "Open vault" in the toolbar
2. **Select your vault file** (.vault extension)
3. **Enter your master password** when prompted
4. Click "Unlock" to access your vault

---

## Vault Management

### Vault Information

Access vault settings by clicking the settings icon in the toolbar:

- **General Tab**: View and edit vault name and description
- **Security Tab**: Change master password and view security status
- **Passkeys Tab**: Manage passkey authentication

### Changing Master Password

1. Go to **Settings → Security**
2. Enter your **current master password**
3. Set a **new master password**
4. **Confirm** the new password
5. Click "Change password"

### Saving Your Vault

VaultGuard automatically saves changes, but you can manually save:
- Click the save icon in the toolbar
- Or use **Ctrl+S** (Windows/Linux) / **Cmd+S** (macOS)

### Closing a Vault

- Click "Close vault" in the toolbar
- Or close the application (vault will be automatically closed)

---

## Entry Management

### Entry Types

VaultGuard supports multiple entry types:

#### 🔑 Login Entries
- **Username**: Account username or email
- **Password**: Encrypted password
- **URL**: Website address
- **TOTP**: Two-factor authentication codes
- **Notes**: Additional information

#### 💳 Credit Card Entries
- **Cardholder Name**: Name on the card
- **Card Number**: Encrypted card number
- **Expiration Date**: MM/YY format
- **CVV**: Security code (encrypted)
- **Notes**: Billing information

#### 📋 Identity Entries
- **Full Name**: Legal name
- **Address**: Physical address
- **Phone Number**: Contact number
- **Email Address**: Email contact
- **SSN/Tax ID**: Government identification
- **Notes**: Additional personal information

#### 📝 Secure Notes
- **Title**: Note title
- **Content**: Encrypted text content
- **Tags**: Organization tags

#### 🔐 SSH Key Entries
- **Key Name**: Identifier for the key
- **Username**: SSH username
- **Hostname**: Server address
- **Private Key**: Encrypted private key
- **Passphrase**: Key passphrase
- **Port**: SSH port number

#### 🗄️ Database Entries
- **Database Name**: Database identifier
- **Username**: Database username
- **Password**: Database password
- **Hostname**: Server address
- **Port**: Database port
- **Database Type**: MySQL, PostgreSQL, etc.

#### 📜 License Key Entries
- **Product Name**: Software name
- **License Key**: Encrypted license key
- **Version**: Software version
- **Purchase Date**: When licensed
- **Expiry Date**: License expiration
- **Notes**: Additional details

### Creating Entries

1. **Click "New Entry"** in the folder tree or toolbar
2. **Select entry type** from the dropdown
3. **Fill in the required fields**:
   - Red asterisks (*) indicate required fields
   - Use the password generator for strong passwords
4. **Add optional information** in the notes field
5. **Click "Save"** to store the entry

### Using the Password Generator

1. **Click the dice icon (🎲)** next to password fields
2. **Choose generation mode**:
   - **Random**: Customizable character sets
   - **Passphrase**: Diceware-style memorable phrases
   - **Pattern**: Custom patterns (XXX-xxx-999)
3. **Adjust settings**:
   - Length (8-128 characters)
   - Character sets (uppercase, lowercase, numbers, symbols)
   - Exclude ambiguous characters
4. **Generate and use** the password

### Organizing Entries

#### Folders
- **Create folders** by right-clicking in the folder tree
- **Drag and drop** entries to organize
- **Nest folders** for hierarchical organization
- **Rename folders** by double-clicking

#### Tags
- **Add tags** to entries for better organization
- **Filter by tags** in the search bar
- **Multiple tags** per entry supported

### Searching Entries

1. **Use the search bar** at the top of the entry list
2. **Search filters**:
   - **All fields**: Search across all entry data
   - **Names only**: Search entry titles
   - **URLs only**: Search website addresses
   - **Notes only**: Search note content
3. **Advanced filters**:
   - **Entry type**: Filter by specific types
   - **Tags**: Filter by assigned tags
   - **Date modified**: Filter by last modified date

---

## Security Features

### Passkey Authentication

Passkeys provide passwordless authentication using biometrics or security keys.

#### Setting Up Passkeys

1. Go to **Settings → Passkeys**
2. Click "Create Passkey"
3. **Choose authentication method**:
   - **Fingerprint**: Use device fingerprint sensor
   - **Face ID**: Use facial recognition
   - **Security Key**: Use USB security key
4. **Name your passkey** for easy identification
5. **Complete enrollment** when prompted

#### Using Passkeys

- **Enable passkey login** for passwordless vault access
- **Multiple passkeys** supported per vault
- **QR code sharing** for mobile device setup

### TOTP (Two-Factor Authentication)

#### Setting Up TOTP

1. **Edit a login entry**
2. Click "Setup TOTP" or scan QR code
3. **Add secret**:
   - **Manual entry**: Type the secret key
   - **QR scan**: Use camera to scan QR code
4. **Verify setup** with the 6-digit code

#### Using TOTP

- **Automatic codes** appear in entry details
- **Countdown timer** shows remaining time
- **Copy button** for easy pasting
- **Multiple TOTP accounts** supported

### Security Dashboard

Monitor your password security:

1. Click the security dashboard icon in the toolbar
2. **Security metrics**:
   - **Weak passwords**: Entries with weak passwords
   - **Reused passwords**: Duplicated passwords
   - **Old passwords**: Entries not updated recently
   - **Compromised passwords**: Known breached passwords
3. **Take action** on identified security issues

---

## Advanced Features

### Import/Export

#### Importing Passwords

1. Go to **Settings → Import/Export**
2. Click "Import Vault"
3. **Select file format**:
   - **JSON**: VaultGuard or other password manager format
   - **CSV**: Comma-separated values
4. **Verify import** and map fields if needed
5. **Enter master password** for verification

#### Exporting Passwords

1. Go to **Settings → Import/Export**
2. Click "Export Vault"
3. **Choose format**:
   - **JSON**: Full vault with encryption
   - **CSV**: Human-readable format (less secure)
4. **Set export password** (optional for JSON)
5. **Save the file** to a secure location

### Auto-Lock

Configure automatic vault locking:

1. Go to **Settings → Security**
2. **Set auto-lock timeout**:
   - **Never**: Disable auto-lock
   - **1 minute**: Quick security
   - **5 minutes**: Balanced
   - **15 minutes**: Convenience
   - **30 minutes**: Extended access
3. **Save settings**

### Themes

Switch between light and dark themes:

- **Light theme**: Bright, clean interface
- **Dark theme**: Easy on the eyes in low light
- **System theme**: Follows OS preference
- **Toggle** using the theme button in the toolbar

---

## Troubleshooting

### Common Issues

#### Forgotten Master Password
- **Cannot recover**: Master password is never stored
- **No backdoor**: Zero-knowledge architecture prevents recovery
- **Solution**: Use password recovery hints or create a new vault

#### Vault File Corruption
- **Backup regularly**: Export vault frequently
- **Multiple copies**: Keep backups in different locations
- **Recovery**: Restore from backup if corruption occurs

#### Import Failures
- **Check format**: Ensure file is valid JSON or CSV
- **Verify encoding**: Use UTF-8 encoding
- **Map fields**: Correctly map import fields to VaultGuard fields

#### Performance Issues
- **Large vaults**: Consider splitting into multiple vaults
- **Clear cache**: Restart the application
- **Update**: Ensure you're using the latest version

### Error Messages

#### "Invalid master password"
- **Check spelling**: Verify password accuracy
- **Caps lock**: Ensure caps lock is off
- **Recent change**: Did you recently change the password?

#### "Vault file corrupted"
- **Backup recovery**: Restore from a recent backup
- **File repair**: Try opening on a different device
- **Support**: Contact support for advanced recovery

#### "Cannot save vault"
- **Disk space**: Check available storage
- **Permissions**: Ensure write permissions
- **File lock**: Close other applications using the file

---

## Best Practices

### Password Security

1. **Use strong master password**:
   - Minimum 12 characters
   - Mix of character types
   - Avoid personal information
   - Consider a passphrase

2. **Regular password updates**:
   - Change critical passwords every 3-6 months
   - Update immediately after security breaches
   - Use the security dashboard to track

3. **Unique passwords**:
   - Never reuse passwords across accounts
   - Use password generator for uniqueness
   - Check for duplicates in security dashboard

### Backup Strategy

1. **Regular backups**:
   - Export vault weekly
   - Before major updates
   - After adding important entries

2. **Multiple locations**:
   - Local storage (USB drive)
   - Cloud storage (encrypted)
   - Physical backup (paper)

3. **Test restores**:
   - Verify backup integrity
   - Test restore process
   - Document recovery steps

### Security Habits

1. **Device security**:
   - Keep OS updated
   - Use device encryption
   - Enable screen lock
   - Use antivirus software

2. **Network security**:
   - Avoid public WiFi for sensitive operations
   - Use VPN when necessary
   - Ensure HTTPS connections

3. **Application security**:
   - Keep VaultGuard updated
   - Enable auto-lock
   - Use passkey authentication
   - Regular security reviews

### Privacy Protection

1. **Local storage**:
   - Data never leaves your device
   - No cloud synchronization by default
   - Full control over your data

2. **Secure sharing**:
   - Use QR codes for passkey sharing
   - Export with encryption
   - Verify recipient identity

3. **Data minimization**:
   - Only store necessary information
   - Regular cleanup of old entries
   - Review access permissions

---

## Technical Support

### Getting Help

- **Documentation**: Check this manual first
- **Community**: Visit the support forums
- **Issues**: Report bugs on GitHub
- **Security**: Report security concerns privately

### System Requirements

- **Operating System**: Windows 10+, macOS 10.14+, Linux (Ubuntu 18.04+)
- **Browser**: Chrome 90+, Firefox 88+, Edge 90+, Safari 14+
- **Memory**: 4GB RAM minimum
- **Storage**: 100MB available space

### Version History

Check the application settings for current version and update information.

---

*This manual covers VaultGuard version 1.0.0. Features may vary by version.*
