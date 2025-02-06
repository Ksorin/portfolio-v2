import Image from "next/image";
import { Section } from "./Section";

export const Hero = () => {
  return (
    <Section className="flex max-md:flex-col items-start">
      <div className="flex-[2]">
        <h2 className="font-caption text-5xl">Kévin Sorin</h2>
        <h3 className="font-caption text-3xl">Etudiant en informatique</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
          laudantium nobis quam? Possimus, consequuntur. Itaque nulla dolore in
          totam, fugiat nam voluptatem dicta vero voluptas atque illo nesciunt
          ex? Incidunt?
        </p>
      </div>
      <div className="flex-1">
        <Image
          src="/images/image_moi_carre.png"
          className="w-full h-auto rounded-full max-w-xs"
          alt="image de Kévin"
          width={256}
          height={256}
        />
      </div>
    </Section>
  );
};
