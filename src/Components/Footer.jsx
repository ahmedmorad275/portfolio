export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white dark:border-slate-700 dark:bg-slate-900">
      <div className="container mx-auto px-4 py-8">
        <div className="item flex flex-col items-center justify-center space-y-4">
          <div className="cursor-default text-2xl font-bold text-gray-800 dark:text-white">
            <p>
              <span className="text-blue-600">{"<"}</span>AM
              <span className="text-blue-600">{"/>"}</span>
            </p>
          </div>
          <p className="text-gray-500 dark:text-gray-400">
            &copy; 2025 Ahmed Morad. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
