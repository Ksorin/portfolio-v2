import { IconCloud } from "@/components/magicui/icon-cloud";
import { Section } from "./Section";
import {
  FaReact,
  FaJava,
  FaAndroid,
  FaHtml5,
  FaCss3,
  FaNodeJs,
  FaGit,
  FaGithub,
  FaGitlab,
} from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiKotlin,
  SiMongodb,
  SiPython,
  SiVercel,
  SiFigma,
  SiGodotengine,
  SiLua,
  SiRobloxstudio,
} from "react-icons/si";
import { BiLogoVisualStudio } from "react-icons/bi";
import { Badge } from "@/components/ui/badge";
import { TbSql } from "react-icons/tb"; // Importez une icône pour SQL

const slugs = [
  "typescript",
  "javascript",
  "java",
  "react",
  "android",
  "html5",
  "css3",
  "kotlin",
  "mongodb",
  "sql",
  "python",
  "vercel",
  "git",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "figma",
  "lua",
  "gdscript",
  "robloxstudio",
] as const;

const iconMap = {
  typescript: SiTypescript,
  javascript: SiJavascript,
  java: FaJava,
  react: FaReact,
  android: FaAndroid,
  html5: FaHtml5,
  css3: FaCss3,
  kotlin: SiKotlin,
  mongodb: SiMongodb,
  sql: TbSql,
  python: SiPython,
  vercel: SiVercel,
  git: FaGit,
  github: FaGithub,
  gitlab: FaGitlab,
  visualstudiocode: BiLogoVisualStudio,
  figma: SiFigma,
  lua: SiLua,
  gdscript: SiGodotengine,
  robloxstudio: SiRobloxstudio,
} as const;

// Couleurs personnalisées pour chaque icône
const iconColors = {
  typescript: "#007acc",
  javascript: "#f7df1e",
  java: "#5382a1",
  react: "#61dafb",
  android: "#3ddc84",
  html5: "#e34f26",
  css3: "#1572b6",
  kotlin: "#7F52FF",
  mongodb: "#47A248",
  sql: "#F89A14",
  python: "#3776ab",
  vercel: "#000000",
  git: "#f05032",
  github: "#181717",
  gitlab: "#fc6d26",
  visualstudiocode: "#007acc",
  lua: "#5566ee",
  gdscript: "#666c83",
  robloxstudio: "#80BBDB",
};

export const Skills = () => {
  const iconComponents = slugs
    .map((slug, index) => {
      const IconComponent = iconMap[slug as keyof typeof iconMap];
      const color = iconColors[slug as keyof typeof iconColors];
      return IconComponent ? (
        <IconComponent key={index} size={64} color={color} />
      ) : null;
    })
    .filter((icon) => icon !== null);

  return (
    <Section className="flex flex-col items-start gap-4">
      <Badge variant={"outline"}>Compétences</Badge>
      <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Ce que j'ai appris...
      </h2>
      <div className="relative flex size-full items-center justify-center overflow-hidden">
        <IconCloud icons={iconComponents} />
      </div>
      <p className="text-sm text-muted-foreground">
        Ce sont l'ensemble des compétences que j'ai acquises au cours de mes
        études et de mes projets personnels.
      </p>
    </Section>
  );
};
