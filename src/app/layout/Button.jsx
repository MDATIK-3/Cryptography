export default function ActionButton({ onClick, mode }) {
  return (
    <div className="mb-6">
      <button
        onClick={onClick}
        className="w-full py-2 px-4 text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm dark:text-gray-100"
      >
        {mode === "encrypt" ? "Encrypt" : "Decrypt"}
      </button>
    </div>
  );
}
