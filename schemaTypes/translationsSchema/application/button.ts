import {
    defineType
} from 'sanity';

export default defineType({
    name: 'button',
    title: 'Button',
    type: 'object',
    fields: [{
        name: 'refreshLabel',
        title: 'Refresh',
        type: 'string'
    }, ],
});