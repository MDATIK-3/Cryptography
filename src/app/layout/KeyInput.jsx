const KeyInput = ({ keyValue, label, setKey }) => {
  return (
    <div>
      <label className="block text-sm font-medium mb-1">
        {label}
      </label>
      <input
        type="text"
        value={keyValue}
        onChange={(e) => setKey(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded"
        placeholder="Enter a key (e.g., 3 for traditional Caesar)"
      />
    </div>
  );
};

export default KeyInput;
