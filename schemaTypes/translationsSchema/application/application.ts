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
        },
        {
            name: 'link',
            title: 'Link',
            type: 'object',
            fields: [{
                name: 'learnMoreLabel',
                title: 'Learn more',
                type: 'string'
            }, ],
            options: {
                collapsible: true, // Enable collapsible
                collapsed: false // Whether it starts out collapsed (default is false)
            }
        },
        {
            name: 'button',
            title: 'Button',
            type: 'object',
            fields: [{
                name: 'refreshLabel',
                title: 'Refresh',
                type: 'string'
            }, ],
            options: {
                collapsible: true, // Enable collapsible
                collapsed: false // Whether it starts out collapsed (default is false)
            }
        },
        {
            name: 'error',
            title: 'Error',
            type: 'object',
            fields: [{
                    name: 'network',
                    title: 'Something went wrong, please retry',
                    type: 'string'
                },
                {
                    name: 'badRequest',
                    title: 'Bad request, Please verify data and retry',
                    type: 'string'
                },
                {
                    name: 'unAuthorized',
                    title: 'Something went wrong, please refresh page',
                    type: 'string'
                },
                {
                    name: 'resourceNotFound',
                    title: 'Resource not found',
                    type: 'string'
                },
                {
                    name: 'server',
                    title: 'Something went wrong, please retry',
                    type: 'string'
                },
            ],
            options: {
                collapsible: true, // Enable collapsible
                collapsed: false // Whether it starts out collapsed (default is false)
            }
        },
        {
            name: 'success',
            title: 'Success',
            type: 'object',
            fields: [{
                name: 'genericMessage',
                title: 'Operation successful',
                type: 'string'
            }, ],
            options: {
                collapsible: true, // Enable collapsible
                collapsed: false // Whether it starts out collapsed (default is false)
            }
        },
    ],
});