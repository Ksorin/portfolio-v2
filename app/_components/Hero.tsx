import { Section } from "./Section";

export const Hero = () => {
  return (
    <Section className="flex max-lg:flex-col items-start">
        <div className="flex-[2]">
            <h2>Kévin Sorin</h2>
            <h3>Etudiant en informatique</h3>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis laudantium nobis quam? Possimus, consequuntur. Itaque nulla dolore in totam, fugiat nam voluptatem dicta vero voluptas atque illo nesciunt ex? Incidunt?
            </p>
        </div>
        <div className="flex-1">

        </div>
    </Section>
  );
};