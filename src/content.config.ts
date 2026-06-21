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
    meta: z.object({
      title: z.string(),
      description: z.string(),
    }),
    header: z.object({
      kicker: z.string(),
      title: z.string(),
      description: z.string(),
    }),
    items: z.array(z.object({
      time: z.string(),
      role: z.string().optional(),
      speaker: z.string().optional(),
      title: z.string(),
      type: z.enum(['session', 'break']),
      icon: z.enum(['coffee', 'lunch']).optional(),
    })),
  }),
});

const certificate = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './src/content/certificate',
  }),

  schema: z.object({
    meta: z.object({
      title: z.string(),
      description: z.string(),
    }),
    hero: z.object({
      eyebrow: z.string(),
      title: z.string(),
      description: z.string(),
    }),
    preview: z.object({
      imageFilename: z.string(),
      imageAlt: z.string(),
      validationLabel: z.string(),
      idLabel: z.string(),
      idValue: z.string(),
      shareLabel: z.string(),
      shareTitle: z.string(),
      shareText: z.string(),
    }),
    download: z.object({
      title: z.string(),
      steps: z.array(z.string()),
      form: z.object({
        label: z.string(),
        placeholder: z.string(),
        buttonLabel: z.string(),
        supportText: z.string(),
        supportLabel: z.string(),
        supportHref: z.string(),
      }),
    }),
    backing: z.object({
      title: z.string(),
      description: z.string(),
      people: z.array(z.object({
        name: z.string(),
        role: z.string(),
        tone: z.enum(['primary', 'accent']),
      })),
    }),
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

export const collections = { speakers, agenda, landing, certificate };
