"use client";
import React, { useState } from "react";
import ModeToggle from "@/app/layout/ModeToggle";
import TextInput from "@/app/layout/TextInput";
import KeyInput from "@/app/layout/KeyInput";
import Button from "@/app/layout/Button";

const RailFenceCipherUI = () => {
  const [plaintext, setPlaintext] = useState("HELLO WORLD");
  const [key, setKey] = useState("3");
  const [mode, setMode] = useState("encrypt");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleProcess = () => {
    try {
      setError("");
      const railCount = parseInt(key, 10);
      
      if (isNaN(railCount) || railCount < 2) {
        throw new Error("Key must be a number greater than 1");
      }
      
      if (mode === "encrypt") {
        const output = encryptRailFence(plaintext, railCount);
        setResult(output);
      } else {
        const output = decryptRailFence(plaintext, railCount);
        setResult(output);
      }
    } catch (err) {
      setError(err.message);
      setResult(null);
    }
  };

  function encryptRailFence(text, rails) {
    const steps = [];
    
    const normalizedText = text.toUpperCase().replace(/[^A-Z0-9]/g, "");
    
    steps.push({
      description: "Prepare Text",
      data: `Original: "${text}" → Normalized: "${normalizedText}"`
    });
    
    if (normalizedText.length === 0) {
      throw new Error("Text must contain at least one valid character");
    }
    
    if (rails >= normalizedText.length) {
      throw new Error("Number of rails must be less than text length");
    }
    
    const fence = Array(rails).fill().map(() => Array(normalizedText.length).fill(''));
    
    let rail = 0;
    let direction = 1;
    
    for (let i = 0; i < normalizedText.length; i++) {
      fence[rail][i] = normalizedText[i];
      
      if (rail === 0) {
        direction = 1;
      } else if (rail === rails - 1) {
        direction = -1;
      }
      
      rail += direction;
    }
    
    const fenceVisualization = [];
    for (let i = 0; i < rails; i++) {
      fenceVisualization.push(fence[i].join(''));
    }
    
    steps.push({
      description: "Rail Fence Pattern",
      data: {
        pattern: fence,
        rails: rails
      }
    });
    
    let result = '';
    for (let i = 0; i < rails; i++) {
      for (let j = 0; j < normalizedText.length; j++) {
        if (fence[i][j] !== '') {
          result += fence[i][j];
        }
      }
    }
    
    steps.push({
      description: "Reading from Rails",
      data: {
        railContents: fenceVisualization,
        result: result
      }
    });
    
    return { result, steps };
  }

  function decryptRailFence(text, rails) {
    const steps = [];
    
    const normalizedText = text.toUpperCase().replace(/[^A-Z0-9]/g, "");
    
    steps.push({
      description: "Prepare Text",
      data: `Original: "${text}" → Normalized: "${normalizedText}"`
    });
    
    if (normalizedText.length === 0) {
      throw new Error("Text must contain at least one valid character");
    }
    
    if (rails >= normalizedText.length) {
      throw new Error("Number of rails must be less than text length");
    }
    
    const fence = Array(rails).fill().map(() => Array(normalizedText.length).fill(''));
    
    let rail = 0;
    let direction = 1;
    
    for (let i = 0; i < normalizedText.length; i++) {
      fence[rail][i] = '*';
      
      if (rail === 0) {
        direction = 1;
      } else if (rail === rails - 1) {
        direction = -1;
      }
      
      rail += direction;
    }
    
    let index = 0;
    for (let i = 0; i < rails; i++) {
      for (let j = 0; j < normalizedText.length; j++) {
        if (fence[i][j] === '*' && index < normalizedText.length) {
          fence[i][j] = normalizedText[index++];
        }
      }
    }
    
    steps.push({
      description: "Fill Rail Pattern",
      data: {
        pattern: fence,
        rails: rails
      }
    });
    
    let result = '';
    rail = 0;
    direction = 1;
    
    for (let i = 0; i < normalizedText.length; i++) {
      result += fence[rail][i];
      
      if (rail === 0) {
        direction = 1;
      } else if (rail === rails - 1) {
        direction = -1;
      }
      
      rail += direction;
    }
    
    steps.push({
      description: "Reading Diagonally",
      data: result
    });
    
    return { result, steps };
  }

  const RailFenceVisual = ({ pattern, rails }) => {
    return (
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <tbody>
                 {Array(rails).fill().map((_, row) => (
              <tr key={row} className="border-b border-gray-200">
                <td className="py-2 pr-2 text-right font-medium text-gray-600 w-16 sm:w-20 whitespace-nowrap">
                  Rail {row + 1}:
                </td>
                <td className="py-2 overflow-x-auto">
                  <div className="font-mono flex flex-nowrap md:flex-wrap overflow-x-auto pb-1">
                    {pattern[row].map((char, col) => (
                      <div 
                        key={col} 
                        className={`w-6 h-6 sm:w-7 sm:h-7 flex-shrink-0 flex items-center justify-center border m-0.5 rounded ${
                          char ? 'bg-blue-100 border-blue-300' : 'border-gray-200'
                        }`}
                      >
                        {char || ''}
                      </div>
                    ))}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div className="bg-gray-50 flex justify-center py-2 sm:py-6">
      <div className="p-4 sm:p-6 md:p-8 my-2 sm:my-4 md:my-6 max-w-7xl w-full mx-auto bg-white rounded-lg shadow transition-all">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-center text-gray-800">
          Rail Fence Cipher
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
          <ModeToggle mode={mode} setMode={setMode} />
          <KeyInput keyValue={key} label="Rails (2 or more)" setKey={setKey} />
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
                    ) : step.data?.pattern ? (
                      <div className="p-3 bg-gray-50 rounded-md border border-gray-100">
                        <RailFenceVisual 
                          pattern={step.data.pattern} 
                          rails={step.data.rails} 
                        />
                      </div>
                    ) : step.data?.railContents ? (
                      <div className="p-3 bg-gray-50 rounded-md border border-gray-100">
                        <div className="mb-4">
                          <h4 className="font-medium mb-2">Contents of each rail:</h4>
                          {step.data.railContents.map((content, i) => (
                            <div key={i} className="flex mb-2">
                              <div className="font-medium text-gray-600 w-20">Rail {i + 1}:</div>
                              <div className="font-mono bg-white px-2 py-1 border border-gray-200 rounded flex-1">
                                {content || "(empty)"}
                              </div>
                            </div>
                          ))}
                        </div>
                        <div>
                          <h4 className="font-medium mb-2">Final read-off result:</h4>
                          <div className="font-mono bg-white px-2 py-1 border border-gray-200 rounded">
                            {step.data.result}
                          </div>
                        </div>
                      </div>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        <div className="text-xs sm:text-sm text-gray-500 mt-4 sm:mt-6 p-3 bg-gray-50 rounded-md border border-gray-100">
          <h3 className="font-medium text-gray-700 mb-1">About Rail Fence Cipher</h3>
          <p className="mb-1">
            The Rail Fence cipher (also called Zigzag cipher) is a form of transposition cipher that gets its name from the way the message is encoded.
          </p>
          <p className="mb-1">
            In this cipher, the plaintext is written in a zigzag pattern on a number of "rails" or rows, and then read off in rows to produce the ciphertext.
          </p>
          <p>
            The number of rails (the key) determines the pattern's height and complexity. This is a simple form of a route cipher.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RailFenceCipherUI;
