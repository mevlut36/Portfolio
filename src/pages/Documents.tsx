export default function Documents() {
  const pdfUrl = "Tableau de synthèse - Epreuve E4.pdf";

  return (
    <main className="flex-grow min-h-screen flex flex-col items-center justify-center bg-white px-4 py-24 sm:px-6 lg:px-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl text-indigo-600">
          Mes documents
        </h1>
        <p className="mt-4 text-base text-gray-600">Epreuve E4</p>
      </div>
      <div className="flex-grow w-full flex justify-center">
        <div className="w-full max-w-4xl h-[75vh] md:h-[85vh] lg:h-[90vh] bg-white shadow-xl overflow-hidden">
          <iframe
            className="w-full h-full"
            src={pdfUrl}
            title="Tableau de synthèse - Epreuve E4"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </main>
  );
}
