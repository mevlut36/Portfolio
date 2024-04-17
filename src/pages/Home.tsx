import {
  BoltIcon,
  PencilIcon,
  DocumentMagnifyingGlassIcon,
} from "@heroicons/react/20/solid";

import { Parallax } from "react-parallax";
import { projectsData } from "./Projets";
import { Link } from "react-router-dom";
import backgroundSVG from "../assets/background.svg";

export default function Home() {
  return (
    <main
      className="flex-grow grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8 bg-no-repeat bg-cover"
      style={{
        backgroundImage: `url(${backgroundSVG})`,
        backgroundPosition: "top",
        backgroundSize: "revert",
      }}
    >
      <div className="text-center fade-in">
        <p className="text-base font-semibold text-gray-100">
          Bienvenue sur mon portfolio
        </p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-100 sm:text-5xl">
          Mevlut TUNCA
        </h1>
        <p className="mt-6 text-base leading-7 text-gray-200 sm:text-2xl">
          Etudiant en deuxième année de BTS SIO : SISR
        </p>
        <p className="mt-3 text-base leading-7 text-gray-200 sm:text-2xl">
          Mon expérience, mes compétences.
        </p>
      </div>
      <div className="mt-10">
        <h1 className="text-3xl font-bold tracking-tight text-gray-700 sm:text-4xl mb-2 fade-in">
          Mes projets récents
        </h1>
        <div className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 fade-in">
          {projectsData.slice(-3).map((project) => (
            <div
              key={project.id}
              className="flex flex-col h-full max-w-7xl mx-auto py-24 sm:px-6 sm:py-8 lg:px-8"
            >
              <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0 flex-grow">
                <div className="flex flex-col justify-between flex-grow mx-auto max-w-md text-center lg:mx-0 lg:py-32 lg:text-left">
                  <h2 className="text-3xl font-bold tracking-tight text-white sm:text-2xl transition duration-300 ease-in-out transform group-hover:translate-y-[-10px]">
                    {project.title}
                  </h2>
                  <div className="mt-4 text-xm leading-8 text-gray-300">
                    {project.summary}
                  </div>
                  <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                    <Link
                      to={`/mes-projets/${project.id}`}
                      className="text-sm font-semibold leading-6 text-white"
                    >
                      Voir plus <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </div>
                <div className="relative mt-16 h-80 lg:mt-24 group">
                  <img
                    className="absolute left-0 top-0 w-full max-w-none rounded-md bg-white/5 ring-1 ring-white/10 md:w-[45rem] transition duration-300 ease-in-out transform group-hover:translate-x-[-10%]"
                    src={project.image}
                    alt="App screenshot"
                    width={1824}
                    height={1080}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0 fade-in">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <svg
            className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                width={200}
                height={200}
                x="50%"
                y={-1}
                patternUnits="userSpaceOnUse"
              >
                <path d="M100 200V.5M.5 .5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
              <path
                d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect
              width="100%"
              height="100%"
              strokeWidth={0}
              fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
            />
          </svg>
        </div>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="lg:max-w-lg">
                <p className="text-base font-semibold leading-7 text-indigo-600">
                  Profil
                </p>
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Qui suis-je ?
                </h1>
                <p className="mt-6 text-xl leading-8 text-gray-700">
                  Je m’appelle Mevlut TUNCA, je suis âgé de 21 ans. Je suis
                  actuellement étudiant au lycée Blaise Pascal à Chateauroux, en
                  deuxième année de BTS SIO spécialité SISR (Services
                  Informatiques aux Organisations spécialité en Solutions
                  d'Infrastructure, Systèmes et Réseaux).
                </p>
              </div>
            </div>
          </div>
          <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
            <Parallax
              bgImage="Network.gif"
              strength={200}
              className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            >
              <div style={{ height: "500px" }}></div>
            </Parallax>
          </div>
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                <p>
                  Depuis mon enfance, j'ai toujours été attiré par
                  l'informatique. Intuitivement, je savais déja ce que je
                  voulais faire, en commençant par un BAC STI2D Option SIN puis
                  mes deux années d'études en BTS Services Informatiques aux
                  Organisations spécialité en Solutions d'Infrastructure,
                  Systèmes et Réseaux.
                </p>
                <p>
                  Le monde de l'informatique étant vaste, je ne sais pas encore
                  précisément ce que je souhaite faire plus tard entre le
                  pentesting, l'administration réseau ou la programmation.
                </p>
                <ul role="list" className="mt-8 space-y-8 text-gray-600">
                  <p className="mt-6 text-xl leading-2 text-gray-800">
                    Mes qualités
                  </p>
                  <li className="flex gap-x-3">
                    <DocumentMagnifyingGlassIcon
                      className="mt-1 h-5 w-5 flex-none text-indigo-600 icon-hover"
                      aria-hidden="true"
                    />
                    <span>
                      <strong className="font-semibold text-gray-900">
                        Autonome
                      </strong>
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <BoltIcon
                      className="mt-1 h-5 w-5 flex-none text-indigo-600 icon-hover"
                      aria-hidden="true"
                    />
                    <span>
                      <strong className="font-semibold text-gray-900">
                        Détérminé
                      </strong>
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <PencilIcon
                      className="mt-1 h-5 w-5 flex-none text-indigo-600 icon-hover"
                      aria-hidden="true"
                    />
                    <span>
                      <strong className="font-semibold text-gray-900">
                        Soif d'apprendre
                      </strong>
                    </span>
                  </li>
                </ul>
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
