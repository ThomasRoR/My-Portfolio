const projectsData = [
    {
      imageSrc: "https://placehold.co/600x400/8A2BE2/FFFFFF?text=Projeto+1", //
      title: "test", //
      description: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", //
      link: {
        href: "#",
        text: "Ver →", //
      },
    },
    {
      imageSrc: "https://placehold.co/600x400/8A2BE2/FFFFFF?text=Projeto+2", //
      title: "test", //
      description: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", //
      link: {
        href: "#",
        text: "Ver →", //
      },
    },
    {
      imageSrc: "https://placehold.co/600x400/8A2BE2/FFFFFF?text=Projeto+3", //
      title: "test", //
      description: "aaaaaaaaaaaaaaaaaaaaaaaa", //
      link: {
        href: "#",
        text: "Ver →", //
      },
    },
  ];
  
  export function Projects() {
    return (
      <section id="projetos" className="py-20">
        <h2 className="text-4xl font-bold text-center mb-12">Projetos</h2> {/* */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> {/* */}
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900/90 rounded-lg overflow-hidden border border-gray-800 transform hover:-translate-y-2 transition-transform duration-300 backdrop-blur-sm" //
            >
              <img
                src={project.imageSrc}
                alt="Imagem do Projeto" //
                className="w-full h-48 object-cover" //
              />
              <div className="p-6"> {/* */}
                <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3> {/* */}
                <p className="text-gray-400 mb-4">{project.description}</p> {/* */}
                <a
                  href={project.link.href}
                  className="text-purple-custom font-semibold hover:underline" //
                >
                  {project.link.text}
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }