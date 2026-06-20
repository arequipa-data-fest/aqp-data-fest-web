import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'zod';

const speakers = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './src/content/speakers',
  }),

  schema: z.object({
    name: z.string(),
    role: z.string(),
    company: z.string().optional(),
    imageFilename: z.string(),
    imageAlt: z.string(),
    imageWidth: z.number(),
    imageHeight: z.number(),
    tags: z.array(z.object({ label: z.string() })).default([]),
    variant: z.enum(['v1', 'v2', 'v3']).default('v2'),
    description: z.string().optional(),
    badge: z.string().optional(),
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

const landing = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './src/content/landing',
  }),

  schema: z.object({
    hero: z.object({
      titlePrefix: z.string(),
      titleHighlight: z.string(),
      description: z.string(),
      date: z.object({ label: z.string(), value: z.string() }),
      location: z.object({ label: z.string(), value: z.array(z.string()) }),
      primaryCta: z.object({ label: z.string(), href: z.string() }),
      secondaryCta: z.object({ label: z.string(), href: z.string() }),
    }),
    countdown: z.object({
      ariaLabel: z.string(),
      targetDate: z.string(),
      inscritos: z.string(),
      inscritosLabel: z.string(),
      items: z.array(z.object({ key: z.string(), label: z.string() })),
    }),
    aboutEvent: z.object({
      title: z.string(),
      description: z.array(z.string()),
      media: z.object({
        imageFilename: z.string(),
        alt: z.string(),
        width: z.number(),
        height: z.number(),
      }),
      organizersLabel: z.string(),
      collaboratorLabel: z.string(),
      organizers: z.array(z.object({
        logoFilename: z.string(),
        alt: z.string(),
      })),
      collaborators: z.array(z.object({
        logoFilename: z.string(),
        alt: z.string(),
      })),
    }),
    experience: z.object({
      title: z.string(),
      items: z.array(z.object({
        title: z.string(),
        description: z.string(),
        icon: z.enum(['lunch', 'coffee']),
      })),
    }),
    mainTopics: z.object({
      title: z.string(),
      items: z.array(z.object({
        title: z.string(),
        icon: z.enum(['ai', 'database', 'analytics', 'cloud']),
      })),
    }),
    featuredSpeakers: z.object({
      eyebrow: z.string(),
      title: z.string(),
      viewAllLabel: z.string(),
      viewAllHref: z.string(),
      speakerIds: z.array(z.string()),
    }),
  }),
});

export const collections = { speakers, agenda, landing };
