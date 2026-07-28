import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'zod';

const caseStudySchema = z.object({
  title: z.string(),
  problem: z.string(),
  approach: z.string(),
  outcome: z.string(),
  details: z.string().optional(),
});

const experience = defineCollection({
  loader: glob({ pattern: '*.yaml', base: './src/content/experience' }),
  schema: z.object({
    company: z.string(),
    title: z.string(),
    dateRange: z.string(),
    location: z.string(),
    keyProducts: z.array(z.string()).optional(),
    keyAccounts: z.array(z.string()).optional(),
    overview: z.string(),
    stack: z.array(z.string()),
    caseStudies: z.array(caseStudySchema).min(1),
  }),
});

export const collections = { experience };
