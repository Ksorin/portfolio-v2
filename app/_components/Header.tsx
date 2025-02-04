import { Section } from "./Section";

export const Header = () => {
  return (
    <header>
        <Section className="flex items-baseline ">
            <h1 className="text-4xl font-bold text-primary-foreground">Kévin Sorin</h1>
            <div className="flex-1"></div>
        </Section>
    </header>
  )
};
