function DataPrivacy() {
  return (
    <div className="mt-6 bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 transition-colors duration-300">
      <p className="text-xs text-gray-600 dark:text-gray-300">
        By submitting this form, you agree to our{" "}
        <a href="#" className="text-cyan-600 dark:text-cyan-400 hover:underline font-medium">
          Privacy Policy
        </a>{" "}
        and consent to the processing of your personal data. Your information
        will never be shared with third parties.
      </p>
    </div>
  );
}

export default DataPrivacy;
