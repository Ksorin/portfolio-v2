import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

export const Section = (props: PropsWithChildren<{ className?: String }>) => {
  return (
    <section className={cn("max-w-4xl px-4 mx-auto", props.className)}>
      {props.children}
    </section>
  );
};
