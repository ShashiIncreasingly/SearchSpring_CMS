import {
    defineType
} from 'sanity';

export default defineType({
    name: 'features',
    title: 'Features',
    type: 'object',
    fields: [{
        name: 'search',
        title: 'Search',
        type: 'object',
        fields: [{
                name: 'searchBehavior',
                title: 'Search Behavior',
                type: 'object',
                fields: [{
                    name: 'backgroundFilters',
                    title: 'Background Filter',
                    type: 'backgroundFilters',
                    options: {
                        collapsible: true, // Enable collapsible
                        collapsed: false // Whether it starts out collapsed (default is false)
                    }
                }, ]
            },
            {
                name: 'searchOptimizations',
                title: 'Search Optimizations',
                type: 'object',
                fields: [{
                        name: 'exactMatch',
                        title: 'Exact Match',
                        type: 'exactMatch',
                        options: {
                            collapsible: true, // Enable collapsible
                            collapsed: false // Whether it starts out collapsed (default is false)
                        }
                    },
                    {
                        name: 'ignoreTems',
                        title: 'Ignore Terms',
                        type: 'ignoreTems',
                        options: {
                            collapsible: true, // Enable collapsible
                            collapsed: false // Whether it starts out collapsed (default is false)
                        }
                    },
                    {
                        name: 'queryReplacement',
                        title: 'Query Replacement',
                        type: 'queryReplacement',
                        options: {
                            collapsible: true, // Enable collapsible
                            collapsed: false // Whether it starts out collapsed (default is false)
                        }
                    },
                    {
                        name: 'spellCorrectionBlocklist',
                        title: 'Spell Correction Block list',
                        type: 'spellCorrectionBlocklist',
                        options: {
                            collapsible: true, // Enable collapsible
                            collapsed: false // Whether it starts out collapsed (default is false)
                        }
                    },
                    {
                        name: 'synonyms',
                        title: 'Synonyms',
                        type: 'synonyms',
                        options: {
                            collapsible: true, // Enable collapsible
                            collapsed: false // Whether it starts out collapsed (default is false)
                        }
                    },
                ]
            },
        ],
        options: {
            collapsible: true, // Enable collapsible
            collapsed: false // Whether it starts out collapsed (default is false)
        }
    }, ],
});