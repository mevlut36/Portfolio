import React, { useState } from "react";

type TabMap = {
  [key: string]: string[];
};

type PdfTitles = {
  [key: string]: string;
};

const E5: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("tab1");
  const [activeSubTab, setActiveSubTab] = useState<string>("subtab1-1");

  const tabs: TabMap = {
    tab1: ["subtab1-1", "subtab1-2", "subtab1-3", "subtab1-4", "subtab1-5"],
    tab2: ["subtab2-1", "subtab2-2", "subtab2-3", "subtab2-4", "subtab2-5"],
  };

  const pdfUrls: { [key: string]: string } = {
    "subtab1-1": "/projets/E5/Projet-6/Borne Wifi-KAPALA_TUNCA.pdf",
    "subtab1-2": "/projets/E5/Projet-6/PFSENSE-KAPALA_TUNCA.pdf",
    "subtab1-3": "/projets/E5/Projet-6/Serveur Windows.pdf",
    "subtab1-4": "/projets/E5/Projet-6/TOIP_TUNCA_KAPALA.pdf",
    "subtab1-5": "/projets/E5/Projet-6/TUNCA_Projet_6_2024.pdf",

    "subtab2-1": "/projets/E5/Projet-8/PFSENSE-DIALLO_TUNCA.pdf",
    "subtab2-2": "/projets/E5/Projet-8/Serveur Windows.pdf",
    "subtab2-3": "/projets/E5/Projet-8/Switch-TUNCA_DIALLO.pdf",
    "subtab2-4": "/projets/E5/Projet-8/TUNCA_Projet_8_2024.pdf",
    "subtab2-5": "/projets/E5/Projet-8/UBUNTU-DIALLO_TUNCA.pdf",
  };

  const pdfTitles: PdfTitles = {
    "subtab1-1": "Borne Wifi",
    "subtab1-2": "PFSENSE",
    "subtab1-3": "Serveur Windows",
    "subtab1-4": "TOIP",
    "subtab1-5": "Projet Synthèse 2024",

    "subtab2-1": "PFSENSE",
    "subtab2-2": "Serveur Windows",
    "subtab2-3": "Switch Config",
    "subtab2-4": "Projet Synthèse 2024",
    "subtab2-5": "UBUNTU",
  };

  const renderIframe = (subtab: string): JSX.Element => {
    return (
      <iframe
        className="w-full h-full"
        src={pdfUrls[subtab]}
        title={`PDF Viewer ${subtab}`}
        frameBorder="0"
        allowFullScreen
      ></iframe>
    );
  };

  return (
    <main className="flex-grow min-h-screen flex flex-col items-center justify-center bg-white px-4 py-24 sm:px-6 lg:px-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl text-indigo-600">
          Epreuve E5
        </h1>
        <p className="mt-4 text-base text-gray-600">
          Vous retrouverez ci-dessous mes documentations pour le projet E5.
        </p>
      </div>

      <div className="w-full max-w-4xl">
        <div className="flex border-b border-gray-300">
          {Object.keys(tabs).map((tab) => (
            <button
              key={tab}
              className={`py-4 px-6 block hover:text-indigo-500 focus:outline-none ${activeTab === tab ? "text-indigo-500 border-b-2 font-medium border-indigo-500" : "text-gray-500"}`}
              onClick={() => {
                setActiveTab(tab);
                setActiveSubTab(tabs[tab][0]);
              }}
            >
              {`Projet ${tab.slice(-1)}`}
            </button>
          ))}
        </div>
        <div className="flex border-b border-gray-300 mt-4">
          {tabs[activeTab].map((subtab) => (
            <button
              key={subtab}
              className={`py-2 px-4 block hover:text-indigo-500 focus:outline-none ${activeSubTab === subtab ? "text-indigo-500 border-b-2 font-medium border-indigo-500" : "text-gray-500"}`}
              onClick={() => setActiveSubTab(subtab)}
            >
              {pdfTitles[subtab]}
            </button>
          ))}
        </div>

        <div className="w-full h-[65vh] md:h-[75vh] lg:h-[85vh] bg-white shadow-xl overflow-hidden mt-4">
          {renderIframe(activeSubTab)}
        </div>
      </div>
    </main>
  );
};

export default E5;
