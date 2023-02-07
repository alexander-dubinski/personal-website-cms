import { defineField, defineType } from 'sanity';
import { imageFields } from '@/schemas/image';

export const career = defineType({
  title: 'Career',
  name: 'career',
  type: 'document',
  fields: [
    defineField({
      title: 'Company',
      name: 'company',
      type: 'string',
    }),
    defineField({
      title: 'Description',
      name: 'description',
      type: 'text',
    }),
    defineField({
      title: 'End Year',
      name: 'endYear',
      type: 'number',
    }),
    defineField({
      title: 'Department',
      name: 'department',
      type: 'string',
    }),
    defineField({
      title: 'Image',
      name: 'image',
      type: 'image',
      fields: imageFields,
    }),
    defineField({
      title: 'Team',
      name: 'team',
      type: 'string',
    }),
    defineField({
      title: 'Title',
      name: 'title',
      type: 'string',
    }),
    defineField({
      title: 'Start Year',
      name: 'startYear',
      type: 'number',
    }),
  ],
  orderings: [
    {
      title: 'End Year',
      name: 'endYear',
      by: [{ field: 'endYear', direction: 'desc' }],
    },
  ],
});

export const education = defineType({
  title: 'Education',
  name: 'education',
  type: 'document',
  fields: [
    defineField({
      title: 'Degree',
      name: 'degree',
      type: 'string',
    }),
    defineField({
      title: 'Description',
      name: 'description',
      type: 'text',
    }),
    defineField({
      title: 'End Year',
      name: 'endYear',
      type: 'number',
    }),
    defineField({
      title: 'GPA',
      name: 'gpa',
      type: 'number',
    }),
    defineField({
      title: 'Image',
      name: 'image',
      type: 'image',
      fields: imageFields,
    }),
    defineField({
      title: 'Major',
      name: 'major',
      type: 'string',
    }),
    defineField({
      title: 'School',
      name: 'school',
      type: 'string',
    }),
    defineField({
      title: 'Start Year',
      name: 'startYear',
      type: 'number',
    }),
  ],
  orderings: [
    {
      title: 'End Year',
      name: 'endYear',
      by: [{ field: 'endYear', direction: 'desc' }],
    },
  ],
});
