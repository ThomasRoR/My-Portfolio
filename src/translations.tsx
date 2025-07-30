type HeaderContent = {
    name: string;
    nav: string[];
  };
  
  type HeroContent = {
    greeting: string;
    name: string;
    title: string;
    button: string;
  };
  
  type AboutContent = {
    title: string;
    bio: string;
  };
  
  type Tool = {
    name: string;
    icon: string;
    color: string;
  };
  
  type ToolsContent = {
    title: string;
    toolList: Tool[];
  };
  
  type Job = {
    title: string;
    company: string;
    dateRange: string;
    responsibilities: string[];
  };
  
  type ExperienceContent = {
    title: string;
    jobs: Job[];
  };
  
  type Project = {
    imageSrc: string;
    title: string;
    description: string;
    link: {
      href: string;
      text: string;
    };
  };
  
  type ProjectsContent = {
    title: string;
    projects: Project[];
  };
  
  type ContactContent = {
    title: string;
    subtitle: string;
    links: {
      github: string;
      linkedin: string;
      email: string;
    };
  };
  
  type FooterContent = {
    copyright: string;
  };
  
  type TranslationContent = {
    header: HeaderContent;
    hero: HeroContent;
    about: AboutContent;
    tools: ToolsContent;
    experience: ExperienceContent;
    projects: ProjectsContent;
    contact: ContactContent;
    footer: FooterContent;
  };
  
  export const translations: { pt: TranslationContent; en: TranslationContent } = {
    pt: {
      header: {
        name: "Thomas Oliveira", //
        nav: ["Sobre", "Ferramentas", "Experiência", "Projetos", "Contato"],
      },
      hero: {
        greeting: "Olá, eu sou",
        name: "Thomas Oliveira",
        title: "Desenvolvedor | Entusiasta de Tecnologia",
        button: "Veja meus projetos",
      },
      about: {
        title: "Sobre Mim",
        bio: "TESTE testeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
      },
      tools: {
        title: "Ferramentas & Tecnologias",
        toolList: [
          { name: 'JavaScript', icon: 'faJsSquare', color: 'text-yellow-400' },
          { name: 'HTML', icon: 'faHtml5', color: 'text-orange-500' },
          { name: 'CSS', icon: 'faCss3Alt', color: 'text-blue-500' },
          { name: 'TypeScript', icon: 'faJsSquare', color: 'text-blue-600' },
          { name: 'React', icon: 'faReact', color: 'text-cyan-400' },
          { name: 'Three.js', icon: 'faCube', color: 'text-purple-custom' },
          { name: 'Python', icon: 'faPython', color: 'text-green-500' },
          { name: 'Flask', icon: 'faPython', color: 'text-red-500' },
          { name: 'Django', icon: 'faPython', color: 'text-green-600' },
          { name: 'Web3', icon: 'faLink', color: 'text-orange-400' },
          { name: 'Figma', icon: 'faFigma', color: 'text-purple-500' },
          { name: 'Framer', icon: 'faMagic', color: 'text-purple-custom' },
        ]
      },
      experience: {
        title: "Experiência Profissional",
        jobs: [
          { title: "Cargo Ocupado", company: "Nome da Empresa", dateRange: "Jan 2022 - Presente", responsibilities: ["Responsabilidade 1: Descreva o que você fazia.", "Responsabilidade 2: Destaque suas conquistas.", "Responsabilidade 3: Use verbos de ação fortes."]},
          { title: "Outro Cargo", company: "Outra Empresa", dateRange: "Fev 2020 - Dez 2021", responsibilities: ["Exemplo de tarefa ou projeto significativo.", "Outra descrição de atividade."]}
        ]
      },
      projects: {
        title: "Projetos",
        projects: [
          { imageSrc: "https://placehold.co/600x400/8A2BE2/FFFFFF?text=Projeto+1", title: "Nome do Projeto 1", description: "Breve descrição do projeto e as tecnologias utilizadas (ex: React, Node.js, Tailwind CSS).", link: { href: "#", text: "Ver Demo →" }},
          { imageSrc: "https://placehold.co/600x400/8A2BE2/FFFFFF?text=Projeto+2", title: "Nome do Projeto 2", description: "Breve descrição do projeto e as tecnologias utilizadas.", link: { href: "#", text: "Ver no GitHub →" }},
          { imageSrc: "https://placehold.co/600x400/8A2BE2/FFFFFF?text=Projeto+3", title: "Nome do Projeto 3", description: "Breve descrição do projeto e as tecnologias utilizadas.", link: { href: "#", text: "Ler Case Study →" }}
        ]
      },
      contact: {
        title: "Vamos Conversar",
        subtitle: "Estou sempre aberto a novas oportunidades e colaborações. Sinta-se à vontade para entrar em contato.",
        links: { github: "#", linkedin: "#", email: "seuemail@example.com" }
      },
      footer: {
        copyright: `© ${new Date().getFullYear()} Thomas Oliveira. Todos os direitos reservados.`
      }
    },
    en: {
      header: {
        name: "Thomas Oliveira",
        nav: ["About", "Tools", "Experience", "Projects", "Contact"],
      },
      hero: {
        greeting: "Hello, I am",
        name: "Thomas Oliveira",
        title: "Developer | Technology Enthusiast",
        button: "See my projects",
      },
      about: {
        title: "About Me",
        bio: "TEST textttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttt",
      },
      tools: {
        title: "Tools & Technologies",
        toolList: [
          { name: 'JavaScript', icon: 'faJsSquare', color: 'text-yellow-400' },
          { name: 'HTML', icon: 'faHtml5', color: 'text-orange-500' },
          { name: 'CSS', icon: 'faCss3Alt', color: 'text-blue-500' },
          { name: 'TypeScript', icon: 'faJsSquare', color: 'text-blue-600' },
          { name: 'React', icon: 'faReact', color: 'text-cyan-400' },
          { name: 'Three.js', icon: 'faCube', color: 'text-purple-custom' },
          { name: 'Python', icon: 'faPython', color: 'text-green-500' },
          { name: 'Flask', icon: 'faPython', color: 'text-red-500' },
          { name: 'Django', icon: 'faPython', color: 'text-green-600' },
          { name: 'Web3', icon: 'faLink', color: 'text-orange-400' },
          { name: 'Figma', icon: 'faFigma', color: 'text-purple-500' },
          { name: 'Framer', icon: 'faMagic', color: 'text-purple-custom' },
        ]
      },
      experience: {
        title: "Professional Experience",
        jobs: [
          { title: "Position Held", company: "Company Name", dateRange: "Jan 2022 - Present", responsibilities: ["Responsibility 1: Describe what you did.", "Responsibility 2: Highlight your achievements.", "Responsibility 3: Use strong action verbs."]},
          { title: "Another Position", company: "Another Company", dateRange: "Feb 2020 - Dec 2021", responsibilities: ["Example of a significant task or project.", "Another activity description."]}
        ]
      },
      projects: {
        title: "Projects",
        projects: [
          { imageSrc: "https://placehold.co/600x400/8A2BE2/FFFFFF?text=Project+1", title: "Project Name 1", description: "Brief description of the project and the technologies used (e.g., React, Node.js, Tailwind CSS).", link: { href: "#", text: "View Demo →" }},
          { imageSrc: "https://placehold.co/600x400/8A2BE2/FFFFFF?text=Project+2", title: "Project Name 2", description: "Brief description of the project and the technologies used.", link: { href: "#", text: "View on GitHub →" }},
          { imageSrc: "https://placehold.co/600x400/8A2BE2/FFFFFF?text=Project+3", title: "Project Name 3", description: "Brief description of the project and the technologies used.", link: { href: "#", text: "Read Case Study →" }}
        ]
      },
      contact: {
        title: "Let's Talk",
        subtitle: "I'm always open to new opportunities and collaborations. Feel free to get in touch.",
        links: { github: "#", linkedin: "#", email: "youremail@example.com" }
      },
      footer: {
        copyright: `© ${new Date().getFullYear()} Thomas Oliveira. All rights reserved.`
      }
    }
  };