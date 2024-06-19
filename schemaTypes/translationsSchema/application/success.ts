import {
    defineType
} from 'sanity';

export default defineType({
    name: 'success',
    title: 'Success',
    type: 'object',
    fields: [{
        name: 'genericMessage',
        title: 'Operation successful',
        type: 'string'
    }, ],
});