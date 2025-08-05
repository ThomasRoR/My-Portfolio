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
          { title: "Desenvolvedor Full Stack", 
            company: "Puah Consultoria", 
            dateRange: "Dez 2023 - Mar 2025", 
            responsibilities: ["Desenvolvimento Full-Stack", "Design de Interfaces.", "Testes e Planejamento estratégico."]},
          { title: "Estágio UI/UX", 
            company: "Puah Consultoria", 
            dateRange: "Mai 2023 - Dez 2023", 
            responsibilities: ["Design de interface do usuário", "Experiência do usuário (UX)","Teste de usabilidade","Figma (Software)","Wireframes."]},
          { title: "Estágio", 
            company: "1 Delegacia de Polícia de Caraguatatuba", 
            dateRange: "Dez 2019 - Fev 2021", 
            responsibilities: ["Atendimento ao Cliente.", "Suporte Técnico.", "Servícos Administrativos."]},
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
        links: { github: "https://github.com/ThomasRoR", linkedin: "https://www.linkedin.com/in/thomasror/", email: "thomasraul06@gmail.com" }
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
          { title: "Full Stack Developer",
            company: "Puah Consultancy",
            dateRange: "Dec 2023 - Mar 2025",
            responsibilities: ["Full-Stack Development", "Interface Design.", "Testing and Strategic Planning."]},
          { title: "UI/UX Internship",
            company: "Puah Consultancy",
            dateRange: "May 2023 - Dec 2023",
            responsibilities: ["User interface design","User experience (UX)","Usability testing","Figma (Software)","Wireframes."]},
          { title: "Internship",
            company: "1st Police Station of Caraguatatuba",
            dateRange: "Dec 2019 - Feb 2021",
            responsibilities: ["Customer Service.","Technical Support.","Administrative Services."]}
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
        links: { github: "https://github.com/ThomasRoR", linkedin: "https://www.linkedin.com/in/thomasror/", email: "thomasraul06@gmail.com" }
      },
      footer: {
        copyright: `© ${new Date().getFullYear()} Thomas Oliveira. All rights reserved.`
      }
    }
  };