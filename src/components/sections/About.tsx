interface AboutProps {
  content: {
    title: string;
    bio: string;
  };
}

export function About({ content }: AboutProps) {
  return (
    <section id="sobre" className="py-20">
      <h2 className="text-4xl font-bold text-center mb-12 text-purple-custom">{content.title}</h2> {/* */}
      <div className="max-w-4xl mx-auto text-center text-gray-300 text-lg leading-relaxed">
        <p>{content.bio}</p> {/* */}
      </div>
    </section>
  );
}