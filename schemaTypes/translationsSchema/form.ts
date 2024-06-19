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
            type: 'object',
            fields: [{
                    name: 'invalidField',
                    title: 'Invalid field',
                    type: 'string'
                },
                {
                    name: 'minFieldError',
                    title: 'At least one field is required',
                    type: 'string'
                },
                {
                    name: 'noQuotationMarks',
                    title: 'Do not surround words with quotation marks',
                    type: 'string'
                },
                {
                    name: 'somethingWentWrong',
                    title: 'Error: Something went wrong. Please wait a few minutes and retry',
                    type: 'string'
                },
                {
                    name: 'quotationInvalidMarks',
                    title: 'Invalid field',
                    type: 'string'
                },
            ],
            options: {
                collapsible: true, // Enable collapsible
                collapsed: false // Whether it starts out collapsed (default is false)
            }
        },
        {
            name: 'validationInfo',
            title: 'Validation Info',
            type: 'object',
            fields: [{
                    name: 'note',
                    title: 'Note',
                    type: 'string'
                },
                {
                    name: 'noteContent',
                    title: `The provided keyword will be replaced in our copy of your data feed and your customers' search query. You'll be able to remove or deactivate this anytime you like.`,
                    type: 'string'
                },
            ],
            options: {
                collapsible: true, // Enable collapsible
                collapsed: false // Whether it starts out collapsed (default is false)
            }
        },
    ],
});