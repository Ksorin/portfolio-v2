import Image from "next/image";
import { Section } from "./Section";
import { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";
import { ReactIcon } from "./icons/ReactIcon";
import Link from "next/link";

const Code = ({ className, ...props }: ComponentPropsWithoutRef<"span">) => {
  return (
    <span
      className={cn(
        "bg-accent/30 hover:bg-accent/50 transition-colors font-mono border border-accent px-1 text-primary rounded-sm",
        className
      )}
      {...props}
    />
  );
};

export const Hero = () => {
  return (
    <Section className="flex max-md:flex-col items-start gap-4">
      <div className="flex-[3] w-full flex flex-col gap-2">
        <h2 className="font-caption font-bold text-5xl text-primary">
          Kévin Sorin
        </h2>
        <h3 className="font-caption text-3xl">Etudiant en informatique</h3>
        <p className="text-base">
          Bonjour, je suis Kévin, un étudiant en informatique à{" "}
          <Link href="https://iutnantes.univ-nantes.fr/">
            <Code className="inline-flex items-center gap-1">
              <Image
                src="/images/logo_IUT.webp"
                alt="logo iut nantes"
                width={25}
                height={25}
                className="inline w-auto h-auto"
              />{" "}
              l'IUT de Nantes
            </Code>
          </Link>{" "}
          passionné par le développement web. J'aime apprendre et découvrir de
          nouvelles technologies, tels que la librairie{" "}
          <Code className="inline-flex items-center gap-1">
            <ReactIcon size={16} className="inline" />
            React
          </Code>
          ,
        </p>
      </div>
      <div className="flex-[2] max-md:m-auto ml-auto">
        <Image
          src="/images/image_moi_carre.png"
          className="w-full h-auto rounded-full max-w-xs max-md:w-56"
          alt="image de Kévin"
          width={350}
          height={350}
          priority
        />
      </div>
    </Section>
  );
};
