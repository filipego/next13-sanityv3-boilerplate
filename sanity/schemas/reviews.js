export default {
    name: 'reviews',
    title: 'Reviews',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'website',
            title: 'Website Name',
            type: 'string',
        },
        {
            name: 'websiteUrl',
            title: 'Website URL',
            type: 'string',
        },
        {
            name: 'thumbImage',
            title: 'Thumb image',
            type: 'image',
        },
        {
            name: 'body',
            title: 'Body',
            type: 'blockContent',
        },
        {
            name: 'services',
            title: 'Services',
            type: 'array',
            of: [{ type: 'string' }]
        },
    ],

    preview: {
        select: {
            title: 'title',
            media: 'thumbImage',
        },
    },
}
