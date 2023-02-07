import { defineArrayMember, defineField, defineType } from 'sanity';
import { imageFields } from './image';

export const project = defineType({
  title: 'Project',
  name: 'project',
  type: 'document',
  fields: [
    defineField({
      title: 'Name',
      name: 'name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Description',
      name: 'description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Main Image',
      name: 'mainImage',
      type: 'image',
      fields: imageFields,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Start Year',
      name: 'startYear',
      type: 'number',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Tools',
      name: 'tools',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'string',
        }),
      ],
    }),
    defineField({
      title: 'Images',
      name: 'images',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'image',
          fields: imageFields,
        }),
      ],
    }),
  ],
});
