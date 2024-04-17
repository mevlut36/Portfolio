import { useState, useEffect } from "react";
import useTypewriter from "react-typewriter-hook";
import Particles from "react-particles";

export default function Competences() {
  const skills = [
    {
      name: "Root-me",
      mastery: 10,
      link: "https://www.root-me.org/Mevlut36",
      image: "https://www.root-me.org/IMG/logo/siteon0.svg?1637496509",
      text: "1000 Points sur root-me",
    },
    {
      name: "Gérer le patrimoine informatique",
      mastery: 100,
      image: "https://img.freepik.com/vecteurs-libre/architecte-ingenieur-travaillant-technologies-controles-pour-proteger-donnees-applications-cloud-computing-concept-securite-informations-cloud_335657-1839.jpg",
      text: "",
    },
    {
      name: "Répondre aux incidents et aux demandes d’assistance et d’évolution",
      mastery: 100,
      image: "https://img.freepik.com/vecteurs-libre/illustration-du-concept-depannage-informatique_114360-7616.jpg",
      text: "",
    },
    {
      name: "Développer la présence en ligne de l’organisation",
      mastery: 100,
      image: "https://img.freepik.com/vecteurs-libre/www-concept-illustration_114360-2143.jpg",
      text: "",
    },
    {
      name: "Travailler en mode projet",
      mastery: 100,
      image: "https://img.freepik.com/vecteurs-libre/former-illustration-du-concept-leadership-equipe_114360-10883.jpg",
      text: "",
    },
    {
      name: "Mettre à disposition des utilisateurs un service informatique",
      mastery: 100,
      image: "https://img.freepik.com/vecteurs-libre/illustration-du-concept-boucle-retroaction_114360-17629.jpg",
      text: "",
    },
    {
      name: "Organiser son développement professionnel",
      mastery: 100,
      image: "https://img.freepik.com/vecteurs-libre/coach-parlant-devant-public-mentor-presentant-graphiques-rapports-reunion-employes-lors-formation-commerciale-seminaire-conference-illustration-vectorielle-pour-presentation-conference-education_74855-8294.jpg",
      text: "",
    },
    {
      name: "Cisco Networking",
      mastery: 70,
      image: "cisco.jpg",
      text: "Bonne maîtrise des outils Cisco et de différentes technologies (Utilisation des routes, access-lists, IPSec, VLANs, redondances...)",
    },
    {
      name: "Linux Server Management",
      mastery: 80,
      image: "Linux-Logo.png",
      text: "Bonne maîtrise des commandes et la logique Linux",
    },
    {
      name: "React (NextJS / ViteJS)",
      mastery: 60,
      image: "reactjs.png",
      text: "Bonne maîtrise",
    },
    {
      name: ".NET (Windows Forms)",
      mastery: 60,
      image: "NET_Core.png",
      text: "Maîtrise partielle (Frameworks utilisés: Newtonsoft, EntityFramework, Linq)",
    },
    {
      name: "Python",
      mastery: 80,
      image: "Python-logo.png",
      text: "Bonne maîtrise",
    },
    {
      name: "PHP",
      mastery: 50,
      image: "php.png",
      text: "Bonne maîtrise",
    },
  ];

  const title = useTypewriter("Mes compétences");
  const [percentages, setPercentages] = useState(skills.map(() => 0));

  useEffect(() => {
    const intervals = skills.map((skill, index) => {
      return setInterval(() => {
        setPercentages((prevPercentages) => {
          const updated = [...prevPercentages];
          if (updated[index] < skill.mastery) {
            updated[index] += 1;
            return updated;
          }
          clearInterval(intervals[index]);
          return prevPercentages;
        });
      }, 30);
    });

    return () => {
      intervals.forEach((interval) => clearInterval(interval));
    };
  }, []);

  return (
    <main className="flex-grow min-h-full place-items-center bg-gradient-to-br from-gray-100 to-gray-300 px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl text-indigo-600">
          {title}
        </h1>
        <p className="mt-6 text-base leading-7 text-gray-800">
          Étudiant en deuxième année de BTS SIO : SISR
        </p>
      </div>
      <Particles
        className="w-full h-full"
        params={{
          particles: {
            number: {
              value: 50,
            },
            size: {
              value: 3,
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "repulse",
              },
            },
          },
        }}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {skills.map((skill, index) => (
          <div className="relative group bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 ease-in-out cursor-pointer">
            <img
              src={skill.image}
              alt={skill.name}
              className="w-20 h-20 object-cover mb-4 rounded-full shadow-lg mx-auto transition-transform duration-300 transform group-hover:scale-125"
            />
            <h3 className="text-xl font-semibold text-indigo-600 mb-4 hover:text-indigo-900 transition-colors duration-300">
              {skill.name}
            </h3>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-90 flex items-center justify-center flex-col p-6 transition-all duration-300">
              <p className="mb-4 text-gray-600">
                {percentages[index]}% de maîtrise
              </p>
              <p className="text-xs text-gray-800">{skill.text}</p>
              {skill.link && (
                <a
                  href={skill.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded-full text-xs"
                >
                  En savoir plus
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
