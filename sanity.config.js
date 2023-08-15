import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { schemaTypes } from './sanity/schemas'

const config = defineConfig({
    projectId: "6587pnwl",
    dataset: "production",
    title: "Next 13 Sanity v3 boilerplate",
    apiVersion: "2021-10-21",
    basePath: "/admin",
    plugins: [deskTool()],
    schema: {
        types: schemaTypes,
    },
})

export default config