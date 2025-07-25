import { GitHub, Linkedin, Mail } from 'react-feather';

export function Contact() {
  return (
    <section id="contato" className="py-20 text-center">
      <h2 className="text-4xl font-bold text-center mb-4">Vamos Conversar</h2>
      <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
        Estou sempre aberto a novas oportunidades e colaborações. Sinta-se à vontade para entrar em contato.
      </p>
      <div className="flex justify-center space-x-6">
        <a href="#" className="text-white hover:text-purple-custom transition duration-300">
        <GitHub className="w-8 h-8" />
        </a>
        <a href="#" className="text-white hover:text-purple-custom transition duration-300"><Linkedin className="w-8 h-8" /></a>
        <a href="mailto:seuemail@example.com" className="text-white hover:text-purple-custom transition duration-300"><Mail className="w-8 h-8" /></a>
      </div>
    </section>
  );
}