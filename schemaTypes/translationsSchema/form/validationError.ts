import {
    defineType
} from 'sanity';

export default defineType({
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
});