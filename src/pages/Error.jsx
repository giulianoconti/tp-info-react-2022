export const Error = ({ message }) => {
  return (
    <div className="h-screen bg-white dark:bg-gray-800">
      <div className="pt-12">
        <div className="container max-w-2xl mx-auto bg-gray-200 p-6 rounded-lg text-red-600 border border-red-600 dark:bg-gray-900">
          <svg
            className="fill-red-600 mx-auto mb-6"
            width="48"
            height="48"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
          </svg>
          <h2 className="text-center text-2xl">{message}</h2>
        </div>
      </div>
    </div>
  );
};
