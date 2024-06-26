import {
    defineType
} from 'sanity';

export default defineType({
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
});