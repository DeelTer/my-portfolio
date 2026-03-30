import type { Skill, Tool } from './types';

export const skillsData: Skill[] = [
  { name: "Управление сообществами", icon: "users", category: "Навыки" },
  { name: "Программирование на Java", icon: "code", category: "Навыки" },
  { name: "AI Промпт-инженер", icon: "brain", category: "Навыки" },
  { name: "SMM-Менеджмент", icon: "megaphone", category: "Навыки" },
  { name: "Брендинг сообществ", icon: "palette", category: "Навыки" },
  { name: "Видеомонтаж", icon: "monitor", category: "Навыки" },
  { name: "Дизайн", icon: "pencil", category: "Навыки" }
];

export const toolsData: Tool[] = [
  { name: "Figma",                  icon: "figma-logo" },
  { name: "IntelliJ IDEA",          icon: "code" },
  { name: "Adobe Photoshop",        icon: "image-square" },
  { name: "Adobe After Effects",    icon: "film-strip" },
  { name: "Adobe Premiere",         icon: "video" },
  { name: "Adobe Audition",         icon: "waveform" },
  { name: "Capcut",                 icon: "scissors" },
  { name: "Excel / Google docs",    icon: "table" },
  { name: "Grok / DeepSeek / ChatGPT", icon: "sparkle" }   // или "brain", "robot" — как больше нравится
];