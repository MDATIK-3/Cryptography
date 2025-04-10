import CodeIcon from "./SVG/CodeIcon";
import QuestionIcon from "./SVG/ExcitedIcon";

function MathematicalBackGround() {
  return (
    <div className="border border-blue-200 rounded-xl overflow-hidden shadow-md bg-white">
      <h2 className="font-bold p-4 bg-gradient-to-r from-blue-50 to-sky-50 border-b text-blue-700 flex items-center">
        <CodeIcon />
        RSA Mathematical Background
      </h2>

      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-4 rounded-xl border border-blue-100 shadow-sm">
            <h3 className="text-blue-800 font-semibold mb-3">Key Generation</h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li>Choose two distinct prime numbers, p and q.</li>
              <li>Compute n = p × q</li>
              <li>Compute φ(n) = (p - 1) × (q - 1)</li>
              <li>
                Choose e such that 1 &lt; e &lt; φ(n) and gcd(e, φ(n)) = 1
              </li>
              <li>Compute d such that (d × e) mod φ(n) = 1</li>
            </ol>
            <div className="mt-4 p-3 bg-white rounded-lg border border-blue-100">
              <p className="font-medium text-blue-700">Public Key: (e, n)</p>
              <p className="font-medium text-indigo-700">Private Key: (d, n)</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-4 rounded-xl border border-emerald-100 shadow-sm">
            <h3 className="text-emerald-800 font-semibold mb-3">
              Encryption/Decryption
            </h3>
            <div className="space-y-4">
              <div className="p-3 bg-white rounded-lg border border-emerald-100">
                <p className="font-medium text-emerald-700">Encryption:</p>
                <p className="font-mono">
                  C = P<sup>e</sup> mod n
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  Where P is the plaintext message and C is the ciphertext
                </p>
              </div>
              <div className="p-3 bg-white rounded-lg border border-teal-100">
                <p className="font-medium text-teal-700">Decryption:</p>
                <p className="font-mono">
                  P = C<sup>d</sup> mod n
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  Where C is the ciphertext and P is the original message
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
          <h3 className="text-yellow-800 font-semibold mb-2 flex items-center">
            <QuestionIcon />
            Security Note
          </h3>
          <p className="text-gray-700">
            RSA's security relies on the difficulty of factoring the product of
            two large prime numbers. In practice, key sizes of 1024 bits or more
            are recommended for security. This demonstration uses small values
            for educational purposes.
          </p>
        </div>
      </div>
    </div>
  );
}

export default MathematicalBackGround;
