"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { personalInfo, about, skills, projects, socialLinks } from "@/data/profile";
import { Header } from "@/components/header";
import { Section, AnimatedTitle, SkillCard, ProjectCard, SocialIcon } from "@/components/ui";
import { ProjectFilter } from "@/components/project-filter";
import { LoadingScreen } from "@/components/loading";
import { icons } from "@/components/icons";

type Category = "Todos" | "Frontend" | "Backend" | "Fullstack";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<Category>("Todos");

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const categories: Category[] = ["Todos", "Frontend", "Backend", "Fullstack"];

  const filteredProjects =
    selectedCategory === "Todos"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex-1"
    >
      <Header />

        {/* Hero Section */}
        <section id="home" className="min-h-screen flex flex-col items-center justify-center px-6 pt-20">
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
              className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center shadow-2xl shadow-purple-500/30"
            >
              <icons.Code2 className="w-16 h-16 text-white" />
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              {personalInfo.fullName}
            </h1>

            <p className="text-xl md:text-2xl text-zinc-400 mb-4">
              {about.goal} em formação
            </p>

            <p className="text-lg text-zinc-500 mb-8 max-w-2xl mx-auto">
              {about.tagline}
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <motion.a
                href="#projects"
                onClick={(e) => handleNavClick(e, "#projects")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-medium flex items-center gap-2 hover:shadow-lg hover:shadow-blue-500/25 transition-shadow"
              >
                Ver Projetos <icons.ArrowRight className="w-4 h-4" />
              </motion.a>
              <motion.a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border border-zinc-700 rounded-full font-medium hover:bg-zinc-800 transition-colors"
              >
                Contato
              </motion.a>
              <motion.a
                href="/curriculo.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-zinc-800 rounded-full font-medium flex items-center gap-2 hover:bg-zinc-700 transition-colors"
              >
                <icons.Download className="w-4 h-4" />
                CV
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
        <Section id="about" alternate>
          <AnimatedTitle>Sobre Mim</AnimatedTitle>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <p className="text-zinc-400 leading-relaxed">
                Sou <strong className="text-zinc-200">{personalInfo.fullName}</strong>, Analista de Sistemas
                apaixonado por tecnologia e desenvolvimento de software. Atualmente cursando{" "}
                <strong className="text-zinc-200">{about.degree}</strong> na{" "}
                <strong className="text-zinc-200">{about.university}</strong>.
              </p>
              <p className="text-zinc-400 leading-relaxed">
                Minha jornada começou em <strong className="text-blue-400">{about.startDate}</strong> e tem
                previsão de conclusão em <strong className="text-purple-400">{about.endDate}</strong>.
                Meu objetivo é me tornar um <strong className="text-zinc-200">{about.goal}</strong>
                {" "}capaz de criar soluções escaláveis e impactantes.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="flex items-center gap-3 text-zinc-400">
                <icons.GraduationCap className="w-5 h-5 text-blue-400" />
                <span>{about.university} - {about.degree}</span>
              </div>
              <div className="flex items-center gap-3 text-zinc-400">
                <icons.Terminal className="w-5 h-5 text-purple-400" />
                <span>Full Stack Development</span>
              </div>
              <div className="flex items-center gap-3 text-zinc-400">
                <icons.Database className="w-5 h-5 text-pink-400" />
                <span>Banco de Dados & APIs</span>
              </div>
              <div className="flex items-center gap-3 text-zinc-400">
                <icons.ChevronRight className="w-5 h-5 text-green-400" />
                <span>Disponível para oportunidades</span>
              </div>
            </motion.div>
          </div>
        </Section>

        {/* Skills Section */}
        <Section id="skills">
          <AnimatedTitle>Skills & Tecnologias</AnimatedTitle>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <SkillCard key={skill.name} {...skill} index={index} />
            ))}
          </div>
        </Section>

        {/* Projects Section */}
        <Section id="projects" alternate>
          <AnimatedTitle>Projetos</AnimatedTitle>

          <ProjectFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />

          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <ProjectCard key={project.title} project={project} index={index} />
              ))}
            </AnimatePresence>
          </motion.div>
        </Section>

        {/* Contact Section */}
        <Section id="contact">
          <AnimatedTitle>Vamos Conversar?</AnimatedTitle>

          <div className="max-w-2xl mx-auto text-center">
            <p className="text-zinc-400 mb-8">
              Estou sempre aberto a novas oportunidades e colaborações.
              Entre em contato através das redes abaixo!
            </p>

            <div className="flex justify-center gap-4 flex-wrap">
              {socialLinks.map((link) => (
                <SocialIcon key={link.name} {...link} />
              ))}
            </div>

            <div className="mt-8 p-6 bg-zinc-900 rounded-xl border border-zinc-800">
              <div className="flex items-center justify-center gap-2 text-zinc-400 mb-2">
                <icons.Mail className="w-5 h-5 text-blue-400" />
                <span className="text-sm">viniciusnicacio80@gmail.com</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-zinc-400">
                <icons.MessageCircle className="w-5 h-5 text-green-400" />
                <span className="text-sm">+55 19 99959-8003</span>
              </div>
            </div>
          </div>
        </Section>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="py-8 text-center text-zinc-600 border-t border-zinc-900"
        >
          <div className="max-w-6xl mx-auto px-6">
            <p className="mb-2">
              Desenvolvido com{" "}
              <span className="text-blue-400">Next.js 16</span>
              {", "}
              <span className="text-purple-400">React 19</span>
              {" & "}
              <span className="text-pink-400">Tailwind CSS</span>
            </p>
            <p className="text-sm">
              © {new Date().getFullYear()} {personalInfo.fullName} - Todos os direitos reservados
            </p>
          </div>
        </motion.footer>
      </motion.main>
  );
}
