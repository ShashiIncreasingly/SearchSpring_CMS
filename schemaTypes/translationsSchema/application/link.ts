import {
    defineType
} from 'sanity';

export default defineType({
    name: 'link',
    title: 'Link',
    type: 'object',
    fields: [{
        name: 'learnMoreLabel',
        title: 'Learn more',
        type: 'string'
    }, ],
});