export default function NoPage() {
  return (
    <main className="flex-grow min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl text-indigo-600">
          Error 404
        </h1>
        <p className="mt-6 text-base leading-7 text-gray-600">
          Cette page n'existe pas
        </p>
      </div>
    </main>
  );
}
