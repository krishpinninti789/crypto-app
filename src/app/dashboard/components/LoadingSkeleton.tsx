export function LoadingSkeleton() {
  return (
    <div className="space-y-6">
      {/* Header skeleton */}
      <div className="space-y-2">
        <div className="h-8 bg-gray-200 rounded-md w-96 animate-pulse"></div>
        <div className="h-4 bg-gray-200 rounded-md w-80 animate-pulse"></div>
      </div>

      {/* Filter tabs skeleton */}
      <div className="flex space-x-2">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="h-8 bg-gray-200 rounded-md w-24 animate-pulse"
          ></div>
        ))}
      </div>

      {/* Table skeleton */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="bg-gray-50 border-b border-gray-200 p-4">
          <div className="grid grid-cols-9 gap-4">
            {Array.from({ length: 9 }).map((_, i) => (
              <div
                key={i}
                className="h-4 bg-gray-200 rounded animate-pulse"
              ></div>
            ))}
          </div>
        </div>

        {/* Table rows skeleton */}
        {Array.from({ length: 10 }).map((_, i) => (
          <div key={i} className="border-b border-gray-200 p-4">
            <div className="grid grid-cols-9 gap-4 items-center">
              <div className="flex items-center space-x-2">
                <div className="h-4 w-4 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-4 w-6 bg-gray-200 rounded animate-pulse"></div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="h-6 w-6 bg-gray-200 rounded-full animate-pulse"></div>
                <div className="space-y-1">
                  <div className="h-4 w-16 bg-gray-200 rounded animate-pulse"></div>
                  <div className="h-3 w-8 bg-gray-200 rounded animate-pulse"></div>
                </div>
                <div className="h-6 w-12 bg-gray-200 rounded animate-pulse"></div>
              </div>
              <div className="h-4 w-16 bg-gray-200 rounded animate-pulse"></div>
              <div className="h-4 w-12 bg-gray-200 rounded animate-pulse"></div>
              <div className="h-4 w-12 bg-gray-200 rounded animate-pulse"></div>
              <div className="h-4 w-12 bg-gray-200 rounded animate-pulse"></div>
              <div className="h-4 w-20 bg-gray-200 rounded animate-pulse"></div>
              <div className="h-4 w-24 bg-gray-200 rounded animate-pulse"></div>
              <div className="h-8 w-16 bg-gray-200 rounded animate-pulse"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
