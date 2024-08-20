
import { defineType } from 'sanity';
import application from './translationsSchema/application/application';
import breadcrumbs from './translationsSchema/breadcrumbs/breadcrumbs';
import features from './translationsSchema/features/features';
import form from './translationsSchema/form/form';
import JsonFileInput from '../components/JsonFileInput';

export default defineType({
  name: 'locale',
  title: 'SearchSpring Management Console Translations',
  type: 'document',
  fieldsets: [
    {
      title: 'Translations',
      name: 'translations',
      // options: { collapsible: true, collapsed: false } // Adding collapsed to control default state
    }
  ],
  fields: [
    {
      name: 'locale',
      title: 'Locale',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'value',
      title: 'Value',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'jsonFile',
      title: 'JSON File',
      type: 'file',
      options: {
        accept: '.json', // Restrict file types to JSON
      },
      components: {
        input: JsonFileInput, // Custom input component
      },
    },
    {
      name: 'application',
      title: 'Application',
      type: 'application',  // Use the imported application schema
      fieldset: 'translations',
      options: {
        collapsible: true, 
        collapsed: false   
      }
    },
    {
      name: 'breadcrumbs',
      title: 'Breadcrumbs',
      type: 'breadcrumbs',
      fieldset: 'translations', 
      options: {
        collapsible: true, 
        collapsed: true   
      }
    },
    {
      name: 'features',
      title: 'Features',
      type: 'features',
      fieldset: 'translations',
      options: {
        collapsible: true, 
        collapsed: true   
      }
    },
    {
      name: 'form',
      title: 'Form',
      type: 'form',
      fieldset: 'translations',
      options: {
        collapsible: true, 
        collapsed: true   
      }
    },
  ],
});

