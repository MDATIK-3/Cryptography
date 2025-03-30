'use client';
import React, { useState } from 'react';

const VigenereCipherDiagram = () => {
  const [key, setKey] = useState("PASCAL");
  const [plaintext, setPlaintext] = useState("she is listening");
  
  const preprocessText = (text) => text.replace(/[^a-zA-Z]/g, '').toLowerCase();
  
  const generateCipherData = () => {
    const cleanText = preprocessText(plaintext);
    const uppercaseKey = key.toUpperCase();
    const groups = [];

    for (let i = 0; i < cleanText.length; i++) {
      const keyChar = uppercaseKey[i % key.length];
      const plainChar = cleanText[i];
      const keyCode = keyChar.charCodeAt(0) - 65;
      const plainCode = plainChar.charCodeAt(0) - 97;
      const cipherChar = String.fromCharCode(((plainCode + keyCode) % 26) + 65);
      
      if (!groups[i % key.length]) {
        groups[i % key.length] = {
          keyChar,
          plainChars: [],
          cipherChars: []
        };
      }
      
      groups[i % key.length].plainChars.push(plainChar);
      groups[i % key.length].cipherChars.push(cipherChar);
    }
    return groups;
  };

  const groups = generateCipherData();
  
  return (
    <div className="p-6 max-w-4xl mx-auto bg-white">
      <h1 className="text-xl font-bold mb-6 text-center">Vigenère Cipher Diagram</h1>
      <div className="mb-6">
        <label className="block text-sm font-medium mb-1">Key</label>
        <input
          type="text"
          value={key}
          onChange={(e) => setKey(e.target.value.toUpperCase())}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="mb-6">
        <label className="block text-sm font-medium mb-1">Plaintext</label>
        <textarea
          value={plaintext}
          onChange={(e) => setPlaintext(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      
      <div className="border p-4 rounded bg-gray-100">
        <h2 className="text-lg font-semibold text-center mb-4">Cipher Process</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {groups.map((group, index) => (
            <div key={index} className="text-center p-2 border rounded bg-white">
              <div className="font-bold">Key: {group.keyChar}</div>
              <div className="text-gray-700">Plain: {group.plainChars.join(' ')}</div>
              <div className="font-semibold text-blue-600">Cipher: {group.cipherChars.join(' ')}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VigenereCipherDiagram;
