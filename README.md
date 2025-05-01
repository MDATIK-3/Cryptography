
# CipherAlgo - Cryptography Explorer

CipherAlgo is an interactive web application for exploring and learning about various cipher techniques used throughout history for secure communication. This platform offers a hands-on approach to understanding both classical and modern cryptographic algorithms.

![CipherAlgo Logo](/public/images/logo1.png)

## Features

- **Interactive Tools**: Encrypt and decrypt messages with multiple cipher algorithms
- **Visual Learning**: Step-by-step visualization of encryption processes
- **Multiple Cipher Techniques**:
  - Monoalphabetic Ciphers (Additive, Multiplicative, Affine)
  - Polyalphabetic Ciphers (Autokey, Playfair, Vigenère, Hill, One-Time Pad)
  - Transposition Ciphers (Rail Fence)
  - Asymmetric Cryptography (RSA)
- **Educational Content**: Mathematical background and historical context for each cipher
- **Responsive Design**: Fully mobile-friendly user interface
- **Search Functionality**: Find specific ciphers quickly

## Tech Stack

- **Next.js** - React framework for server-rendered applications
- **React** - Frontend library for building user interfaces
- **Tailwind CSS** - Utility-first CSS framework for styling
- **JavaScript** - Core programming language for cipher implementations

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm (comes with Node.js)

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/MDATIK-3/Cryptography.git
   cd Cryptography
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Run the development server:
   ```sh
   npm run dev
   ```

4. Open your browser and navigate to [http://localhost:3000](http://localhost:3000)

## Usage

1. Browse the homepage to explore different cipher categories
2. Select a cipher algorithm to access its dedicated page
3. Toggle between encryption and decryption modes
4. Enter your message and any required keys or parameters
5. View the encrypted/decrypted result along with a visual explanation of the process

## Project Structure

- `/public` - Static assets including images and data files
- `/src/app` - Next.js application source code
  - `/component` - Individual cipher implementation pages
  - `/layout` - Reusable UI components like Header, Footer
  - `/about` - Project information page

## Contributing

Contributions are welcome! Here's how you can contribute:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Inspired by the rich history of cryptography
- Designed to make cryptographic concepts accessible to everyone
- Built as an educational tool for students, educators, and encryption enthusiasts
