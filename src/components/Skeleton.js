export function ExerciseSkeleton() {
  return (
    <div className="animate-pulse rounded-xl bg-gray-300 dark:bg-gray-700 h-64">
      <div className="h-full flex items-end p-6">
        <div className="w-full">
          <div className="h-6 bg-gray-400 dark:bg-gray-600 rounded w-3/4 mb-2"></div>
          <div className="h-4 bg-gray-400 dark:bg-gray-600 rounded w-1/2"></div>
        </div>
      </div>
    </div>
  );
}