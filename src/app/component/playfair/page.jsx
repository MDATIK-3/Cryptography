"use client";
import React, { useState } from "react";
import ModeToggle from "@/app/layout/ModeToggle";
import TextInput from "@/app/layout/TextInput";
import KeyInput from "@/app/layout/KeyInput";
import Button from "@/app/layout/Button";

const PlayfairCipherUI = () => {
  const [plaintext, setPlaintext] = useState("HELLO WORLD");
  const [key, setKey] = useState("MONARCHY");
  const [mode, setMode] = useState("encrypt");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleProcess = () => {
    try {
      setError("");
      if (mode === "encrypt") {
        const output = encryptPlayfair(plaintext, key);
        setResult(output);
      } else {
        const output = decryptPlayfair(plaintext, key);
        setResult(output);
      }
    } catch (err) {
      setError(err.message);
      setResult(null);
    }
  };

  function createPlayfairSquare(key) {
<<<<<<< HEAD
    // Standardize the key (remove spaces, convert to uppercase)
    const standardKey = key.toUpperCase().replace(/\s/g, "");

    // Replace J with I if it exists in the key
    const processedKey = standardKey.replace(/J/g, "I");

    // Create the alphabet (without J)
    const alphabet = "ABCDEFGHIKLMNOPQRSTUVWXYZ";

    // Create a 5x5 matrix
    const matrix = [];
    const usedChars = new Set();

    // First, add characters from the key
=======
    const standardKey = key.toUpperCase().replace(/\s/g, "");
    const processedKey = standardKey.replace(/J/g, "I");
    const alphabet = "ABCDEFGHIKLMNOPQRSTUVWXYZ";

    const matrix = [];
    const usedChars = new Set();

>>>>>>> f6a3ce5 (replace the ciphers data json content from page.jsx to public folder)
    for (const char of processedKey) {
      if (!usedChars.has(char) && alphabet.includes(char)) {
        usedChars.add(char);
        matrix.push(char);
      }
    }

<<<<<<< HEAD
    // Then, add the remaining alphabet characters
=======
>>>>>>> f6a3ce5 (replace the ciphers data json content from page.jsx to public folder)
    for (const char of alphabet) {
      if (!usedChars.has(char)) {
        matrix.push(char);
      }
    }

<<<<<<< HEAD
    // Convert to 5x5 grid format
=======
>>>>>>> f6a3ce5 (replace the ciphers data json content from page.jsx to public folder)
    const grid = [];
    for (let i = 0; i < 5; i++) {
      grid.push(matrix.slice(i * 5, (i + 1) * 5));
    }

    return grid;
  }

  function findPosition(grid, char) {
<<<<<<< HEAD
    // Replace J with I for lookup
=======
>>>>>>> f6a3ce5 (replace the ciphers data json content from page.jsx to public folder)
    const lookupChar = char === "J" ? "I" : char;

    for (let row = 0; row < 5; row++) {
      for (let col = 0; col < 5; col++) {
        if (grid[row][col] === lookupChar) {
          return { row, col };
        }
      }
    }
    return null;
  }

  function prepareText(text) {
<<<<<<< HEAD
    // Remove spaces and convert to uppercase
    let processed = text.toUpperCase().replace(/\s/g, "");

    // Replace J with I
    processed = processed.replace(/J/g, "I");

    // Handle non-alphabetic characters
    processed = processed.replace(/[^A-Z]/g, "");

    // Split into digraphs
=======
    let processed = text.toUpperCase().replace(/\s/g, "");
    processed = processed.replace(/J/g, "I");
    processed = processed.replace(/[^A-Z]/g, "");

>>>>>>> f6a3ce5 (replace the ciphers data json content from page.jsx to public folder)
    const digraphs = [];
    let i = 0;

    while (i < processed.length) {
      if (i === processed.length - 1) {
<<<<<<< HEAD
        // If we have a single character left, add an 'X'
        digraphs.push([processed[i], "X"]);
        i++;
      } else if (processed[i] === processed[i + 1]) {
        // If we have a repeated character, insert an 'X'
        digraphs.push([processed[i], "X"]);
        i++;
      } else {
        // Regular digraph
=======
        digraphs.push([processed[i], "X"]);
        i++;
      } else if (processed[i] === processed[i + 1]) {
        digraphs.push([processed[i], "X"]);
        i++;
      } else {
>>>>>>> f6a3ce5 (replace the ciphers data json content from page.jsx to public folder)
        digraphs.push([processed[i], processed[i + 1]]);
        i += 2;
      }
    }

    return digraphs;
  }

  function encryptPlayfair(plaintext, key) {
    const steps = [];

<<<<<<< HEAD
    // Step 1: Create the Playfair square
=======
>>>>>>> f6a3ce5 (replace the ciphers data json content from page.jsx to public folder)
    const grid = createPlayfairSquare(key);
    steps.push({
      description: "Create Playfair Square",
      data: {
        grid,
        explanation:
          "Created 5x5 grid using key, filling remaining cells with unused alphabet (excluding J)",
      },
    });

<<<<<<< HEAD
    // Step 2: Prepare the plaintext
=======
>>>>>>> f6a3ce5 (replace the ciphers data json content from page.jsx to public folder)
    const originalText = plaintext;
    const digraphs = prepareText(plaintext);

    steps.push({
      description: "Prepare Plaintext",
      data: {
        original: originalText,
        processed: digraphs.flat().join(""),
        digraphs,
        rules: [
          "Convert to uppercase",
          "Remove spaces and non-alphabetic characters",
          "Replace J with I",
          "Split into pairs",
          "Insert X between repeated letters",
          "Add X if text has odd length",
        ],
      },
    });

<<<<<<< HEAD
    // Step 3: Encrypt each digraph
=======
>>>>>>> f6a3ce5 (replace the ciphers data json content from page.jsx to public folder)
    const encryptedDigraphs = [];
    const encryptionDetails = [];

    for (const [char1, char2] of digraphs) {
      const pos1 = findPosition(grid, char1);
      const pos2 = findPosition(grid, char2);

      let newChar1, newChar2;
      let rule;

<<<<<<< HEAD
      // Same row
=======
>>>>>>> f6a3ce5 (replace the ciphers data json content from page.jsx to public folder)
      if (pos1.row === pos2.row) {
        newChar1 = grid[pos1.row][(pos1.col + 1) % 5];
        newChar2 = grid[pos2.row][(pos2.col + 1) % 5];
        rule = "Same row: shift right (wrap if needed)";
      }
<<<<<<< HEAD
      // Same column
=======
>>>>>>> f6a3ce5 (replace the ciphers data json content from page.jsx to public folder)
      else if (pos1.col === pos2.col) {
        newChar1 = grid[(pos1.row + 1) % 5][pos1.col];
        newChar2 = grid[(pos2.row + 1) % 5][pos2.col];
        rule = "Same column: shift down (wrap if needed)";
      }
<<<<<<< HEAD
      // Rectangle
=======
>>>>>>> f6a3ce5 (replace the ciphers data json content from page.jsx to public folder)
      else {
        newChar1 = grid[pos1.row][pos2.col];
        newChar2 = grid[pos2.row][pos1.col];
        rule = "Rectangle: exchange columns";
      }

      encryptedDigraphs.push([newChar1, newChar2]);

      encryptionDetails.push({
        original: [char1, char2],
        originalPositions: [pos1, pos2],
        encrypted: [newChar1, newChar2],
        rule,
      });
    }

    steps.push({
      description: "Encrypt Digraphs",
      data: {
        details: encryptionDetails,
      },
    });

<<<<<<< HEAD
    // Step 4: Final result
=======
>>>>>>> f6a3ce5 (replace the ciphers data json content from page.jsx to public folder)
    const ciphertext = encryptedDigraphs.flat().join("");

    steps.push({
      description: "Final Result",
      data: ciphertext,
    });

    return { result: ciphertext, steps };
  }

  function decryptPlayfair(ciphertext, key) {
    const steps = [];

<<<<<<< HEAD
    // Step 1: Create the Playfair square
=======
>>>>>>> f6a3ce5 (replace the ciphers data json content from page.jsx to public folder)
    const grid = createPlayfairSquare(key);

    steps.push({
      description: "Create Playfair Square",
      data: {
        grid,
        explanation:
          "Created 5x5 grid using key, filling remaining cells with unused alphabet (excluding J)",
      },
    });

<<<<<<< HEAD
    // Step 2: Prepare the ciphertext
    const originalText = ciphertext;
    // For decryption, we just split into pairs (no need to handle repeated letters)
=======
    const originalText = ciphertext;
>>>>>>> f6a3ce5 (replace the ciphers data json content from page.jsx to public folder)
    let processed = ciphertext
      .toUpperCase()
      .replace(/\s/g, "")
      .replace(/J/g, "I");
    processed = processed.replace(/[^A-Z]/g, "");

<<<<<<< HEAD
    // Ensure even length
=======
>>>>>>> f6a3ce5 (replace the ciphers data json content from page.jsx to public folder)
    if (processed.length % 2 !== 0) {
      processed += "X";
    }

<<<<<<< HEAD
    // Split into digraphs
=======
>>>>>>> f6a3ce5 (replace the ciphers data json content from page.jsx to public folder)
    const digraphs = [];
    for (let i = 0; i < processed.length; i += 2) {
      digraphs.push([processed[i], processed[i + 1]]);
    }

    steps.push({
      description: "Prepare Ciphertext",
      data: {
        original: originalText,
        processed: processed,
        digraphs,
        rules: [
          "Convert to uppercase",
          "Remove spaces and non-alphabetic characters",
          "Replace J with I",
          "Split into pairs",
        ],
      },
    });

<<<<<<< HEAD
    // Step 3: Decrypt each digraph
=======
>>>>>>> f6a3ce5 (replace the ciphers data json content from page.jsx to public folder)
    const decryptedDigraphs = [];
    const decryptionDetails = [];

    for (const [char1, char2] of digraphs) {
      const pos1 = findPosition(grid, char1);
      const pos2 = findPosition(grid, char2);

      let newChar1, newChar2;
      let rule;

<<<<<<< HEAD
      // Same row
      if (pos1.row === pos2.row) {
        newChar1 = grid[pos1.row][(pos1.col + 4) % 5]; // -1 + 5 = +4 (modular arithmetic)
        newChar2 = grid[pos2.row][(pos2.col + 4) % 5];
        rule = "Same row: shift left (wrap if needed)";
      }
      // Same column
=======
      if (pos1.row === pos2.row) {
        newChar1 = grid[pos1.row][(pos1.col + 4) % 5]; 
        newChar2 = grid[pos2.row][(pos2.col + 4) % 5];
        rule = "Same row: shift left (wrap if needed)";
      }
>>>>>>> f6a3ce5 (replace the ciphers data json content from page.jsx to public folder)
      else if (pos1.col === pos2.col) {
        newChar1 = grid[(pos1.row + 4) % 5][pos1.col];
        newChar2 = grid[(pos2.row + 4) % 5][pos2.col];
        rule = "Same column: shift up (wrap if needed)";
      }
<<<<<<< HEAD
      // Rectangle
=======
>>>>>>> f6a3ce5 (replace the ciphers data json content from page.jsx to public folder)
      else {
        newChar1 = grid[pos1.row][pos2.col];
        newChar2 = grid[pos2.row][pos1.col];
        rule = "Rectangle: exchange columns";
      }

      decryptedDigraphs.push([newChar1, newChar2]);

      decryptionDetails.push({
        original: [char1, char2],
        originalPositions: [pos1, pos2],
        decrypted: [newChar1, newChar2],
        rule,
      });
    }

    steps.push({
      description: "Decrypt Digraphs",
      data: {
        details: decryptionDetails,
      },
    });

<<<<<<< HEAD
    // Step 4: Final result (note: we don't remove Xs that were added during encryption)
=======
>>>>>>> f6a3ce5 (replace the ciphers data json content from page.jsx to public folder)
    const plaintext = decryptedDigraphs.flat().join("");

    steps.push({
      description: "Final Result",
      data: plaintext,
    });

    return { result: plaintext, steps };
  }

<<<<<<< HEAD
  // Helper to display the Playfair grid
=======
>>>>>>> f6a3ce5 (replace the ciphers data json content from page.jsx to public folder)
  const PlayfairGrid = ({ grid, highlights = null }) => {
    return (
      <div className="border border-gray-300 inline-block">
        <table className="border-collapse">
          <tbody>
            {grid.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, colIndex) => {
                  let isHighlighted = false;
                  let highlightClass = "";

                  if (highlights) {
<<<<<<< HEAD
                    // Check if this cell should be highlighted
=======
>>>>>>> f6a3ce5 (replace the ciphers data json content from page.jsx to public folder)
                    for (let i = 0; i < highlights.length; i++) {
                      const pos = highlights[i];
                      if (pos.row === rowIndex && pos.col === colIndex) {
                        isHighlighted = true;
                        highlightClass =
                          i === 0 ? "bg-blue-200" : "bg-green-200";
                      }
                    }
                  }

                  return (
                    <td
                      key={colIndex}
                      className={`w-10 h-10 text-center border border-gray-300 font-mono text-lg ${highlightClass}`}
                    >
                      {cell}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div className=" bg-gray-50 flex justify-center py-2 sm:py-6">
      <div className="p-4 sm:p-6 md:p-8 my-2 sm:my-4 md:my-6 max-w-7xl w-full mx-auto bg-white rounded-lg shadow transition-all">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-center text-gray-800">
          Playfair Cipher
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
          <ModeToggle mode={mode} setMode={setMode} />
          <KeyInput keyValue={key} label="Key (any words)" setKey={setKey} />
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
          <div className="mb-6">
            <div className="mb-4 p-4 bg-green-100 border border-green-400 rounded">
              <h2 className="font-bold mb-2">Result:</h2>
              <div className="text-2xl font-mono tracking-wider">
                {result.result}
              </div>
            </div>

            <div className="border border-gray-300 rounded overflow-hidden">
              <h2 className="font-bold p-4 bg-gray-100 border-b">
                Process Steps:
              </h2>

              {result.steps.map((step, index) => (
                <div key={index} className="p-4 border-b last:border-b-0">
                  <h3 className="font-semibold mb-2">{step.description}</h3>

                  {step.description === "Create Playfair Square" && (
                    <div className="mb-4">
                      <div className="mb-2 font-medium">
                        5×5 Playfair Square:
                      </div>
                      <div className="flex justify-center mb-4">
                        <PlayfairGrid grid={step.data.grid} />
                      </div>
                      <div className="text-sm text-gray-600 mt-2">
                        {step.data.explanation}
                      </div>
                    </div>
                  )}

                  {step.description === "Prepare Plaintext" && (
                    <div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <div className="font-medium mb-1">Original Text:</div>
                          <div className="p-2 bg-gray-50 rounded font-mono">
                            {step.data.original}
                          </div>
                        </div>
                        <div>
                          <div className="font-medium mb-1">
                            Processed Text:
                          </div>
                          <div className="p-2 bg-gray-50 rounded font-mono">
                            {step.data.processed}
                          </div>
                        </div>
                      </div>

                      <div className="mb-4">
                        <div className="font-medium mb-1">Digraphs:</div>
                        <div className="flex flex-wrap gap-2">
                          {step.data.digraphs.map((digraph, i) => (
                            <div
                              key={i}
                              className="px-3 py-1 bg-blue-100 rounded font-mono"
                            >
                              {digraph.join("")}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <div className="font-medium mb-1">
                          Processing Rules:
                        </div>
                        <ul className="list-disc pl-5 text-sm text-gray-600">
                          {step.data.rules.map((rule, i) => (
                            <li key={i}>{rule}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  {step.description === "Prepare Ciphertext" && (
                    <div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <div className="font-medium mb-1">Original Text:</div>
                          <div className="p-2 bg-gray-50 rounded font-mono">
                            {step.data.original}
                          </div>
                        </div>
                        <div>
                          <div className="font-medium mb-1">
                            Processed Text:
                          </div>
                          <div className="p-2 bg-gray-50 rounded font-mono">
                            {step.data.processed}
                          </div>
                        </div>
                      </div>

                      <div className="mb-4">
                        <div className="font-medium mb-1">Digraphs:</div>
                        <div className="flex flex-wrap gap-2">
                          {step.data.digraphs.map((digraph, i) => (
                            <div
                              key={i}
                              className="px-3 py-1 bg-blue-100 rounded font-mono"
                            >
                              {digraph.join("")}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <div className="font-medium mb-1">
                          Processing Rules:
                        </div>
                        <ul className="list-disc pl-5 text-sm text-gray-600">
                          {step.data.rules.map((rule, i) => (
                            <li key={i}>{rule}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  {(step.description === "Encrypt Digraphs" ||
                    step.description === "Decrypt Digraphs") && (
<<<<<<< HEAD
                    <div>
                      {step.data.details.map((detail, i) => {
                        const firstChar = detail.original[0];
                        const secondChar = detail.original[1];
                        const resultChars =
                          step.description === "Encrypt Digraphs"
                            ? detail.encrypted
                            : detail.decrypted;

                        return (
                          <div
                            key={i}
                            className="mb-6 p-4 border border-gray-200 rounded"
                          >
                            <div className="font-medium mb-2">
                              Digraph {i + 1}: {firstChar}
                              {secondChar} → {resultChars[0]}
                              {resultChars[1]}
                            </div>

                            <div className="mb-2 text-sm font-medium">
                              Rule: {detail.rule}
                            </div>

                            <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-4">
                              <div className="text-center">
                                <div className="mb-1 text-sm font-medium">
                                  Positions in the grid:
                                </div>
                                <PlayfairGrid
                                  grid={result.steps[0].data.grid}
                                  highlights={detail.originalPositions}
                                />
                                <div className="mt-1 text-xs">
                                  <span className="px-2 py-1 mr-2 bg-blue-200">
                                    {firstChar} at (
                                    {detail.originalPositions[0].row},
                                    {detail.originalPositions[0].col})
                                  </span>
                                  <span className="px-2 py-1 bg-green-200">
                                    {secondChar} at (
                                    {detail.originalPositions[1].row},
                                    {detail.originalPositions[1].col})
                                  </span>
                                </div>
                              </div>

                              <div className="text-4xl">→</div>

                              <div className="text-center">
                                <div className="text-sm font-medium mb-1">
                                  Character transformation:
                                </div>
                                <div className="grid grid-cols-2 gap-4 text-center">
                                  <div>
                                    <div className="w-16 h-16 mx-auto flex items-center justify-center bg-blue-100 rounded-full font-mono text-2xl">
                                      {firstChar}
                                    </div>
                                    <div className="text-xl mt-2">↓</div>
                                    <div className="w-16 h-16 mx-auto flex items-center justify-center bg-blue-300 rounded-full font-mono text-2xl">
                                      {resultChars[0]}
                                    </div>
                                  </div>
                                  <div>
                                    <div className="w-16 h-16 mx-auto flex items-center justify-center bg-green-100 rounded-full font-mono text-2xl">
                                      {secondChar}
                                    </div>
                                    <div className="text-xl mt-2">↓</div>
                                    <div className="w-16 h-16 mx-auto flex items-center justify-center bg-green-300 rounded-full font-mono text-2xl">
                                      {resultChars[1]}
=======
                      <div>
                        {step.data.details.map((detail, i) => {
                          const firstChar = detail.original[0];
                          const secondChar = detail.original[1];
                          const resultChars =
                            step.description === "Encrypt Digraphs"
                              ? detail.encrypted
                              : detail.decrypted;

                          return (
                            <div
                              key={i}
                              className="mb-6 p-4 border border-gray-200 rounded"
                            >
                              <div className="font-medium mb-2">
                                Digraph {i + 1}: {firstChar}
                                {secondChar} → {resultChars[0]}
                                {resultChars[1]}
                              </div>

                              <div className="mb-2 text-sm font-medium">
                                Rule: {detail.rule}
                              </div>

                              <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-4">
                                <div className="text-center">
                                  <div className="mb-1 text-sm font-medium">
                                    Positions in the grid:
                                  </div>
                                  <PlayfairGrid
                                    grid={result.steps[0].data.grid}
                                    highlights={detail.originalPositions}
                                  />
                                  <div className="mt-1 text-xs">
                                    <span className="px-2 py-1 mr-2 bg-blue-200">
                                      {firstChar} at (
                                      {detail.originalPositions[0].row},
                                      {detail.originalPositions[0].col})
                                    </span>
                                    <span className="px-2 py-1 bg-green-200">
                                      {secondChar} at (
                                      {detail.originalPositions[1].row},
                                      {detail.originalPositions[1].col})
                                    </span>
                                  </div>
                                </div>

                                <div className="text-4xl">→</div>

                                <div className="text-center">
                                  <div className="text-sm font-medium mb-1">
                                    Character transformation:
                                  </div>
                                  <div className="grid grid-cols-2 gap-4 text-center">
                                    <div>
                                      <div className="w-16 h-16 mx-auto flex items-center justify-center bg-blue-100 rounded-full font-mono text-2xl">
                                        {firstChar}
                                      </div>
                                      <div className="text-xl mt-2">↓</div>
                                      <div className="w-16 h-16 mx-auto flex items-center justify-center bg-blue-300 rounded-full font-mono text-2xl">
                                        {resultChars[0]}
                                      </div>
                                    </div>
                                    <div>
                                      <div className="w-16 h-16 mx-auto flex items-center justify-center bg-green-100 rounded-full font-mono text-2xl">
                                        {secondChar}
                                      </div>
                                      <div className="text-xl mt-2">↓</div>
                                      <div className="w-16 h-16 mx-auto flex items-center justify-center bg-green-300 rounded-full font-mono text-2xl">
                                        {resultChars[1]}
                                      </div>
>>>>>>> f6a3ce5 (replace the ciphers data json content from page.jsx to public folder)
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
<<<<<<< HEAD
                          </div>
                        );
                      })}
                    </div>
                  )}
=======
                          );
                        })}
                      </div>
                    )}
>>>>>>> f6a3ce5 (replace the ciphers data json content from page.jsx to public folder)

                  {step.description === "Final Result" && (
                    <div className="p-2 bg-gray-50 rounded font-mono text-lg tracking-wider">
                      {step.data}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="text-xs text-gray-500 mt-6">
          <p className="font-medium mb-1">About Playfair Cipher:</p>
          <ul className="list-disc pl-5">
            <li>
              Encrypts digraphs (pairs of letters) instead of single letters
            </li>
            <li>Uses a 5x5 grid of letters constructed using a keyword</li>
            <li>The letter J is typically replaced with I</li>
            <li>
              Three rules for encryption: same row, same column, or rectangle
            </li>
            <li>
              Special handling for repeated letters and odd-length messages
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PlayfairCipherUI;
