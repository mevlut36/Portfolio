export default function Lycee() {
  return (
    <main className="flex-grow min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl text-indigo-600">
          Qu'est-ce que le BTS SIO ?
        </h1>
        <p className="mt-6 text-base leading-7 text-gray-600">
          Le Brevet de Technicien Supérieur aux Services Informatiques aux
          Organisations, s'adresse à ceux qui souhaitent se former en deux ans
          aux métiers d'administrateur réseau ou de développeur. Pour par la
          suite intégrer directement le marché du travail ou continuer des
          études, dans le domaine de l'informatique.
        </p>
        <section className="text-gray-600 body-font text-justify">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -mx-4 -mb-10 text-center">
              <div className="sm:w-1/2 mb-10 px-4">
                <div className="rounded-lg h-64 overflow-hidden">
                  <img
                    alt="content"
                    className="object-cover object-center h-full w-full"
                    src="./SISR.png"
                  />
                </div>
                <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
                  SISR
                </h2>
                <p className="leading-relaxed text-justify">
                  L'acronyme SISR signifie « Solutions d'infrastructure,
                  systèmes et réseaux ». Voici des précisions sur cette
                  formation et ses débouchés.
                  <br />
                  L'option SISR est destinée aux étudiants qui s'orientent vers
                  les métiers liés à la conception et la maintenance
                  d'infrastructures réseaux.
                  <br />
                  Assurer la sécurité, la maintenance et l'installation des
                  réseaux et des équipements informatiques font partie des
                  principales missions des futurs administrateurs, techniciens
                  ou pilotes d'exploitation.
                  <br />
                  Des cours plus généraux viendront compléter la formation et
                  apporter des compétences plus généralistes, permettant ainsi
                  aux diplômés d'être opérationnels dans n'importe quelle
                  entreprise.
                </p>
                <ul className="list-none text-center">
                  <p>Voici les débouchés avec un BTS SIO SISR:</p>
                  <li>Technicien de production</li>
                  <li>Technicien d'infrastructure</li>
                  <li>Technicien réseau et télécoms</li>
                  <li>Technicien systèmes et réseaux</li>
                  <li>Administrateur systèmes et réseaux</li>
                  <li>Support systèmes et réseaux</li>
                  <li>Pilote d'exploitation</li>
                  <li>Informaticien support et déploiement</li>
                </ul>
              </div>
              <div className="sm:w-1/2 mb-10 px-4">
                <div className="rounded-lg h-64 overflow-hidden">
                  <img
                    alt="content"
                    className="object-cover object-center h-full w-full"
                    src="./SLAM.png"
                  />
                </div>
                <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
                  SLAM
                </h2>
                <p className="leading-relaxed text-justify">
                  Le signe SLAM signifie « Solutions Logicielles et Applications
                  Métier ».Voici quelques indications sur cette seconde option
                  du BTS SIO, ainsi des précisions sur cette formation et ses
                  débouchés.
                  <br />
                  L'option SLAM est destinée aux étudiants qui s'orientent vers
                  les métiers liés à la conception et la maintenance de
                  programmes applicatifs. Grâce à des cours spécifiques, les
                  diplômés seron t capables de gérer un parc informatique ou
                  d'administrer un réseau au sein d'une entreprise.
                  <br />
                  Ils pourront également gérer l'intégration, la sécurisation et
                  la configuration des serveurs, mais aussi des postes clients
                  et des équipements d'interconnexion.
                </p>
                <ul className="list-none text-center">
                  <p>Voici les débouchés avec un BTS SIO SLAM:</p>
                  <li>Développeur d'applications informatiques</li>
                  <li>Développeur informatique</li>
                  <li>Analyste d'applications ou d'études</li>
                  <li>Analyste programmeur</li>
                  <li>Chargé d'études informatiques</li>
                  <li>Informaticien d'études</li>
                  <li>Programmeur analyste</li>
                  <li>Programmeur d'applications</li>
                  <li>Responsable des services applicatifs</li>
                  <li>Technicien d'études informatiques</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <span>
          Source: Synthèse de différents sites (onisep, letudiant,
          dimension-bts)
        </span>
      </div>
    </main>
  );
}
