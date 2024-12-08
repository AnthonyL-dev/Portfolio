// src/content/config.ts
import { defineCollection, z } from "astro:content";

const projets = defineCollection({
  schema: z.object({
    titre: z.string(),
    description: z.string(),
    langage: z.string(),
    architecture: z.string(),
    but: z.string(),
    chemin_image_introduction: z.string(),
    chemin_image_fonctionnalites: z.string(),
    alt_image_introduction: z.string(),
    alt_image_fonctionnalites: z.string(),
    technologies: z.array(z.string()),
    fonctionnalites: z.array(z.string()),
  }),
});

export const collections = {
  projets,
};
