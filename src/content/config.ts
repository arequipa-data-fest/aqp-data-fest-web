import { defineCollection, z } from 'astro:content';

// Los campos aún no están definidos

const speakers = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    role: z.string(),
    company: z.string(),
    image: z.string(), // URL de Cloudinary
    social: z.object({
      linkedin: z.string().url().optional(),
      twitter: z.string().url().optional(),
    }).optional(),
  }),
});

const agenda = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    start_time: z.string(),
    end_time: z.string(),
    speaker: z.string().optional(),
    type: z.enum(['keynote', 'workshop', 'panel', 'break']),
  }),
});

export const collections = { speakers, agenda };
