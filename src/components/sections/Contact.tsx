import { GitHub, Linkedin, Mail } from 'react-feather';

interface ContactProps {
  content: {
    title: string;
    subtitle: string;
    links: {
      github: string;
      linkedin: string;
      email: string;
    }
  };
}

export function Contact({ content }: ContactProps) {
  return (
    <section id="contato" className="py-20 text-center">
      <h2 className="text-4xl font-bold text-center mb-4">{content.title}</h2> {/* */}
      <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
        {content.subtitle} {/* */}
      </p>
      <div className="flex justify-center space-x-6">
        <a href={content.links.github} target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-custom transition duration-300"><GitHub className="w-8 h-8" /></a>
        <a href={content.links.linkedin} target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-custom transition duration-300"><Linkedin className="w-8 h-8" /></a>
        <a href={`mailto:${content.links.email}`} className="text-white hover:text-purple-custom transition duration-300"><Mail className="w-8 h-8" /></a>
      </div>
    </section>
  );
}