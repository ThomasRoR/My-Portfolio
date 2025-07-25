import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJsSquare, faHtml5, faCss3Alt, faReact, faPython, faFigma } from '@fortawesome/free-brands-svg-icons';
import { faCube, faLink, faMagic } from '@fortawesome/free-solid-svg-icons';

const tools = [
  { name: 'JavaScript', icon: faJsSquare, color: 'text-yellow-400' },
  { name: 'HTML', icon: faHtml5, color: 'text-orange-500' },
  { name: 'CSS', icon: faCss3Alt, color: 'text-blue-500' },
  { name: 'TypeScript', icon: faJsSquare, color: 'text-blue-600' },
  { name: 'React', icon: faReact, color: 'text-cyan-400' },
  { name: 'Three.js', icon: faCube, color: 'text-purple-custom' },
  { name: 'Python', icon: faPython, color: 'text-green-500' },
  { name: 'Flask', icon: faPython, color: 'text-red-500' },
  { name: 'Django', icon: faPython, color: 'text-green-600' },
  { name: 'Web3', icon: faLink, color: 'text-orange-400' },
  { name: 'Figma', icon: faFigma, color: 'text-purple-500' },
  { name: 'Framer', icon: faMagic, color: 'text-purple-custom' },
];

export function Tools() {
  return (
    <section id="ferramentas" className="py-20">
      <h2 className="text-4xl font-bold text-center mb-12">Ferramentas & Tecnologias</h2>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {tools.map(tool => (
            <div key={tool.name} className="bg-gray-900/90 p-6 rounded-lg border border-gray-800 backdrop-blur-sm text-center transform hover:-translate-y-2 transition-transform duration-300 hover:border-purple-custom">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <FontAwesomeIcon icon={tool.icon} className={`text-4xl ${tool.color}`} />
              </div>
              <h3 className="text-lg font-semibold text-white">{tool.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}