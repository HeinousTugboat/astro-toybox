// Import utilities from `astro:content`
import { z, defineCollection, reference } from "astro:content";

const techtonicaItems = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string()
  })
});

const techtonicaMachines = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string()
  })
});

const techtonicaRecipes = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    rate: z.number(),
    machine: reference('techtonica-machines'),
    inputs: z.array(z.object({
      item: reference('techtonica-items'),
      quantity: z.number()
    })),
    outputs: z.array(z.object({
      item: reference('techtonica-items'),
      quantity: z.number()
    }))
  })
})

// Define a `type` and `schema` for each collection
const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
    author: z.string(),
    tags: z.array(z.string())
  })
});

// Export a single `collections` object to register your collection(s)
export const collections = {
  posts,
  'techtonica-items': techtonicaItems,
  'techtonica-machines': techtonicaMachines,
  'techtonica-recipes': techtonicaRecipes,
};
