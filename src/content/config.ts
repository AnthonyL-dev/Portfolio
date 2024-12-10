import { defineCollection, reference, z } from "astro:content";

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

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    // Référencer un auteur unique de la collection `authors` par `id`
    author: reference("authors"),
    // Référence un tableau d'articles liés de la collection `blog` par `slug`id`.
    relatedPosts: z.array(reference("blog")),
  }),
});

const authors = defineCollection({
  type: "data",
  schema: z.object({
    name: z.string(),
    portfolio: z.string().url(),
  }),
});

export const collections = {
  projets,
  blog,
  authors,
};
