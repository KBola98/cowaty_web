import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    image: z.string().optional(),
    author: z.string().default('Cowaty Team'),
    tags: z.array(z.string()),
    draft: z.boolean().default(false),
  }),
});

const services = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/services' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    icon: z.string().optional(),
    price: z.string().optional(),
    order: z.number().default(0),
    featured: z.boolean().default(false),
  }),
});

const testimonials = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/testimonials' }),
  schema: z.object({
    clientName: z.string(),
    clientRole: z.string().optional(),
    company: z.string().optional(),
    image: z.string().optional(),
    rating: z.number().min(1).max(5).default(5),
    order: z.number().default(0),
  }),
});

export const collections = { blog, services, testimonials };
