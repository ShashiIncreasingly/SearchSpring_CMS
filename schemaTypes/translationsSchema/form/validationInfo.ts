import {
    defineType
} from 'sanity';

export default defineType({
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
});