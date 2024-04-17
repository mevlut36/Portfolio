import { useEffect, useState } from "react";
import { Project } from "../types";
import { useParams } from "react-router-dom";
import ProjetItem from "./ProjetItem";

export const projectsData: Project[] = [
  {
    id: 1,
    title: "VPN Site à Site (IPSEC)",
    summary:
      "Dans ce projet nous allons voir comment mettre en place un VPN Site à Site entre deux routeurs Cisco.",
    mdPath: "/projets/IPSEC/IPSEC.md",
    image: "/projets/IPSEC/IPSEC-Illustration.png",
    pdf: "/",
  }
];



export default function Projets() {
  const { projectId } = useParams<{ projectId: string }>();
  const [open, setOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [, setMarkdownContent] = useState<string | null>(null);

  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    if (open && selectedProject) {
      fetch(selectedProject.mdPath)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response not OK " + response.statusText);
          }
          return response.text();
        })
        .then((content) => {
          setMarkdownContent(content);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  }, [open, selectedProject]);

  useEffect(() => {
    if (projectId) {
      const project = projectsData.find((p) => p.id.toString() === projectId);
      if (project) {
        setSelectedProject(project);
        setOpen(true);
      } else {
        setSelectedProject(null);
        setOpen(false);
      }
    } else {
      setSelectedProject(null);
      setOpen(false);
    }
  }, [projectId]);

  const filteredProjects = projectsData.filter((project) =>
    project.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <main className="flex-grow min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl text-indigo-600">
          Mes projets
        </h1>
        <p className="mt-12 text-base leading-7 text-gray-900">
          Bienvenue dans la section "Mes projets". Ici, je présente une
          collection de mes travaux. Parcourez cette section avec la barre de
          recherche. Si un projet retient votre attention ou si vous repérez une
          erreur, n'hésitez pas à me contacter.
        </p>

        <div className="mt-6 mb-10 relative">
          <input
            type="text"
            placeholder="Recherche..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className="p-2 w-full sm:w-2/3 lg:w-1/2 border rounded-md pl-10 focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-300 shadow-sm"
          />
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredProjects.map(project => <ProjetItem key={project.id} project={project} />)}
      </div>
    </main>
  );
}
