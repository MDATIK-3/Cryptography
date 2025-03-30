export default function TextInput({ mode, value, onChange }) {
    return (
      <div className="mb-6">
        <label className="block text-sm font-medium mb-1">
          {mode === "encrypt" ? "Plaintext" : "Ciphertext"}
        </label>
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded h-24"
          placeholder={
            mode === "encrypt"
              ? "Enter text to encrypt"
              : "Enter text to decrypt"
          }
        />
      </div>
    );
  }