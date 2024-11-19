"use client";

import Link from "next/link";

export default function Error() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-gray-800">Something went wrong</h1>
      <p className="mt-4 text-xl text-gray-600">
        An unexpected error has occurred.
      </p>
      <Link href="/">
        <a className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Go Home
        </a>
      </Link>
    </div>
  );
}
