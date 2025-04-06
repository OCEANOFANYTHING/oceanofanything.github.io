import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-6 bg-white dark:bg-gray-900">
      <h1 className="text-7xl font-extrabold text-blue-600 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
        Page Not Found
      </h2>
      <p className="text-gray-600 dark:text-gray-400 max-w-md mb-6">
        The page you’re looking for doesn’t exist or has been moved. Let’s get you back on track.
      </p>
      <Button href="/" variant="primary">
        Go Back Home
      </Button>
    </div>
  );
}
