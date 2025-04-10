function About() {
  return (
    <div className="text-xs sm:text-sm text-gray-500 mt-4 sm:mt-6 p-3 bg-gray-50 rounded-md border border-gray-100">
      <h3 className="font-medium text-gray-700 mb-1">About the Cipher</h3>
      <p className="mb-1">
        The Vigenère cipher is a polyalphabetic substitution cipher that uses a
        keyword to determine shifting values, making it more secure than simple
        monoalphabetic ciphers like the Caesar cipher.
      </p>
      <p className="mb-1">
        Each letter of the keyword specifies a different shift amount for each
        corresponding letter in the plaintext.
      </p>
      <p>
        <span className="font-medium">Formula:</span> Encryption = (plaintext
        position + key position) mod 26, Decryption = (ciphertext position - key
        position + 26) mod 26
      </p>
    </div>
  );
}

export default About;
