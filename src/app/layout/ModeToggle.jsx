function ModeToggle({ mode, setMode }) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-200">
        Mode
      </label>
      <div className="flex rounded-md overflow-hidden border border-gray-300 dark:border-gray-600">
        <button
          onClick={() => setMode("encrypt")}
          className={`flex-1 py-2 px-4 transition-all ${
            mode === "encrypt"
              ? "text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none font-medium rounded-lg text-sm"
              : "bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200"
          }`}
        >
          Encrypt
        </button>
        <button
          onClick={() => setMode("decrypt")}
          className={`flex-1 py-2 px-4 transition-all ${
            mode === "decrypt"
              ? "text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none font-medium rounded-lg text-sm"
              : "bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200"
          }`}
        >
          Decrypt
        </button>
      </div>
    </div>
  );
}

export default ModeToggle;
