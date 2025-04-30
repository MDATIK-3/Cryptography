import DecryptionVisualization from "./DecryptionVisualization";
import EncryptionVisualization from "./EncryptionVisualization";
import WatchIcon from "../SVG/WatchIcon";

function VisualRepoMain({ data }) {
  const {
    mode,
    message,
    publicKey,
    privateKey,
    sharedModulus,
    result,
    inputType,
  } = data;

  return (
    <div className="border border-indigo-200 rounded-xl overflow-hidden shadow-md bg-white">
      <h2 className="font-bold p-4 bg-gradient-to-r from-indigo-50 to-purple-50 border-b text-cyan-600 flex items-center">
        <WatchIcon />
        Visual Representation
      </h2>

      <div className="p-6">
        {mode === "encrypt" ? (
          <EncryptionVisualization
            message={message}
            publicKey={{ e: publicKey, n: sharedModulus }}
            inputType={inputType}
            result={result}
          />
        ) : (
          <DecryptionVisualization
            ciphertext={message}
            privateKey={{ d: privateKey, n: sharedModulus }}
            result={result}
          />
        )}
      </div>
    </div>
  );
}

export default VisualRepoMain;
