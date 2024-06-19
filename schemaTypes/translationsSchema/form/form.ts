import {
    defineType
} from 'sanity';

export default defineType({
    name: 'form',
    title: 'Form',
    type: 'object',
    fields: [{
            name: 'validationError',
            title: 'Validation Error',
            type: 'validationError',
            options: {
                collapsible: true, // Enable collapsible
                collapsed: false // Whether it starts out collapsed (default is false)
            }
        },
        {
            name: 'validationInfo',
            title: 'Validation Info',
            type: 'validationInfo',
            options: {
                collapsible: true, // Enable collapsible
                collapsed: false // Whether it starts out collapsed (default is false)
            }
        },
    ],
});