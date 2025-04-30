"use client";

import React, { useState } from "react";
import ModeToggle from "@/app/layout/ModeToggle";
import TextInput from "@/app/layout/TextInput";
import KeyInput from "@/app/layout/KeyInput";
import Button from "@/app/layout/Button";

const HillCipherUI = () => {
  const [plaintext, setPlaintext] = useState("HELLO");
  const [key, setKey] = useState("DDCF");
  const [mode, setMode] = useState("encrypt");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");
  const [showCharDetails, setShowCharDetails] = useState(false);

  const handleProcess = () => {
    try {
      setError("");
      if (mode === "encrypt") {
        const output = encryptHill(plaintext, key);
        setResult(output);
      } else {
        const output = decryptHill(plaintext, key);
        setResult(output);
      }
    } catch (err) {
      setError(err.message);
      setResult(null);
    }
  };

  function charToNum(char) {
    return char.toUpperCase().charCodeAt(0) - 65;
  }

  function numToChar(num) {
    return String.fromCharCode((num % 26 + 26) % 26 + 65);
  }

  function createKeyMatrix(key) {
    if (key.length !== 4) {
      throw new Error("For 2x2 Hill cipher, the key must be exactly 4 characters");
    }

    const matrix = [
      [charToNum(key[0]), charToNum(key[1])],
      [charToNum(key[2]), charToNum(key[3])]
    ];

    const det = (matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0]) % 26;
    if (det === 0 || gcd(det, 26) !== 1) {
      throw new Error("Invalid key: Matrix must be invertible in mod 26");
    }

    return matrix;
  }

  function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
  }

  function modInverse(a, m) {
    a = ((a % m) + m) % m;
    for (let x = 1; x < m; x++) {
      if ((a * x) % m === 1) {
        return x;
      }
    }
    throw new Error(`Modular inverse does not exist for a=${a} and m=${m}`);
  }

  function encryptHill(plaintext, key) {
    const steps = [];
    
    const normalizedText = plaintext.toUpperCase().replace(/[^A-Z]/g, "");
    
    let processedText = normalizedText;
    if (processedText.length % 2 !== 0) {
      processedText += "X";
    }
    
    steps.push({
      description: "Prepare Text",
      data: `Original: "${plaintext}" → Normalized: "${processedText}"`
    });
    
    const keyMatrix = createKeyMatrix(key);
    
    steps.push({
      description: "Key Matrix 2x2",
      data: {
        matrix: keyMatrix,
        explanation: `Key "${key}" converted to matrix form`
      }
    });
    
    let ciphertext = "";
    const detailSteps = [];
    
    for (let i = 0; i < processedText.length; i += 2) {
      const block = [charToNum(processedText[i]), charToNum(processedText[i + 1])];
      
      const result = [
        (keyMatrix[0][0] * block[0] + keyMatrix[0][1] * block[1]) % 26,
        (keyMatrix[1][0] * block[0] + keyMatrix[1][1] * block[1]) % 26
      ];
      
      const encryptedBlock = numToChar(result[0]) + numToChar(result[1]);
      ciphertext += encryptedBlock;
      
      detailSteps.push({
        block: processedText.substring(i, i + 2),
        calculation: `[${keyMatrix[0][0]}, ${keyMatrix[0][1]}] × [${block[0]}] = [${result[0]}] = ${numToChar(result[0])}\n` +
                    `[${keyMatrix[1][0]}, ${keyMatrix[1][1]}] × [${block[1]}] = [${result[1]}] = ${numToChar(result[1])}`
      });
    }
    
    steps.push({
      description: "Encryption Steps",
      detailSteps,
      data: ciphertext
    });
    
    return { result: ciphertext, steps };
  }

  function decryptHill(ciphertext, key) {
    const steps = [];
    
    const normalizedText = ciphertext.toUpperCase().replace(/[^A-Z]/g, "");
    
    if (normalizedText.length % 2 !== 0) {
      throw new Error("Ciphertext length must be even for 2x2 Hill cipher");
    }
    
    steps.push({
      description: "Prepare Text",
      data: `Original: "${ciphertext}" → Normalized: "${normalizedText}"`
    });
    
    const keyMatrix = createKeyMatrix(key);
    
    const det = (keyMatrix[0][0] * keyMatrix[1][1] - keyMatrix[0][1] * keyMatrix[1][0]) % 26;
    const detInv = modInverse((det + 26) % 26, 26);
    
    const adjMatrix = [
      [keyMatrix[1][1], (-keyMatrix[0][1] + 26) % 26],
      [(-keyMatrix[1][0] + 26) % 26, keyMatrix[0][0]]
    ];
    
    const invMatrix = [
      [(adjMatrix[0][0] * detInv) % 26, (adjMatrix[0][1] * detInv) % 26],
      [(adjMatrix[1][0] * detInv) % 26, (adjMatrix[1][1] * detInv) % 26]
    ];
    
    steps.push({
      description: "Key Inverse Matrix 2x2",
      data: {
        matrix: invMatrix,
        explanation: `Inverse of key matrix for decryption (det=${det}, detInv=${detInv})`
      }
    });
    
    let plaintext = "";
    const detailSteps = [];
    
    for (let i = 0; i < normalizedText.length; i += 2) {
      const block = [charToNum(normalizedText[i]), charToNum(normalizedText[i + 1])];
      
      const result = [
        (invMatrix[0][0] * block[0] + invMatrix[0][1] * block[1]) % 26,
        (invMatrix[1][0] * block[0] + invMatrix[1][1] * block[1]) % 26
      ];
      
      const decryptedBlock = numToChar(result[0]) + numToChar(result[1]);
      plaintext += decryptedBlock;
      
      detailSteps.push({
        block: normalizedText.substring(i, i + 2),
        calculation: `[${invMatrix[0][0]}, ${invMatrix[0][1]}] × [${block[0]}] = [${result[0]}] = ${numToChar(result[0])}\n` +
                     `[${invMatrix[1][0]}, ${invMatrix[1][1]}] × [${block[1]}] = [${result[1]}] = ${numToChar(result[1])}`
      });
    }
    
    steps.push({
      description: "Decryption Steps",
      detailSteps,
      data: plaintext
    });
    
    return { result: plaintext, steps };
  }

  return (
    <div className="bg-gray-50 flex justify-center py-2 sm:py-6">
      <div className="p-4 sm:p-6 md:p-8 my-2 sm:my-4 md:my-6 max-w-7xl w-full mx-auto bg-white rounded-lg shadow transition-all">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-center text-gray-800">
          Hill Cipher
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
          <ModeToggle mode={mode} setMode={setMode} />
          <KeyInput keyValue={key} label="Key (4 letters for 2x2 matrix)" setKey={setKey} />
        </div>

        <TextInput value={plaintext} onChange={setPlaintext} mode={mode} />

        <div className="mt-4 sm:mt-6">
          <Button onClick={handleProcess} mode={mode} />
        </div>

        {error && (
          <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-red-50 border border-red-300 text-red-700 rounded-md">
            <p className="flex items-center">
              <span className="mr-2">⚠️</span>
              {error}
            </p>
          </div>
        )}

        {result && (
          <div className="mt-4 sm:mt-6 space-y-4 sm:space-y-6">
            <div className="p-3 sm:p-4 bg-green-50 border border-green-300 rounded-md">
              <h2 className="font-bold mb-2 text-green-800">Result:</h2>
              <div className="text-lg sm:text-2xl font-mono tracking-wider p-2 bg-white rounded border border-green-100 select-all">
                {result.result}
              </div>
            </div>

            <div className="border border-gray-200 rounded-md overflow-hidden shadow-sm">
              <h2 className="font-bold p-3 sm:p-4 bg-gray-50 border-b text-gray-700">
                Process Steps:
              </h2>

              <div className="divide-y divide-gray-200">
                {result.steps.map((step, index) => (
                  <div key={index} className="p-3 sm:p-4 bg-white">
                    <h3 className="font-semibold mb-2 text-gray-800">
                      {step.description}
                    </h3>

                    {typeof step.data === "string" ? (
                      <div className="font-mono p-2 bg-gray-50 rounded-md border border-gray-100">
                        {step.data}
                      </div>
                    ) : step.data?.matrix ? (
                      <div className="p-3 bg-gray-50 rounded-md border border-gray-100">
                        <div className="mb-2 flex justify-center">
                          <table className="border-collapse">
                            <tbody>
                              {step.data.matrix.map((row, i) => (
                                <tr key={i}>
                                  {row.map((cell, j) => (
                                    <td key={j} className="border border-gray-300 p-2 text-center min-w-[40px]">
                                      {cell}
                                    </td>
                                  ))}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                        <p className="text-sm text-gray-600">{step.data.explanation}</p>
                      </div>
                    ) : null}

                    {step.detailSteps && (
                      <div className="mt-4">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-medium text-gray-700">
                            Block-by-Block Analysis:
                          </h4>
                          <button
                            onClick={() => setShowCharDetails(!showCharDetails)}
                            className="text-cyan-500 hover:text-cyan-600 text-sm font-medium flex items-center"
                          >
                            {showCharDetails ? "Hide Details" : "See Details"}
                            <svg
                              className={`ml-1 h-4 w-4 transition-transform ${
                                showCharDetails ? "transform rotate-180" : ""
                              }`}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M19 9l-7 7-7-7"
                              />
                            </svg>
                          </button>
                        </div>
                        {!showCharDetails ? (
                          <div className="bg-gray-50 rounded-md p-3 border border-gray-100">
                            <div className="flex flex-wrap gap-2">
                              {step.detailSteps.slice(0, 3).map((detail, i) => (
                                <div
                                  key={i}
                                  className="bg-white rounded-md p-2 border border-gray-200 shadow-sm"
                                >
                                  <div className="text-center font-mono mb-1">
                                    Block: {detail.block}
                                  </div>
                                  <div className="text-xs text-gray-500">
                                    Matrix calculation...
                                  </div>
                                </div>
                              ))}
                              {step.detailSteps.length > 3 && (
                                <div className="flex items-center justify-center">
                                  <span className="text-gray-500">
                                    + {step.detailSteps.length - 3} more blocks
                                  </span>
                                </div>
                              )}
                            </div>
                          </div>
                        ) : (
                          <div className="space-y-3">
                            {step.detailSteps.map((detail, i) => (
                              <div 
                                key={i} 
                                className="bg-gray-50 rounded-md p-3 border border-gray-100"
                              >
                                <div className="font-medium mb-1">Block: {detail.block}</div>
                                <div className="font-mono whitespace-pre-wrap text-sm">
                                  {detail.calculation}
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        <div className="text-xs sm:text-sm text-gray-500 mt-4 sm:mt-6 p-3 bg-gray-50 rounded-md border border-gray-100">
          <h3 className="font-medium text-gray-700 mb-1">About Hill Cipher</h3>
          <p className="mb-1">
            The Hill cipher is a polygraphic substitution cipher based on linear algebra. It was invented by Lester S. Hill in 1929.
          </p>
          <p className="mb-1">
            This implementation uses a 2×2 matrix as the key, processing pairs of letters. The key must form an invertible matrix in modulo 26.
          </p>
          <p>
            <span className="font-medium">Formula:</span> Encryption uses matrix multiplication C = KP mod 26, while decryption uses C = K⁻¹P mod 26, where K⁻¹ is the matrix inverse.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HillCipherUI;
