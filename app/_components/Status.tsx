import { Card } from "@/components/ui/card";
import { Section } from "./Section";
import {
  Code,
  LucideIcon,
  PersonStanding,
  Spade,
  Utensils,
} from "lucide-react";
import Link from "next/link";

export const Status = () => {
  return (
    <Section className="flex max-md:flex-col items-start gap-4">
      <div className="flex-[3] w-full h-full">
        <Card className="w-full p-4 flex flex-col gap-2">
          <p className="text-lg text-muted-foreground">Projets scolaires</p>
          <div className="flex flex-col gap-4">
            {SCHOOL_PROJECTS.map((project, index) => (
              <SchoolProjects
                key={index}
                Logo={project.Logo}
                title={project.title}
                description={project.description}
                url="/"
              />
            ))}
          </div>
        </Card>
      </div>
      <div className="flex-[2] w-full h-full flex flex-col gap-4">
        <Card className="p-4 flex-1">
          <p className="text-lg text-muted-foreground">Exp pro + Code Game</p>
        </Card>
        <Card className="p-4 flex-1">Contact me</Card>
      </div>
    </Section>
  );
};

const SCHOOL_PROJECTS = [
  {
    Logo: Utensils,
    title: "Terroir Express",
    description: "Description projet 1",
  },
  {
    Logo: Spade,
    title: "Skyjo",
    description: "Description projet 2",
  },
  {
    Logo: Code,
    title: "Puissance 4",
    description: "Description projet 3",
  },
  {
    Logo: PersonStanding,
    title: "Jeu en Golang",
    description: "Description projet 3",
  },
];

type SchoolProjectsProps = {
  Logo: LucideIcon;
  title: string;
  description: string;
  url: string;
};

const SchoolProjects = (props: SchoolProjectsProps) => {
  return (
    <Link
      href={props.url}
      className="inline-flex gap-4 items-center hover:bg-accent/50 transition-colors p-1 rounded"
    >
      <span className="bg-accent text-accent-foreground p-4 rounded-sm">
        <props.Logo size={16} />
      </span>
      <div>
        <p className="text-lg font-semibold">{props.title}</p>
        <p className="text-sm text-muted-foreground">{props.description}</p>
      </div>
    </Link>
  );
};

type SideActivitiesProps = {
  image: string;
  title: string;
  description: string;
  url: string;
};

const SideActivities = (props: SideActivitiesProps) => {
  return (
    <Link
      href={props.url}
      className="inline-flex gap-4 items-center hover:bg-accent/50 transition-colors p-1 rounded"
    >
      <span className="bg-accent text-accent-foreground p-4 rounded-sm">
        <img
          src={props.image}
          alt={props.title}
          className="w-4 h-4 object-contain"
        />
      </span>
      <div>
        <p className="text-lg font-semibold">{props.title}</p>
        <p className="text-sm text-muted-foreground">{props.description}</p>
      </div>
    </Link>
  );
};
