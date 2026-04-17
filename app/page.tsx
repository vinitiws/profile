"use client";

import { motion } from "framer-motion";
import { Code2, Terminal, Database, GraduationCap, ArrowRight, Mail, ExternalLink, Link2, MessageCircle } from "lucide-react";

const fullName = "Vinicius Nicacio do Nascimento";

const skills = [
  { name: "JavaScript/TypeScript", icon: Code2, level: 85 },
  { name: "React/Next.js", icon: Terminal, level: 80 },
  { name: "Java/Spring Boot", icon: Code2, level: 75 },
  { name: "Python/Django", icon: Code2, level: 65 },
  { name: "Node.js", icon: Code2, level: 70 },
  { name: "MySQL", icon: Database, level: 70 },
];

const projects = [
  {
    title: "Prada Calcados",
    description: "E-commerce para loja de calçados com sistema de carrinho e checkout",
    tech: ["JavaScript", "React", "Stripe"],
    link: "https://github.com/sm-codebase/pradocalcados",
  },
  {
    title: "Next.js",
    description: "Estudos avançados: roteamento, Server/Client Components, Actions, Metadata",
    tech: ["Next.js", "TypeScript", "React"],
    link: "https://github.com/vinitiws/nextjs",
  },
  {
    title: "Airbnb Replica",
    description: "Réplica do front-end do Airbnb com React",
    tech: ["JavaScript", "React", "CSS"],
    link: "https://github.com/vinitiws/airbnb-replica",
  },
  {
    title: "Cadastro Usuário",
    description: "CRUD básico para cadastro de usuários",
    tech: ["Java", "MySQL", "JDBC"],
    link: "https://github.com/vinitiws/cadastro-usuario",
  },
  {
    title: "WebMakers",
    description: "Projeto institucional para agência digital",
    tech: ["JavaScript", "HTML/CSS"],
    link: "https://github.com/wmsousa01/webmakers",
  },
  {
    title: "Portfólio",
    description: "Meu primeiro portfólio pessoal",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/vinitiws/portifolio",
  },
];

