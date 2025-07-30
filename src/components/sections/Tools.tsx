import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJsSquare, faHtml5, faCss3Alt, faReact, faPython, faFigma } from '@fortawesome/free-brands-svg-icons';
import { faCube, faLink, faMagic } from '@fortawesome/free-solid-svg-icons';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface ToolsProps {
  content: {
    title: string;
    toolList: { name: string; icon: string; color: string; }[];
  };
}
const iconMap: { [key: string]: IconDefinition } = {
  faJsSquare, faHtml5, faCss3Alt, faReact, faPython, faFigma,
  faCube, faLink, faMagic
};

export function Tools({ content }: ToolsProps) {
  return (
    <section id="ferramentas" className="py-20">
      <h2 className="text-4xl font-bold text-center mb-12">{content.title}</h2> {/* */}
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {content.toolList.map(tool => (
            <div key={tool.name} className="bg-gray-900/90 p-6 rounded-lg border border-gray-800 backdrop-blur-sm text-center transform hover:-translate-y-2 transition-transform duration-300 hover:border-purple-custom">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <FontAwesomeIcon icon={iconMap[tool.icon]} className={`text-4xl ${tool.color}`} />
              </div>
              <h3 className="text-lg font-semibold text-white">{tool.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}