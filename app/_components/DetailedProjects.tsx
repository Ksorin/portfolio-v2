"use client";

import { useState } from "react";
import { SCHOOL_PROJECTS, SIDE_ACTIVITIES } from "./Status";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";
import { Section } from "./Section";

export const DetailedProjects = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const ALL_PROJECTS = [...SCHOOL_PROJECTS, ...SIDE_ACTIVITIES];

  return (
    <Section className="flex max-md:flex-col items-start gap-4">
      <div className="flex flex-col gap-4 w-full h-full">
        <h2 className="text-2xl font-bold">Détails des Projets</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ALL_PROJECTS.map((project) => (
            <Dialog key={project.id}>
              <div className="flex flex-col gap-2 bg-card p-4 rounded-lg shadow-lg">
                <DialogTrigger asChild>
                  <div
                    className="cursor-pointer"
                    onClick={() => setSelectedVideo(project.video)}
                  >
                    <video
                      src={project.video}
                      className="w-full h-60 object-cover rounded-md"
                      autoPlay
                      loop
                      muted
                    />
                  </div>
                </DialogTrigger>
                <p className="text-lg font-semibold">{project.title}</p>
                <p className="line-clamp-1 cursor-pointer text-sm text-muted-foreground">
                  {project.descriptionLongue}
                </p>
                <Dialog>
                  <DialogTrigger className="text-foreground text-sm mt-2 underline">
                    Voir plus
                  </DialogTrigger>
                  <DialogContent>
                    <DialogTitle>{project.title}</DialogTitle>
                    <p className="text-sm text-muted-foreground">
                      {project.descriptionLongue}
                    </p>
                  </DialogContent>
                </Dialog>
              </div>
              <DialogContent className="max-w-3xl w-full">
                <DialogTitle>{project.title}</DialogTitle>
                {selectedVideo && (
                  <video
                    src={selectedVideo}
                    controls
                    className="w-full h-full object-cover rounded-lg"
                  />
                )}
                <p className="text-sm text-muted-foreground">
                  {project.descriptionLongue}
                </p>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </Section>
  );
};
