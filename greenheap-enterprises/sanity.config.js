import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Greenheap Enterprises',

  projectId: '9wwojjyu',
  dataset: 'greenheap-enterprises',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
