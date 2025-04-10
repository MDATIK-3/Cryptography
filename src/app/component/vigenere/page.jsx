"use client";
import { useState } from "react";
import ModeToggle from "@/app/layout/ModeToggle";
import TextInput from "@/app/layout/TextInput";
import KeyInput from "@/app/layout/KeyInput";
import Button from "@/app/layout/Button";
import KeyVisualization from "./KeyVisualization";
import VigenereCipherDiagram from "./VigenereCipherDiagram";
import About from "./About";

const VigenereCipherUI = () => {
  const [plaintext, setPlaintext] = useState("she is listening");
  const [key, setKey] = useState("PASCAL");
  const [mode, setMode] = useState("encrypt");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");
  const [showCharDetails, setShowCharDetails] = useState(false);
  const [showKeyVisualization, setShowKeyVisualization] = useState(false);

  const normalizeText = (text) => {
    return text.replace(/[^a-zA-Z]/g, "").toUpperCase();
  };

  const normalizeKey = (key) => {
    if (!key || key.trim() === "") {
      throw new Error("Key cannot be empty");
    }

    const normalizedKey = key.toUpperCase().replace(/[^A-Z]/g, "");

    if (normalizedKey.length === 0) {
      throw new Error("Key must contain at least one letter");
    }

    return normalizedKey;
  };

  const generateRepeatedKey = (text, key) => {
    return Array(text.length)
      .fill()
      .map((_, i) => key[i % key.length])
      .join("");
  };

  const handleProcess = () => {
    try {
      setError("");
      const normalizedKey = normalizeKey(key);
      const cleanedText = normalizeText(plaintext);
      setPlaintext(cleanedText);
      setKey(normalizedKey);

      const steps = [];

      steps.push({
        description: "Process Key",
        data: `Original Key: "${key}" → Normalized: "${normalizedKey}"`,
      });

      const repeatedKey = generateRepeatedKey(cleanedText, normalizedKey);

      steps.push({
        description: "Repeating Key Generation",
        data: `Cleaned ${
          mode === "encrypt" ? "Plaintext" : "Ciphertext"
        }: ${cleanedText}\nRepeated Key: ${repeatedKey}`,
      });

      let output;
      if (mode === "encrypt") {
        output = encryptVigenere(cleanedText, repeatedKey);
        steps.push(output.step);
      } else {
        output = decryptVigenere(cleanedText, repeatedKey);
        steps.push(output.step);
      }

      setResult({ result: output.result, steps });
      setShowKeyVisualization(true);
    } catch (err) {
      setError(err.message);
      setResult(null);
      setShowKeyVisualization(false);
    }
  };

  function encryptVigenere(cleanPlaintext, repeatedKey) {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let ciphertext = "";
    const charSteps = [];

    for (let i = 0; i < cleanPlaintext.length; i++) {
      const plaintextChar = cleanPlaintext[i];
      const keyChar = repeatedKey[i];
      const plaintextIndex = alphabet.indexOf(plaintextChar);
      const keyIndex = alphabet.indexOf(keyChar);
      const ciphertextChar = alphabet[(plaintextIndex + keyIndex) % 26];

      ciphertext += ciphertextChar;

      charSteps.push({
        original: plaintextChar,
        keyChar: keyChar,
        mapped: ciphertextChar,
        calculation: `(${plaintextIndex} + ${keyIndex}) mod 26 = ${
          (plaintextIndex + keyIndex) % 26
        }`,
      });
    }

    const step = {
      description: "Character Transformations",
      charSteps,
      data: ciphertext,
    };

    return { result: ciphertext, step };
  }

  function decryptVigenere(cleanCiphertext, repeatedKey) {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let plaintext = "";
    const charSteps = [];

    for (let i = 0; i < cleanCiphertext.length; i++) {
      const ciphertextChar = cleanCiphertext[i];
      const keyChar = repeatedKey[i];
      const cipherIndex = alphabet.indexOf(ciphertextChar);
      const keyIndex = alphabet.indexOf(keyChar);

      let plaintextIndex = (cipherIndex - keyIndex + 26) % 26;
      const plaintextChar = alphabet[plaintextIndex];

      plaintext += plaintextChar;

      charSteps.push({
        original: ciphertextChar,
        keyChar: keyChar,
        mapped: plaintextChar,
        calculation: `(${cipherIndex} - ${keyIndex} + 26) mod 26 = ${plaintextIndex}`,
      });
    }

    const step = {
      description: "Character Transformations",
      charSteps,
      data: plaintext,
    };

    return { result: plaintext, step };
  }
  return (
    <div className="bg-gray-50 flex justify-center py-2 sm:py-6">
      <div className="p-4 sm:p-6 md:p-8 my-2 sm:my-4 md:my-6 max-w-7xl w-full mx-auto bg-white rounded-lg shadow transition-all">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-center text-gray-800">
          Vigenere Cipher
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
          <ModeToggle mode={mode} setMode={setMode} />
          <KeyInput keyValue={key} label="Keyword" setKey={setKey} />
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

        {showKeyVisualization && (
          <div className="mt-6">
            <KeyVisualization plaintext={plaintext} keyword={key} />
          </div>
        )}

        {showKeyVisualization && (
          <div className="mt-3">
            <VigenereCipherDiagram
              keyword={key}
              plaintext={plaintext}
              mode={mode}
            />
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
                      <div className="font-mono p-2 bg-gray-50 rounded-md border border-gray-100 whitespace-pre-wrap">
                        {step.data}
                      </div>
                    ) : null}

                    {step.charSteps && (
                      <div className="mt-4">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-medium text-gray-700">
                            Character-by-Character Analysis:
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
                        {!showCharDetails && (
                          <div className="bg-gray-50 rounded-md p-3 border border-gray-100">
                            <div className="flex flex-wrap gap-2">
                              {step.charSteps.slice(0, 5).map((charStep, i) => (
                                <div
                                  key={i}
                                  className="bg-white rounded-md p-2 border border-gray-200 shadow-sm"
                                >
                                  <div className="text-center font-mono mb-1">
                                    {charStep.original}{" "}
                                    <span className="text-gray-400">
                                      (key: {charStep.keyChar})
                                    </span>{" "}
                                    → {charStep.mapped}
                                  </div>
                                  <div className="text-xs text-gray-500">
                                    {charStep.calculation}
                                  </div>
                                </div>
                              ))}
                              {step.charSteps.length > 5 && (
                                <div className="flex items-center justify-center">
                                  <span className="text-gray-500">
                                    + {step.charSteps.length - 5} more
                                  </span>
                                </div>
                              )}
                            </div>
                          </div>
                        )}
                        {showCharDetails && (
                          <div className="overflow-x-auto -mx-3 sm:mx-0">
                            <div className="inline-block min-w-full align-middle sm:px-2 lg:px-4">
                              <table className="min-w-full border-collapse">
                                <thead>
                                  <tr>
                                    <th className="p-2 border bg-gray-50 text-gray-700">
                                      Original
                                    </th>
                                    <th className="p-2 border bg-gray-50 text-gray-700">
                                      Key Char
                                    </th>
                                    <th className="p-2 border bg-gray-50 text-gray-700">
                                      Calculation
                                    </th>
                                    <th className="p-2 border bg-gray-50 text-gray-700">
                                      Result
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {step.charSteps.map((charStep, i) => (
                                    <tr key={i}>
                                      <td className="p-2 border text-center font-mono">
                                        {charStep.original}
                                      </td>
                                      <td className="p-2 border text-center font-mono">
                                        {charStep.keyChar}
                                      </td>
                                      <td className="p-2 border font-mono text-xs sm:text-sm">
                                        {charStep.calculation}
                                      </td>
                                      <td className="p-2 border text-center font-mono">
                                        {charStep.mapped}
                                      </td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
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
        <About />
      </div>
    </div>
  );
};

export default VigenereCipherUI;
