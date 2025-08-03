import { Check } from "lucide-react";

function SuccessLog() {
  return (
    <div className="bg-green-50 dark:bg-gray-800 border border-green-200 dark:border-green-700 rounded-lg p-6 text-center">
      <div className="flex justify-center mb-4">
        <div className="bg-green-100 dark:bg-green-900 p-3 rounded-full">
          <Check className="text-green-600 dark:text-green-400" size={28} />
        </div>
      </div>
      <h3 className="text-xl font-medium text-green-800 dark:text-green-300 mb-2">
        Message Sent Successfully!
      </h3>
      <p className="text-green-600 dark:text-green-400">
        Thank you for reaching out. I'll get back to you as soon as possible.
      </p>
    </div>
  );
}

export default SuccessLog;
