export default function VigenereCipherDiagram({ keyword, plaintext, mode }) {
  const generateCipherData = () => {
    const groups = [];

    if (!keyword || keyword.length === 0) {
      return [];
    }

    for (let i = 0; i < plaintext.length; i++) {
      const keyChar = keyword[i % keyword.length];
      const plainChar = plaintext[i];
      const keyCode = keyChar.charCodeAt(0) - 65;
      const plainCode = plainChar.charCodeAt(0) - 65;

      let resultChar;
      if (mode === "encrypt") {
        resultChar = String.fromCharCode(((plainCode + keyCode) % 26) + 65);
      } else {
        resultChar = String.fromCharCode(
          ((((plainCode - keyCode) % 26) + 26) % 26) + 65
        );
      }

      if (!groups[i % keyword.length]) {
        groups[i % keyword.length] = {
          keyChar,
          sourceChars: [],
          resultChars: [],
        };
      }

      groups[i % keyword.length].sourceChars.push(plainChar);
      groups[i % keyword.length].resultChars.push(resultChar);
    }
    return groups;
  };

  const groups = generateCipherData();

  if (groups.length === 0) {
    return null;
  }

  return (
    <div className="border rounded-lg bg-gray-50 p-4 md:p-6">
      <h2 className="text-lg font-semibold text-center mb-4 text-gray-700">
        Cipher Process Visualization
      </h2>
      <div className="flex flex-wrap justify-center gap-3">
        {groups.map((group, index) => (
          <div
            key={index}
            className="text-center p-3 border rounded-lg bg-white shadow-sm transition-all hover:shadow"
          >
            <div className="font-bold text-cyan-600 mb-2 text-lg">
              Key: {group.keyChar}
            </div>
            <div className="text-gray-700 mb-1">
              <span className="text-xs font-medium text-gray-500 block mb-1">
                {mode === "encrypt" ? "Plain" : "Cipher"}:
              </span>
              <span className="font-mono tracking-wide">
                {group.sourceChars.join(" ")}
              </span>
            </div>
            <div className="font-semibold text-emerald-600">
              <span className="text-xs font-medium text-gray-500 block mb-1">
                {mode === "encrypt" ? "Cipher" : "Plain"}:
              </span>
              <span className="font-mono tracking-wide">
                {group.resultChars.join(" ")}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
