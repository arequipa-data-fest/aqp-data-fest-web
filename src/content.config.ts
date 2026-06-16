import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Los campos son de ejemplo, definir los correctos

const speakers = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './src/content/speakers',
  }),

  schema: z.object({
    name: z.string(),
    role: z.string(),
    company: z.string(),
    image: z.string().url(),  // URL de Cloudinary

    social: z.object({
      linkedin: z.string().url().optional(),
      twitter: z.string().url().optional(),
    }).optional(),
  }),
});


const agenda = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './src/content/agenda',
  }),

  schema: z.object({
    title: z.string(),
    start_time: z.string(),
    end_time: z.string(),
    speaker: z.string().optional(),

    type: z.enum([
      'keynote',
      'workshop',
      'panel',
      'break'
    ]),
  }),
});


export const collections = { speakers, agenda };
