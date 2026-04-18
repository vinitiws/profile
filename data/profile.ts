export const personalInfo = {
  fullName: "Vinicius Nicacio do Nascimento",
  email: "viniciusnicacio80@gmail.com",
  github: "https://github.com/vinitiws",
  whatsapp: "+55 19 99959-8003",
  whatsappLink: "https://wa.me/5519999598003",
  linkedin: "https://linkedin.com/in/viniciusnicacio",
  location: "Brasil",
};

export const about = {
  degree: "Análise e Desenvolvimento de Sistemas",
  university: "Cruzeiro do Sul",
  startDate: "Janeiro de 2025",
  endDate: "Dezembro de 2026 (previsão)",
  goal: "Software Engineer",
  tagline: "Transformando café em código e ideias em realidade digital",
};

export const skills = [
  { name: "JavaScript/TypeScript", icon: "Code2" as const, level: 85, category: "Frontend" },
  { name: "React/Next.js", icon: "Terminal" as const, level: 80, category: "Frontend" },
  { name: "Java/Spring Boot", icon: "Code2" as const, level: 75, category: "Backend" },
  { name: "Python/Django", icon: "Code2" as const, level: 65, category: "Backend" },
  { name: "Node.js", icon: "Code2" as const, level: 70, category: "Backend" },
  { name: "MySQL", icon: "Database" as const, level: 70, category: "Database" },
  { name: "PostgreSQL", icon: "Database" as const, level: 65, category: "Database" },
  { name: "Git/GitHub", icon: "Code2" as const, level: 80, category: "Tools" },
  { name: "Docker", icon: "Package" as const, level: 60, category: "Tools" },
  { name: "Tailwind CSS", icon: "Palette" as const, level: 75, category: "Frontend" },
];

export const projects = [
  {
    title: "Prada Calcados",
    description: "E-commerce para loja de calçados com sistema de carrinho e checkout integrado com Stripe",
    tech: ["JavaScript", "React", "Stripe"],
    link: "https://github.com/sm-codebase/pradocalcados",
    category: "Fullstack",
    featured: true,
  },
  {
    title: "Next.js Studies",
    description: "Estudos avançados: roteamento, Server/Client Components, Actions, Metadata API",
    tech: ["Next.js", "TypeScript", "React"],
    link: "https://github.com/vinitiws/nextjs",
    category: "Frontend",
    featured: true,
  },
  {
    title: "Airbnb Replica",
    description: "Réplica do front-end do Airbnb com componentes reutilizáveis e responsividade",
    tech: ["JavaScript", "React", "CSS"],
    link: "https://github.com/vinitiws/airbnb-replica",
    category: "Frontend",
    featured: false,
  },
  {
    title: "Cadastro Usuário",
    description: "CRUD completo para cadastro de usuários com Java e JDBC",
    tech: ["Java", "MySQL", "JDBC"],
    link: "https://github.com/vinitiws/cadastro-usuario",
    category: "Backend",
    featured: false,
  },
  {
    title: "WebMakers",
    description: "Projeto institucional para agência digital com landing page moderna",
    tech: ["JavaScript", "HTML/CSS"],
    link: "https://github.com/wmsousa01/webmakers",
    category: "Frontend",
    featured: false,
  },
  {
    title: "Portfólio Pessoal",
    description: "Meu portfólio pessoal desenvolvido com Next.js 16 e Tailwind CSS",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    link: "https://github.com/vinitiws/portfolio",
    category: "Frontend",
    featured: true,
  },
];

export const socialLinks = [
  { name: "GitHub", url: personalInfo.github, icon: "Github" as const },
  { name: "LinkedIn", url: personalInfo.linkedin, icon: "Linkedin" as const },
  { name: "Email", url: `mailto:${personalInfo.email}`, icon: "Mail" as const },
  { name: "WhatsApp", url: personalInfo.whatsappLink, icon: "MessageCircle" as const },
];
