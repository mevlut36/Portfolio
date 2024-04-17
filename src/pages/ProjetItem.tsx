import { FC, useState, Fragment, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Project } from "../types";
import { Dialog, Transition } from "@headlessui/react";
import { ArrowDownTrayIcon, XMarkIcon } from "@heroicons/react/24/outline";
import ReactMarkdown from "react-markdown";

type ProjectItemProps = {
  project: Project;
};

const ProjectItem: FC<ProjectItemProps> = ({ project }) => {
  const navigate = useNavigate();
  const { projectId } = useParams<{ projectId: string }>();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const toggleDialog = (open: boolean) => {
    setIsOpen(open);
    setSelectedProject(project);
    navigate(open ? `/mes-projets/${project.id}` : '/mes-projets');
  };

  useEffect(() => {
    if (projectId === project.id.toString()) {
      toggleDialog(true);
    }
  }, [projectId, project.id]);

  const MarkdownContent: FC<{ path: string }> = ({ path }) => {
    const [content, setContent] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    
    useEffect(() => {
      setLoading(true);
      fetch(path)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response not OK " + response.statusText);
          }
          return response.text();
        })
        .then((content) => {
          setContent(content);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error:", error);
          setLoading(false);
        });
    }, [path]);
  
    return (
      <>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <ReactMarkdown
            components={{
              h1: ({ node, ...props }) => (
                <h1
                  className="font-roboto text-4xl font-bold my-4 text-indigo-600"
                  {...props}
                />
              ),
              h2: ({ node, ...props }) => (
                <h2
                  className="font-roboto text-3xl font-bold my-4 text-indigo-600"
                  {...props}
                />
              ),
              h3: ({ node, ...props }) => (
                <h3
                  className="text-2xl font-semibold my-3 text-indigo-800"
                  {...props}
                />
              ),
              p: ({ node, ...props }) => (
                <p className="text-base my-2 font-medium" {...props} />
              ),
              a: ({ node, ...props }) => (
                <a className="text-indigo-500 hover:underline" target="_blank" {...props} />
              ),
              ul: ({ node, ...props }) => (
                <ul className="list-disc pl-5" {...props} />
              ),
              ol: ({ node, ...props }) => (
                <ol className="list-decimal pl-5" {...props} />
              ),
              li: ({ node, ...props }) => (
                <li className="my-1 font-medium" {...props} />
              ),
              blockquote: ({ node, ...props }) => (
                <blockquote
                  className="border-l-4 pl-4 italic text-gray-600"
                  {...props}
                />
              ),
              pre: ({ node, ...props }) => (
                <pre
                  className="p-3 bg-gray-900 text-white rounded-md overflow-x-auto"
                  {...props}
                />
              ),
            }}
          >
            {content}
          </ReactMarkdown>
        )}
      </>
    );
  };

  return (
    <>
        <div className="w-full md:w-1/2 p-4">
              <div className="max-w-7xl mx-auto py-24 sm:px-6 sm:py-32 lg:px-8">
                <div className="group relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
                  <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl transition duration-300 ease-in-out group-hover:translate-y-[-100px]">
                      {project.title}
                    </h2>
                    <div className="mt-6 text-lg leading-8 text-gray-300">
                      <ReactMarkdown>{project.summary}</ReactMarkdown>
                    </div>
                    <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                      <button
                        onClick={() => toggleDialog(true)}
                        className="text-sm font-semibold leading-6 text-white"
                      >
                        En apprendre plus <span aria-hidden="true">→</span>
                      </button>
                    </div>
                  </div>
                  <div className="relative mt-16 h-80 lg:mt-24">
                    <img
                      className="absolute left-0 top-0 w-full max-w-none rounded-md bg-white/5 ring-1 ring-white/10 md:w-[45rem] transition duration-300 ease-in-out group-hover:translate-x-[-250px]"
                      src={project.image}
                      alt="App screenshot"
                      width={1824}
                      height={1080}
                    />
                  </div>
                </div>
              </div>
            </div>

            <Fragment key={project.id}>
              <Transition.Root show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={() => toggleDialog(false)}>
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                  </Transition.Child>

                  <div className="fixed inset-0 overflow-hidden">
                    <div className="absolute inset-0 overflow-hidden">
                      <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                        <Transition.Child
                          as={Fragment}
                          enter="transform transition ease-in-out duration-500 sm:duration-700"
                          enterFrom="translate-x-full"
                          enterTo="translate-x-0"
                          leave="transform transition ease-in-out duration-500 sm:duration-700"
                          leaveFrom="translate-x-0"
                          leaveTo="translate-x-full"
                        >
                          <Dialog.Panel className="pointer-events-auto relative w-screen max-w-7xl">
                            <Transition.Child
                              as={Fragment}
                              enter="ease-in-out duration-500"
                              enterFrom="opacity-0"
                              enterTo="opacity-100"
                              leave="ease-in-out duration-500"
                              leaveFrom="opacity-100"
                              leaveTo="opacity-0"
                            >
                              <div className="absolute left-0 top-0 -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4">
                                <button
                                  type="button"
                                  className="relative rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                                  onClick={() => toggleDialog(false)}
                                >
                                  <span className="absolute -inset-2.5" />
                                  <span className="sr-only">Close panel</span>
                                  <XMarkIcon
                                    className="h-6 w-6"
                                    aria-hidden="true"
                                  />
                                </button>
                              </div>
                            </Transition.Child>
                            <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                              <div className="px-4 sm:px-6 flex justify-between items-center">
                                <Dialog.Title className="text-base font-semibold leading-6 text-gray-900">
                                  {selectedProject?.title}
                                </Dialog.Title>
                                <a
                                  href={selectedProject?.mdPath}
                                  download
                                  className="bubbleWrapper inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-indigo-600 rounded shadow ripple hover:shadow-lg hover:bg-indigo-800 focus:outline-none relative"
                                >
                                  {[...Array(5)].map((_, idx) => (
                                    <div
                                      key={idx}
                                      className="bubble absolute bg-white rounded-full"
                                      style={{
                                        width: Math.random() * 10 + 5 + "px",
                                        height: Math.random() * 10 + 5 + "px",
                                        bottom: "0",
                                        left: Math.random() * 100 + "%",
                                        animationDelay:
                                          "-" + Math.random() + "s",
                                        animationDuration:
                                          Math.random() * (1.5 - 1) + 1 + "s",
                                      }}
                                    ></div>
                                  ))}
                                  <ArrowDownTrayIcon
                                    className="h-6 w-6"
                                    aria-hidden="true"
                                  />
                                </a>
                              </div>

                              <div className="relative mt-6 flex-1 px-4 sm:px-6">
                                {selectedProject && (
                                  <MarkdownContent
                                    path={selectedProject.mdPath}
                                  />
                                )}
                              </div>
                            </div>
                          </Dialog.Panel>
                        </Transition.Child>
                      </div>
                    </div>
                  </div>
                </Dialog>
              </Transition.Root>
            </Fragment>
    </>
  );
};

export default ProjectItem;
