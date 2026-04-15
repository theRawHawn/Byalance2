import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 text-center">
      <h1 className="text-7xl font-bold text-primary-600 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Page Not Found</h2>
      <p className="text-gray-600 mb-8 max-w-md">
        The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s get you back on track.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Button asChild className="bg-primary-600 hover:bg-primary-700" size="lg">
          <Link href="/">Go to Homepage</Link>
        </Button>
        <Button asChild variant="outline" size="lg">
          <Link href="/services">Browse Services</Link>
        </Button>
      </div>
    </div>
  );
}
