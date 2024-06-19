import {
    defineType
} from 'sanity';

export default defineType({
    name: 'application',
    title: 'Application',
    type: 'object',
    fields: [
        {
            name: 'snackbar',
            title: 'Snackbar',
            type: 'snackbar',
            options: {
                collapsible: true, // Enable collapsible
                collapsed: false // Whether it starts out collapsed (default is false)
            }
        },
        {
            name: 'link',
            title: 'Link',
            type: 'link',
            options: {
                collapsible: true, // Enable collapsible
                collapsed: false // Whether it starts out collapsed (default is false)
            }
        },
        {
            name: 'button',
            title: 'Button',
            type: 'button',
            options: {
                collapsible: true, // Enable collapsible
                collapsed: false // Whether it starts out collapsed (default is false)
            }
        },
        {
            name: 'error',
            title: 'Error',
            type: 'error',
            options: {
                collapsible: true, // Enable collapsible
                collapsed: false // Whether it starts out collapsed (default is false)
            }
        },
        {
            name: 'success',
            title: 'Success',
            type: 'success',
            options: {
                collapsible: true, // Enable collapsible
                collapsed: false // Whether it starts out collapsed (default is false)
            }
        },
    ],
});