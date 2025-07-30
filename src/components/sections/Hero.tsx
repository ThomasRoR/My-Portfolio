interface HeroProps {
  content: {
    greeting: string;
    name: string;
    title: string;
    button: string;
  };
}

export function Hero({ content }: HeroProps) {
  return (
    <section id="hero" className="text-center py-20">
      <h1 className="text-5xl md:text-7xl font-bold mb-4">
        {content.greeting} <span className="text-purple-custom">{content.name}</span>
      </h1>
      <p className="text-xl md:text-2xl text-gray-300">{content.title}</p>
      <a href="#projetos" className="mt-8 inline-block bg-purple-custom text-white font-bold py-3 px-8 rounded-lg hover:bg-opacity-80 transition duration-300">
        {content.button}
      </a>
    </section>
  );
}