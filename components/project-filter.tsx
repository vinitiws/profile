"use client";

import { motion } from "framer-motion";
import { icons } from "./icons";

type Category = "Todos" | "Frontend" | "Backend" | "Fullstack";

interface ProjectFilterProps {
  categories: Category[];
  selectedCategory: Category;
  onCategoryChange: (category: Category) => void;
}

export function ProjectFilter({ categories, selectedCategory, onCategoryChange }: ProjectFilterProps) {
  return (
    <div className="flex flex-wrap justify-center gap-2 mb-8">
      {categories.map((category) => (
        <motion.button
          key={category}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onCategoryChange(category)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
            selectedCategory === category
              ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/25"
              : "bg-zinc-900 dark:bg-zinc-800 text-zinc-400 hover:text-zinc-100 border border-zinc-800 dark:border-zinc-700"
          }`}
        >
          <span className="flex items-center gap-2">
            <icons.Filter className="w-3 h-3" />
            {category}
          </span>
        </motion.button>
      ))}
    </div>
  );
}
