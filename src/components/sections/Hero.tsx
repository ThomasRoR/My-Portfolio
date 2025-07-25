export function Hero() {
  return (
    <section id="hero" className="text-center py-20">
      <h1 className="text-5xl md:text-7xl font-bold mb-4">
        Olá, eu sou <span className="text-purple-custom">Thomas Oliveira</span>
      </h1>
      <p className="text-xl md:text-2xl text-gray-300">Desenvolvedor | Entusiasta de Tecnologia</p>
      <a href="#projetos" className="mt-8 inline-block bg-purple-custom text-white font-bold py-3 px-8 rounded-lg hover:bg-opacity-80 transition duration-300">
        Veja meus projetos
      </a>
    </section>
  );
}