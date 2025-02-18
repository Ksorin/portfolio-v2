import { Card } from "@/components/ui/card";
import { Section } from "./Section";
import {
  Code,
  Contact,
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
          <p className="text-lg text-muted-foreground">
            Experiences extra-scolaires
          </p>
          <div className="flex flex-col gap-4">
            {SIDEACTIVITIES.map((activity, index) => (
              <SideActivities
                key={index}
                image={activity.image}
                title={activity.title}
                description={activity.description}
                date={activity.date}
                url={activity.url}
              />
            ))}
          </div>
        </Card>
        <Card className="p-4 flex-1">
          <p className="text-lg text-muted-foreground">Contactez-moi</p>
          <ContactCard />
        </Card>
      </div>
    </Section>
  );
};

const SCHOOL_PROJECTS: SchoolProjectsProps[] = [
  {
    Logo: Utensils,
    title: "Terroir Express",
    description: "Description projet 1",
    url: "/", // Add the URL of the project
  },
  {
    Logo: Spade,
    title: "Skyjo",
    description: "Description projet 2",
    url: "/", // Add the URL of the project
  },
  {
    Logo: Code,
    title: "Puissance 4",
    description: "Description projet 3",
    url: "/", // Add the URL of the project
  },
  {
    Logo: PersonStanding,
    title: "Jeu en Golang",
    description: "Description projet 3",
    url: "/", // Add the URL of the project
  },
  {
    Logo: PersonStanding,
    title: "Jeu en Golang",
    description: "Description projet 3",
    url: "/", // Add the URL of the project
  },
  {
    Logo: PersonStanding,
    title: "Jeu en Golang",
    description: "Description projet 3",
    url: "/", // Add the URL of the project
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

const SIDEACTIVITIES: SideActivitiesProps[] = [
  {
    image: "/images/logo_3Moulins.png",
    title: "Bouqueterie",
    description: "Préparation de bouquets de muguet",
    date: "Avril - Mai 2024",
    url: "https://www.3moulins.fr/",
  },
  {
    image: "/images/logo_cgj.png",
    title: "Code Game Jam",
    description: "30h pour réaliser un jeu vidéo",
    date: "Janvier 2025",
    url: "https://cgj.bpaul.fr/",
  },
  {
    image: "/images/logo_roblox.png",
    title: "Jeu Roblox",
    description: "Réalisation d'un Tycoon sur Roblox",
    date: "Juillet - Aout 2024",
    url: "/",
  },
];

type SideActivitiesProps = {
  image: string;
  title: string;
  description: string;
  date: string;
  url: string;
};

const SideActivities = (props: SideActivitiesProps) => {
  return (
    <Link
      href={props.url}
      className="inline-flex gap-4 items-center hover:bg-accent/50 transition-colors p-1 rounded"
    >
      <img
        src={props.image}
        alt={props.title}
        className="w-10 h-10 object-contain"
      />
      <div>
        <p className="text-lg font-semibold">{props.title}</p>
        <p className="text-xs text-muted-foreground">{props.description}</p>
      </div>
      <div className="ml-auto">
        <p className="text-xs text-end text-muted-foreground">{props.date}</p>
      </div>
    </Link>
  );
};

const ContactCard = (props: {}) => {
  return (
    <Card className="p-4 flex-1">
      <p className="text-lg text-muted-foreground">TODO</p>
    </Card>
  );
};
