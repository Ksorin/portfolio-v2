import { Card } from "@/components/ui/card";
import { Section } from "./Section";
import {
  Code,
  LucideIcon,
  PersonStanding,
  Spade,
  Utensils,
  Hand,
  Mail,
  ArrowUpRight,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

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
                id={project.id}
                Logo={project.Logo}
                title={project.title}
                description={project.description}
                descriptionLongue={project.descriptionLongue}
                url="/"
                video={project.video}
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
            {SIDE_ACTIVITIES.map((activity, index) => (
              <SideActivities
                key={index}
                id={activity.id}
                image={activity.image}
                title={activity.title}
                description={activity.description}
                date={activity.date}
                url={activity.url}
                descriptionLongue={activity.descriptionLongue}
                video={activity.video}
              />
            ))}
          </div>
        </Card>
        <div className="flex-1 flex flex-col gap-4">
          <Card className="p-4 flex-col gap-4">
            <p className="text-lg text-muted-foreground">Contactez-moi</p>
            <ContactCard info="kevin.sorin7@gmail.com" />
          </Card>
        </div>
      </div>
    </Section>
  );
};

export const SCHOOL_PROJECTS: SchoolProjectsProps[] = [
  {
    id: "terroir-express",
    Logo: Utensils,
    title: "Terroir Express",
    description: "Site web de commande de produits locaux",
    descriptionLongue:
      "Terroir Express est un projet de fin de semestre. Nous devions créer un site web pour une entreprise fictive de livraison de produits locaux. Nous avons dû créer un site web complet avec une page d'accueil, une page de produits, et une page de connexion. Pour cela, nous avons le framework Symfony et nous avons utilisé une base de données MySQL pour les produits et les clients.",
    url: "/", // Add the URL of the project
    video: "/videos/terroir-express.mp4",
  },
  {
    id: "skyjo",
    Logo: Spade,
    title: "Skyjo",
    description: "Création d'un jeu de société en Kotlin",
    descriptionLongue:
      "Lors de la fin de la première année, nous avons dû réaliser un jeu de société en Kotlin. Ce jeu est un jeu de cartes où le but est d'avoir le moins de points possible à la fin de la partie. Ce jeu devait être en réseau et le serveur nous était fournis. Nous devoins donc réaliser le client en MVC. (pour la vidéo, je n'ai plus le serveur par conséquent on ne peut pas le voir en action, de plus on ne voit pas non plus la dernière vue qui donne le score final)",
    url: "/", // Add the URL of the project
    video: "/videos/skyjo.mp4",
  },
  {
    id: "puissance-4",
    Logo: Code,
    title: "Puissance 4",
    description: "Réalisation d'un puissance 4 en réseau",
    descriptionLongue:
      "Ce projet a été réalisé en binôme. Nous devions réaliser un puissance 4 en réseau. Pour cela, nous avons utilisé le langage Go. Nous avons dû réaliser un serveur et un client. Le serveur devait gérer les parties et les clients devaient pouvoir se connecter pour jouer ensemble.",
    url: "/", // Add the URL of the project
    video: "/videos/puissance-4.mp4",
  },
  {
    id: "jeu-golang",
    Logo: PersonStanding,
    title: "Jeu en Golang",
    description: "Jeu 2D en Golang",
    descriptionLongue:
      "Pour ce projet, nous étions en binôme. Nous avons eu la base du jeu à laquelle nous avons ajouté de nombreuses fonctionnalités telles que: une map qui pouvait être chargée depuis un fichier, une map générée aléatoirement et infinie, les colision et animations de l'eau, le téléporteur, la caméra qui suit le joueur. Pour chacune de ces fonctionnalités, nous devions pouvoir les désactiver ou les activer depuis un fichier de configuration.",
    url: "/", // Add the URL of the project
    video: "/videos/jeu-golang.mp4",
  },
  {
    id: "site-manucure",
    Logo: Hand,
    title: "Site de manucure",
    description: "Site web vitrine pour une manucure",
    descriptionLongue:
      "Ce site web a été le premier réalisé lors de ma première année, pour cela nous étions par équipe de 4 et nous devions créer un site vitrine. Nous avons donc choisi de créer un site pour la mère d'un membre de groupe qui gère une entreprise de manucure. Nous avons donc créé un site avec une page d'accueil, une page de présentation, une page de contact et une page de galerie.",
    url: "/", // Add the URL of the project
    video: "/videos/site-manucure.mp4",
  },
];

type SchoolProjectsProps = {
  id: string;
  Logo: LucideIcon;
  title: string;
  description: string;
  descriptionLongue: string;
  url: string;
  video: string;
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

export const SIDE_ACTIVITIES: SideActivitiesProps[] = [
  {
    id: "3moulins",
    image: "/images/logo_3Moulins.png",
    title: "Bouqueterie",
    description: "Préparation de bouquets de muguet",
    date: "Avril - Mai 2024",
    url: "https://www.3moulins.fr/",
    descriptionLongue:
      "Ce fut ma première expérience professionnelle. J'ai travaillé en bout de chaîne et je devais préparer les palettes de muguet pour les envoyer dans les magasins. Cela m'a permis de découvrir le monde du travail et de voir comment cela se passait dans une usine.",
    video: "/videos/3-moulins.mp4",
  },
  {
    id: "cgj",
    image: "/images/logo_cgj.png",
    title: "Code Game Jam",
    description: "30h pour réaliser un jeu vidéo",
    date: "Janvier 2025",
    url: "https://koriaaaaaaaaaaa.itch.io/melody-odyssey",
    descriptionLongue:
      "Lors de la Code Game Jam, nous avions 30h pour réaliser un jeu vidéo sur le thème 'Melodie à l'infinie'. Nous avons décidé de réaliser un survivor avec des instruments de musique, ainsi au fur et à mesure de la partie, les instruments qui étaient les armes permettait de créer une mélodie. Pour cela nous avons utilisé Godot, ce qui était une première expérience pour beaucoup d'entre nous. Ce jeu noous permis d'atteindre la finale de la CGJ.",
    video: "/videos/cgj.mp4",
  },
  {
    id: "roblox",
    image: "/images/logo_roblox.png",
    title: "Jeu Roblox",
    description: "Réalisation d'un Tycoon sur Roblox",
    date: "Juillet - Aout 2024",
    url: "/",
    descriptionLongue:
      "Durant les vacances, j'ai réalisé un Tycoon sur Roblox. Ce jeu est un jeu de gestion où le but est de gagner le plus d'argent possible. Pour cela, il faut construire des machines qui produisent de l'argent. J'ai réalisé ce jeu en Lua, un langage que je ne connaissais pas avant de réaliser ce jeu.",
    video: "/videos/roblox.mp4",
  },
];

type SideActivitiesProps = {
  id: string;
  image: string;
  title: string;
  description: string;
  date: string;
  url: string;
  descriptionLongue: string;
  video: string;
};

const SideActivities = (props: SideActivitiesProps) => {
  return (
    <Link
      href={props.url}
      className="inline-flex gap-4 items-center hover:bg-accent/50 transition-colors p-0.5 rounded"
    >
      <Image
        src={props.image}
        alt={props.title}
        width={40}
        height={40}
        className="w-9 h-10 object-contain"
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

const ContactCard = (props: { info: string }) => {
  return (
    <Card className="p-3 bg-accent/10 hover:bg-accent/50 transition-colors flex items-center justify-between gap-4">
      <div className="flex items-center gap-4">
        <Mail size={24} />
        <p className="text-md text-muted-foreground">{props.info}</p>
      </div>
      <ArrowUpRight size={24} />
    </Card>
  );
};
