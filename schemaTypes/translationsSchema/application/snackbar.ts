import {
    defineType
} from 'sanity';

export default defineType({
    name: 'snackbar',
    title: 'Snackbar',
    type: 'object',
    fields: [{
            name: 'actionButtonDismiss',
            title: 'Dismiss',
            type: 'string'
        },
        {
            name: 'ActionButtonRefresh',
            title: 'Refresh',
            type: 'string'
        },
    ],
    options: {
        collapsible: true, // Enable collapsible
        collapsed: false // Whether it starts out collapsed (default is false)
    }
});