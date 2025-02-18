import Link from "next/link";
import { GithubIcon } from "./icons/GithubIcon";
import { Section } from "./Section";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { LinkedInIcon } from "./icons/LinkedInIcon";

export const Header = () => {
  return (
    <header className="sticky top-0 z-10 bg-background shadow-md">
      <Section className="flex items-center">
        <span className="rounded-md border-4 border-primary p-2 text-primary font-bold m-2">
          {" "}
          KS{" "}
        </span>
        <div className="flex-1" />
        <ul className="flex items-center gap-2">
          <Link
            href="https://github.com/Ksorin"
            className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}
          >
            <GithubIcon size={16} className="custom-svg text-foreground" />
          </Link>
          <Link
            href=""
            className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}
          >
            <LinkedInIcon size={16} className="custom-svg text-foreground" />
          </Link>
          <Link
            href="https://github.com/Ksorin"
            className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}
          >
            <GithubIcon size={16} className="custom-svg text-foreground" />
          </Link>
        </ul>
      </Section>
    </header>
  );
};
