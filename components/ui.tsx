"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { icons, IconName } from "./icons";

interface SectionProps {
  id?: string;
  className?: string;
  children: ReactNode;
  alternate?: boolean;
}

export function Section({ id, className = "", children, alternate = false }: SectionProps) {
  return (
    <section
      id={id}
      className={`py-20 px-6 ${alternate ? "bg-zinc-900/50 dark:bg-zinc-800/30" : ""} ${className}`}
    >
      <div className="max-w-6xl mx-auto">
        {children}
      </div>
    </section>
  );
}

interface AnimatedTitleProps {
  children: ReactNode;
  className?: string;
  align?: "left" | "center" | "right";
}

export function AnimatedTitle({ children, className = "", align = "center" }: AnimatedTitleProps) {
  return (
    <motion.h2
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className={`text-3xl md:text-4xl font-bold mb-12 ${
        align === "center" ? "text-center" : align === "left" ? "text-left" : "text-right"
      } ${className}`}
    >
      {children}
    </motion.h2>
  );
}

interface SkillCardProps {
  name: string;
  icon: IconName;
  level: number;
  index: number;
}

export function SkillCard({ name, icon, level, index }: SkillCardProps) {
  const IconComponent = icons[icon];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="p-6 bg-zinc-900 dark:bg-zinc-800 rounded-xl border border-zinc-800 dark:border-zinc-700 hover:border-blue-500/50 transition-colors"
    >
      <div className="flex items-center gap-3 mb-4">
        <IconComponent className="w-6 h-6 text-blue-400" />
        <span className="font-medium text-zinc-100">{name}</span>
      </div>
      <div className="h-2 bg-zinc-800 dark:bg-zinc-700 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 + index * 0.1, duration: 0.8 }}
          className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
        />
      </div>
      <span className="text-xs text-zinc-500 mt-2 block">{level}%</span>
    </motion.div>
  );
}

interface Project {
  title: string;
  description: string;
  tech: string[];
  link: string;
  category: string;
  featured?: boolean;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="group p-6 bg-zinc-950 dark:bg-zinc-900 rounded-xl border border-zinc-800 dark:border-zinc-700 hover:border-blue-500/50 transition-all hover:shadow-lg hover:shadow-blue-500/10"
    >
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-xl font-semibold text-zinc-100 group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>
        {project.featured && (
          <span className="px-2 py-1 text-xs bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white">
            Featured
          </span>
        )}
      </div>
      <p className="text-zinc-400 text-sm mb-4 line-clamp-2">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="px-2 py-1 text-xs bg-zinc-900 dark:bg-zinc-800 text-zinc-400 rounded border border-zinc-800 dark:border-zinc-700"
          >
            {tech}
          </span>
        ))}
      </div>
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm transition-colors"
      >
        Ver projeto <icons.ExternalLink className="w-3 h-3" />
      </a>
    </motion.div>
  );
}

function GithubIcon() {
  return (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.197-.1-1.283-1.2-2.817-2.799-1.5-1.562-2.517-2.678-2.905-3.017-.274-.248-.481-.296-.65.145-.174.435-.624.864-.865 1.049-.241.185-.481.207-.705.102-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.48-2.08-.297-.297-.743-.347-1.032-.173-.297.149-.793.435-1.186.99-.393.555-.793 1.166-.989 1.349-.173.148-.198.297-.148.496.074.174.198.347.446.595.248.248.793.793.868 1.075.099.297.099.595.025.742-.074.148-.297.743-.396.892-.174.173-.446.198-.743.074-.297-.124-1.255-.495-2.39-1.523-1.124-1.007-1.863-1.984-2.063-2.332-.198-.347-.02-.495.124-.67.164-.173.347-.446.495-.668.148-.223.173-.421.074-.743-.074-.297-.074-.595-.198-.742-.124-.173-.521-.793-.714-1.061-.174-.297-.372-.248-.595-.173-.223.074-.47.173-.668.297-.198.124-.396.223-.595.173-.198-.074-.818-.371-1.559-1.061-.741-.69-1.236-1.541-1.384-1.807-.174-.272-.02-.421.124-.595.148-.173.371-.446.52-.669l.372-.52c.074-.149.024-.371-.025-.52-.074-.148-.693-1.687-.951-2.278-.248-.592-.509-.984-.782-1.339.164-.173.371-.446.52-.669l.372-.52c.248-.371.546-.371.743-.248.198.124.644.546.793.743.149.198.297.446.446.694.149.248.099.446.025.595-.074.149-.198.322-.297.446-.099.124-.223.273-.322.421-.099.149-.198.297-.099.496.099.198.446.818.966 1.289.52.471 1.015.768 1.363.892.347.124.546.099.743-.025.198-.124.818-.471 1.04-.793.223-.322.496-.371.743-.248.248.124 1.562.743 1.834.867.273.124.446.198.52.322.074.124.074.743-.173 1.537-.248.793-1.438 1.562-1.983 1.834-.546.273-1.066.546-.595 1.338.471.793 2.083 3.347 4.489 4.415 2.406 1.067 2.406.719 2.827.67.421-.05 1.338-.546 1.536-1.067.198-.52.198-.966.149-1.065-.05-.099-.198-.173-.446-.297z" />
    </svg>
  );
}

interface SocialIconProps {
  name: string;
  url: string;
  icon: "Github" | "Linkedin" | "Mail" | "MessageCircle";
}

export function SocialIcon({ name, url, icon }: SocialIconProps) {
  const renderIcon = () => {
    switch (icon) {
      case "Github":
        return <GithubIcon />;
      case "Linkedin":
        return <LinkedinIcon />;
      case "MessageCircle":
        return <WhatsAppIcon />;
      default:
        const IconComponent = icons[icon];
        return <IconComponent className="w-6 h-6 text-zinc-100" />;
    }
  };

  return (
    <motion.a
      href={url}
      target={name !== "Email" ? "_blank" : undefined}
      rel={name !== "Email" ? "noopener noreferrer" : undefined}
      whileHover={{ scale: 1.1, y: -3 }}
      className="p-4 bg-zinc-900 dark:bg-zinc-800 rounded-full hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 transition-all"
      aria-label={name}
      title={name}
    >
      {renderIcon()}
    </motion.a>
  );
}
