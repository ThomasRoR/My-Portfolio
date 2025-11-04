import { useRevealOnScroll } from '../../hooks/useRevealOnScroll';
interface ProjectsProps {
  content: {
    title: string;
    projects: {
      imageSrc: string;
      title: string;
      description: string;
      link: {
        href: string;
        text: string;
      };
    }[];
  };
}

export function Projects({ content }: ProjectsProps) {
  const { ref: sectionRef, hasRevealed } = useRevealOnScroll({ revealDelay: 180 });

  return (
    <section
      ref={sectionRef}
      id="projetos"
      className={`py-20 transform-gpu transition-all duration-700 ease-out ${
        hasRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <h2 className="text-4xl font-bold text-center mb-12 text-pink-custom">{content.title}</h2> {/* */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {content.projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-900/90 rounded-lg overflow-hidden border border-gray-800 transform hover:-translate-y-2 transition-transform duration-300 backdrop-blur-sm hover:border-pink-custom"
          >
            <img
              src={project.imageSrc}
              alt={`Imagem do ${project.title}`}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <a
                href={project.link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-custom font-semibold hover:underline"
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