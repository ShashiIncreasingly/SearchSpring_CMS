import {
    defineType
} from 'sanity';

export default defineType({
    name: 'breadcrumbs',
    title: 'Breadcrumbs',
    type: 'object',
    fields: [
    { name: 'search_Behavior', title: 'Search Behavior', type: 'string' },
    { name: 'background_filters', title: 'Background Filters', type: 'string' },
    { name: 'search_optimizations', title: 'Search Optimizations', type: 'string' },
    { name: 'query_replacement', title: 'Query Replacement', type: 'string' },
    { name: 'exact_match', title: 'Exact Match', type: 'string' },
    { name: 'ignore_terms', title: 'Ignore Terms', type: 'string' },
    { name: 'spell_correction_blocklist', title: 'Spell Correction Blocklist', type: 'string' }
    ],
});