export default function Home() {
  return (
    <div className="min-h-full bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 text-zinc-100">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="w-24 h-24 mx-auto mb-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center"
          >
            <Code2 className="w-12 h-12 text-white" />
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            {fullName}
          </h1>

          <p className="text-xl md:text-2xl text-zinc-400 mb-4">
            Software Engineer em formação
          </p>

          <p className="text-lg text-zinc-500 mb-8 max-w-2xl mx-auto">
            Transformando café em código e ideias em realidade digital
          </p>

          <div className="flex gap-4 justify-center">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-medium flex items-center gap-2 hover:shadow-lg hover:shadow-blue-500/25 transition-shadow"
            >
              Ver Projetos <ArrowRight className="w-4 h-4" />
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border border-zinc-700 rounded-full font-medium hover:bg-zinc-800 transition-colors"
            >
              Contato
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-6 h-10 border-2 border-zinc-700 rounded-full flex justify-center pt-2"
          >
            <div className="w-1 h-2 bg-zinc-500 rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 bg-zinc-900/50">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-8 text-center"
          >
            Sobre Mim
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <p className="text-zinc-400 leading-relaxed">
                Sou <strong className="text-zinc-200">{fullName}</strong>, Analista de Sistemas apaixonado por tecnologia
                e desenvolvimento de software. Atualmente cursando <strong className="text-zinc-200">Análise e
                Desenvolvimento de Sistemas</strong> na Universidade Cruzeiro do Sul.
              </p>
              <p className="text-zinc-400 leading-relaxed">
                Minha jornada começou em <strong className="text-blue-400">Janeiro de 2025</strong> e tem
                previsão de conclusão em <strong className="text-purple-400">Dezembro de 2026</strong>.
                Meu objetivo é me tornar um <strong className="text-zinc-200">Software Engineer</strong>
                capaz de criar soluções escaláveis e impactantes.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="flex items-center gap-3 text-zinc-400">
                <GraduationCap className="w-5 h-5 text-blue-400" />
                <span>Cruzeiro do Sul - ADS</span>
              </div>
              <div className="flex items-center gap-3 text-zinc-400">
                <Terminal className="w-5 h-5 text-purple-400" />
                <span>Full Stack Development</span>
              </div>
              <div className="flex items-center gap-3 text-zinc-400">
                <Database className="w-5 h-5 text-pink-400" />
                <span>Banco de Dados & APIs</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-12 text-center"
          >
            Skills & Tecnologias
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-zinc-900 rounded-xl border border-zinc-800"
              >
                <div className="flex items-center gap-3 mb-4">
                  <skill.icon className="w-6 h-6 text-blue-400" />
                  <span className="font-medium">{skill.name}</span>
                </div>
                <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.8 }}
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-zinc-900/50">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-12 text-center"
          >
            Projetos
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="p-6 bg-zinc-950 rounded-xl border border-zinc-800 hover:border-zinc-700 transition-colors"
              >
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-zinc-400 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs bg-zinc-900 text-zinc-400 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm"
                >
                  Ver projeto <ExternalLink className="w-3 h-3" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-8"
          >
            Vamos Conversar?
          </motion.h2>

          <p className="text-zinc-400 mb-8">
            Estou sempre aberto a novas oportunidades e colaborações.
            Entre em contato!
          </p>

          <div className="flex justify-center gap-6">
            <motion.a
              href="https://github.com/vinitiws"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -3 }}
              className="p-4 bg-zinc-900 rounded-full hover:bg-zinc-800 transition-colors"
              aria-label="GitHub"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </motion.a>
            <a
              href="mailto:viniciusnicacio80@gmail.com"
              className="p-4 bg-zinc-900 rounded-full hover:bg-zinc-800 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </a>
            <motion.a
              href="https://wa.me/5519999598003"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -3 }}
              className="p-4 bg-zinc-900 rounded-full hover:bg-zinc-800 transition-colors"
              aria-label="WhatsApp"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.197-.1-1.283-1.2-2.817-2.799-1.5-1.562-2.517-2.678-2.905-3.017-.274-.248-.481-.296-.65.145-.174.435-.624.864-.865 1.049-.241.185-.481.207-.705.102-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.48-2.08-.297-.297-.743-.347-1.032-.173-.297.149-.793.435-1.186.99-.393.555-.793 1.166-.989 1.349-.173.148-.198.297-.148.496.074.174.198.347.446.595.248.248.793.793.868 1.075.099.297.099.595.025.742-.074.148-.297.743-.396.892-.174.173-.446.198-.743.074-.297-.124-1.255-.495-2.39-1.523-1.124-1.007-1.863-1.984-2.063-2.332-.198-.347-.02-.495.124-.67.164-.174.347-.446.495-.668.148-.223.173-.421.074-.743-.074-.297-.074-.595-.198-.742-.124-.173-.521-.793-.714-1.061-.174-.297-.372-.248-.595-.173-.223.074-.47.173-.668.297-.198.124-.396.223-.595.173-.198-.074-.818-.371-1.559-1.061-.741-.69-1.236-1.541-1.384-1.807-.174-.272-.02-.421.124-.595.148-.173.371-.446.52-.669.148-.224.174-.371.248-.52.074-.149.024-.371-.025-.52-.074-.148-.693-1.687-.951-2.278-.248-.592-.509-.984-.782-1.339.164-.173.371-.446.52-.669l.372-.52"/></svg>
            </motion.a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-zinc-600 border-t border-zinc-900">
        <p>Desenvolvido com Next.js 16, React 19 & Tailwind CSS</p>
        <p className="text-sm mt-2">© 2026 {fullName} - Todos os direitos reservados</p>
      </footer>
    </div>
  );
}
