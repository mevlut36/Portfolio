import "./App.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import Projets from "./pages/Projets";
import Experience from "./pages/Experience";
import Competences from "./pages/Competences";
import BTSSIO from "./pages/BTSSIO";
import Documents from "./pages/Documents";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import Veille from "./pages/Veille";
import E5 from "./pages/E5";

function App() {
  return (
    <>
      <Router>
        <div className="flex flex-col min-h-screen">
          <div className="isolate">
            <div
              className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
              aria-hidden="true"
              style={{
                pointerEvents: "none",
              }}
            >
              <div
                className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                  pointerEvents: "none",
                }}
              ></div>
            </div>
          </div>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mes-projets/:projectId" element={<Projets />} />
            <Route path="/mes-projets" element={<Projets />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/competences" element={<Competences />} />
            <Route path="/bts-sio" element={<BTSSIO />} />
            <Route path="/documents" element={<Documents />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route
              path="/terms-and-conditions"
              element={<TermsAndConditions />}
            />
            <Route path="/veille" element={<Veille />} />
            <Route path="/e5" element={<E5 />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
