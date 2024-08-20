import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision'; 
import { schemaTypes } from './schemaTypes';
import locale from './schemaTypes/locale';
import JsonFileInput from './components/JsonFileInput';
export default defineConfig({
  name: 'default',
  title: 'My Sanity Studio',
  projectId: 'abc5you0',
  dataset: 'production',
  plugins: [deskTool(), visionTool()],
  schema: {
    types: schemaTypes, 
  },
  components: {
    input: JsonFileInput,  // optional for now
  },
});


// import {defineConfig} from 'sanity'
// import {structureTool} from 'sanity/structure'
// import {visionTool} from '@sanity/vision'
// import {schemaTypes} from './schemaTypes'

// export default defineConfig({
//   name: 'default',
//   title: 'SearchSpring_Management_Console',

//   projectId: 'abc5you0',
//   dataset: 'production',

//   plugins: [
//     structureTool(),
//     visionTool(),
//   ],

//   schema: {
//     types: schemaTypes,
//   },
// })
