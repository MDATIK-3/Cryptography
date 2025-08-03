const KeyInput = ({ keyValue, label, setKey }) => {
  return (
    <div>
      <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-200">
        {label}
      </label>
      <input
        type="text"
        value={keyValue}
        onChange={(e) => setKey(e.target.value)}
        className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500"
        placeholder="Enter a key (e.g., 3 for traditional Caesar)"
      />
    </div>
  );
};

export default KeyInput;
