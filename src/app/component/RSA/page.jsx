"use client";

import { useState } from "react";
import ModeToggle from "@/app/layout/ModeToggle";
import VisualRepoMain from "./VisualRepresentation/VisualRepoMain";
import MathmeticalBackGround from "./MathmeticalBackGround";

function RSACipherPage() {
  const [mode, setMode] = useState("encrypt");

  const data = mode === "decrypt"
    ? {
        mode: "decrypt",
        message: 33677,
        publicKey: 343,
        privateKey: 12007,
        sharedModulus: 159197,
        result: 1314,
        inputType: "number",
      }
    : {
        mode: "encrypt",
        message: "NO",
        publicKey: 343,
        privateKey: 12007,
        sharedModulus: 159197,
        result: 33677,
        inputType: "text",
      };

  return (
    <div className="bg-gradient-to-b from-blue-50 to-gray-50 flex justify-center py-4">
      <div className="p-6 md:p-8 my-4 max-w-5xl w-full mx-auto bg-white rounded-xl shadow-lg transition-all">
        <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center text-cyan-700 border-b pb-4 border-blue-100">
          RSA Cipher
        </h1>

        <div className="mb-6">
          <ModeToggle mode={mode} setMode={setMode} />
        </div>

        <VisualRepoMain data={data} />

        <MathmeticalBackGround />
      </div>
    </div>
  );
}

export default RSACipherPage;
