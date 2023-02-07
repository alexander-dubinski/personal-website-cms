import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from '@/schemas';

export default defineConfig({
  name: 'default',
  title: 'Personal Website CMS',

  projectId: 'j0ma9y72',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
});
