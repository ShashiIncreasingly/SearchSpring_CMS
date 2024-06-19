import {
    defineType
} from 'sanity';

export default defineType({
    name: 'breadcrumbs',
    title: 'Breadcrumbs',
    type: 'object',
    fields: [
    { name: 'searchBehavior', title: 'Search Behavior', type: 'string' },
    { name: 'backgroundFilters', title: 'Background Filters', type: 'string' },
    { name: 'searchOptimizations', title: 'Search Optimizations', type: 'string' },
    { name: 'queryReplacement', title: 'Query Replacement', type: 'string' },
    { name: 'exactMatch', title: 'Exact Match', type: 'string' },
    { name: 'ignoreTerms', title: 'Ignore Terms', type: 'string' },
    { name: 'spellCorrectionBlocklist', title: 'Spell Correction Blocklist', type: 'string' }
    ],
});