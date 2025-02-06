import Link from "next/link";
import { GithubIcon } from "./icons/GithubIcon";
import { Section } from "./Section";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { LinkedInIcon } from "./icons/LinkedInIcon";

export const Header = () => {
  return (
    <header className="sticky top-0 z-10 bg-background shadow-md">
      <Section className="flex items-baseline ">
        <h1 className="text-4xl font-bold text-primary py-5">Kévin Sorin</h1>
        <div className="flex-1" />
        <ul className="flex items-center gap-2">
          <Link
            href="https://github.com/Ksorin"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "size-12 p-0"
            )}
          >
            <GithubIcon size={48} className="custom-svg text-foreground" />
          </Link>
          <Link
            href=""
            className={cn(
              buttonVariants({ variant: "outline" }),
              "size-12 p-0"
            )}
          >
            <LinkedInIcon size={48} className="custom-svg text-foreground" />
          </Link>
          <Link
            href="https://github.com/Ksorin"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "size-12 p-0"
            )}
          >
            <GithubIcon size={48} className="custom-svg text-foreground" />
          </Link>
        </ul>
      </Section>
    </header>
  );
};
