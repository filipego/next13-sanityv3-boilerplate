export default {
  name: 'portfolio',
  title: 'Portfolio',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'thumbImage',
      title: 'Thumb image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'cover',
      title: 'Cover image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'clientInfo',
      title: 'Client Info',
      type: 'blockContent',
    },
    {
      name: 'client',
      title: 'Client',
      type: 'string',
    },
    {
      name: 'role',
      title: 'Role',
      type: 'array',
      of: [{ type: 'string' }]
    },

    {
      name: 'techUsed',
      title: 'Tech Used',
      type: 'array',
      of: [{ type: 'string' }]
    },
    {
      name: 'url',
      title: 'URL',
      type: 'string',
    },
    {
      name: 'videoUrl',
      title: 'Video Url',
      type: 'string',
    },
    {
      name: 'challenge',
      title: 'Challenge',
      type: 'blockContent',
    },
    {
      name: 'approach',
      title: 'Approach',
      type: 'blockContent',
    },
    {
      name: 'moreImages',
      title: 'More Images',
      type: 'array',
      of: [{ type: 'image' }]
    },
    {
      name: 'color',
      title: 'Color',
      type: 'string',
    },
  ],

  preview: {
    select: {
      title: 'title',
      media: 'cover',
    },
  },
}
