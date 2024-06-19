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
                    name: 'backgroundFilter',
                    title: 'Background Filter',
                    type: 'object',
                    fields: [{
                            name: 'pageTitle',
                            title: 'Background Filters | Search Management Console',
                            type: 'string'
                        },
                        {
                            name: 'pageDescription',
                            title: 'Background Filters | Search Management Console',
                            type: 'string'
                        },
                        {
                            name: 'pageHeader',
                            title: 'Background Filters',
                            type: 'string'
                        },
                        {
                            name: 'pageSubHeader',
                            title: 'Searching for any keyword in the group returns the same results for all keywords',
                            type: 'string'
                        },
                        {
                            name: 'addFilterButtonLabel',
                            title: 'Add New Filter',
                            type: 'string'
                        },
                        {
                            name: 'emptyFilterListTitle',
                            title: 'Start Creating Your Filters',
                            type: 'string'
                        },
                        {
                            name: 'emptyFilterListSubtitle',
                            title: 'Enable your products, and improve search behavior by creating background filters to your search management',
                            type: 'string'
                        },
                        {
                            name: 'createFormCreateTitle',
                            title: 'Import New Field',
                            type: 'string'
                        },
                        {
                            name: 'createFormEditTitle',
                            title: 'Edit Field',
                            type: 'string'
                        },
                        {
                            name: 'createFormQueryPlaceholder',
                            title: 'Type query here',
                            type: 'string'
                        },
                        {
                            name: 'createFormRemoveQueryFromSearchLabel',
                            title: 'Remove query from search',
                            type: 'string'
                        },
                        {
                            name: 'createFormQueryLabel',
                            title: 'Query',
                            type: 'string'
                        },
                        {
                            name: 'createFormAddFieldLabel',
                            title: 'Add new Field',
                            type: 'string'
                        },
                        {
                            name: 'createFormSaveFilterButtonLabel',
                            title: 'Save Filter',
                            type: 'string'
                        },
                        {
                            name: 'createFormDiscardChangesButtonLabel',
                            title: 'Discard Changes',
                            type: 'string'
                        },
                        {
                            name: 'createFormSelectFieldLabel',
                            title: 'Select a field',
                            type: 'string'
                        },
                        {
                            name: 'createFormFieldValueLabel',
                            title: 'Value',
                            type: 'string'
                        },
                        {
                            name: 'createFormFieldValuePlaceholder',
                            title: 'Type value',
                            type: 'string'
                        },
                        {
                            name: 'createFormFieldLabel',
                            title: 'Field',
                            type: 'string'
                        },
                        {
                            name: 'createFormAndText',
                            title: 'And',
                            type: 'string'
                        },
                        {
                            name: 'createFormErrorBannerLabel',
                            title: 'Error: Something went wrong. Please wait a few minutes and retry',
                            type: 'string'
                        },
                        {
                            name: 'snackbarSuccessLabel',
                            title: 'Filter successfully created',
                            type: 'string'
                        },
                        {
                            name: 'editFormSnackbarSuccessLabel',
                            title: 'Filter successfully updated',
                            type: 'string'
                        },
                        {
                            name: 'filterListSearchLabel',
                            title: 'Search',
                            type: 'string'
                        },
                        {
                            name: 'filterListFieldsLabel',
                            title: 'Fields',
                            type: 'string'
                        },
                        {
                            name: 'filterListRemoveQueryLabel',
                            title: 'Remove Query From Search',
                            type: 'string'
                        },
                        {
                            name: 'filterListRemoveQueryYesText',
                            title: 'Yes',
                            type: 'string'
                        },
                        {
                            name: 'filterListRemoveQueryNoText',
                            title: 'No',
                            type: 'string'
                        },
                        {
                            name: 'filterListMenuActionEditLabel',
                            title: 'Edit Field',
                            type: 'string'
                        },
                        {
                            name: 'filterListMenuActionDeleteLabel',
                            title: 'Delete Field',
                            type: 'string'
                        },
                        {
                            name: 'deleteDialogDialogTitle',
                            title: 'Confirm Delete',
                            type: 'string'
                        },
                        {
                            name: 'deleteDialogContentText',
                            title: 'Removing a background filter',
                            type: 'string'
                        },
                        {
                            name: 'deleteDialogContentConfirmationText',
                            title: 'Are you sure you want to delete this background Filter?',
                            type: 'string'
                        },
                        {
                            name: 'deleteDialogActionButtonLabel',
                            title: 'Cancel',
                            type: 'string'
                        },
                        {
                            name: 'deleteDialogActionButtonDeleteLabel',
                            title: 'Delete Filter',
                            type: 'string'
                        },
                        {
                            name: 'deleteDialogSnackbarSuccessLabel',
                            title: 'Filter Deleted',
                            type: 'string'
                        },

                    ],
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
                        type: 'object',
                        fields: [{
                                name: 'pageTitle',
                                title: "Exact Match | Search Management Console",
                                type: 'string'
                            },
                            {
                                name: 'pageDescription',
                                title: "Exact Match | Search Management Console",
                                type: 'string'
                            },
                            {
                                name: 'pageHeader',
                                title: "Exact Match",
                                type: 'string'
                            },
                            {
                                name: 'pageSubHeader',
                                title: "Searching for any keyword in the group returns the same results for all keywords",
                                type: 'string'
                            },
                            {
                                name: 'filterListWordLabel',
                                title: "Word",
                                type: 'string'
                            },
                            {
                                name: 'filterListStatusLabel',
                                title: "Status",
                                type: 'string'
                            },
                            {
                                name: 'filterListMenuActionEditLabel',
                                title: "Edit Field",
                                type: 'string'
                            },
                            {
                                name: 'filterListMenuActionDeleteLabel',
                                title: "Delete Field",
                                type: 'string'
                            },
                            {
                                name: 'emptyFilterListTitle',
                                title: "Build Your Exact Match Library",
                                type: 'string'
                            },
                            {
                                name: 'emptyFilterListSubtitle',
                                title: "Enable similar word search, and improve search behavior by adding new fields to your search management",
                                type: 'string'
                            },
                            {
                                name: "addFilterButtonLabel",
                                title: "Add Exact Match Word",
                                type: 'string'
                            },
                            {
                                name: 'editFormSnackbarSuccessLabel',
                                title: "Word sucessfully created",
                                type: 'string'
                            },
                            {
                                name: 'deleteDialogSnackbarSuccessLabel',
                                title: "Word deleted",
                                type: 'string'
                            },
                            {
                                name: 'createFormCreateTitle',
                                title: "Add Word",
                                type: 'string'
                            },
                            {
                                name: 'createFormEditTitle',
                                title: "Edit Word",
                                type: 'string'
                            },
                            {
                                name: 'createFormQueryLabel',
                                title: "Keyword",
                                type: 'string'
                            },
                            {
                                name: 'createFormAddFieldLabel',
                                title: "Create Exact Match Word",
                                type: 'string'
                            },
                            {
                                name: 'createFormDiscardChangesButtonLabel',
                                title: "Discard",
                                type: 'string'
                            },
                            {
                                name: 'createFormSaveFilterButtonLabel',
                                title: "Create Exact Match Word",
                                type: 'string'
                            },
                            {
                                name: 'createFormQueryPlaceholder',
                                title: "Example: Shoes",
                                type: 'string'
                            },
                            {
                                name: 'createFormSnackbarsuccessLabel',
                                title: "Word sucessfully created",
                                type: 'string'
                            },
                            {
                                name: 'createFormNoteTitle',
                                title: "Note:",
                                type: 'string'
                            },
                            {
                                name: 'createFormNoteText',
                                title: "  Add a replacement word like the example below to prevent the system from treating it as the same as other variations",
                                type: 'string'
                            },
                            {
                                name: 'deleteDialogDialogTitle',
                                title: "Confirm Delete",
                                type: 'string'
                            },
                            {
                                name: 'deleteDialogContentText',
                                title: "Removing a Word",
                                type: 'string'
                            },
                            {
                                name: 'deleteDialogContentConfirmationText',
                                title: "Are you sure you want to delete this Word?",
                                type: 'string'
                            },
                        ],
                        options: {
                            collapsible: true, // Enable collapsible
                            collapsed: false // Whether it starts out collapsed (default is false)
                        }
                    },
                    {
                        name: 'ignoreTems',
                        title: 'Ignore Terms',
                        type: 'object',
                        fields: [{
                                name: 'pageTitle',
                                title: "Ignore Terms | Search Management Console",
                                type: 'string'
                            },
                            {
                                name: 'pageHeader',
                                title: "Ignore Terms",
                                type: 'string'
                            },
                            {
                                name: 'createFormSnackbarSuccessLabel',
                                title: "Term successfully created",
                                type: 'string'
                            },
                            {
                                name: 'editFormSnackbarSuccessLabel',
                                title: "Term successfully updated",
                                type: 'string'
                            },
                            {
                                name: 'deleteDialogSnackbarSuccessLabel',
                                title: "Term Deleted",
                                type: 'string'
                            },
                            {
                                name: 'listWordLabel',
                                title: "Word",
                                type: 'string'
                            },
                            {
                                name: 'addIgnoreTermsButtonLabel',
                                title: "Add Ignore Term",
                                type: 'string'
                            },
                            {
                                name: 'listSearchStatusLabel',
                                title: "Status",
                                type: 'string'
                            },
                            {
                                name: 'listSearchOptionsLabel',
                                title: "Options",
                                type: 'string'
                            },
                            {
                                name: "repacementStatusEnabled",
                                title: "Enabled",
                                type: 'string'
                            },
                            {
                                name: 'statusDisabled',
                                title: "Disabled",
                                type: 'string'
                            },
                            {
                                name: 'filterListMenuActionEditLabel',
                                title: "Edit Field",
                                type: 'string'
                            },
                            {
                                name: 'filterListMenuActionDeleteLabel',
                                title: "Delete Field",
                                type: 'string'
                            },
                            {
                                name: 'deleteDialogDialogTitle',
                                title: "Confirm Delete",
                                type: 'string'
                            },
                            {
                                name: 'deleteDialogDialogContentText',
                                title: "Removing a ignore term",
                                type: 'string'
                            },
                            {
                                name: 'deleteDialogDialogConfirmationText',
                                title: "Are you sure you want to delete this Ignore Term?",
                                type: 'string'
                            },
                            {
                                name: 'createFormCreateTitle',
                                title: "Add Ignore Term",
                                type: 'string'
                            },
                            {
                                name: 'createFormEditTitle',
                                title: "Edit Ignore Term",
                                type: 'string'
                            },
                            {
                                name: 'createFormKeywordLabel',
                                title: "Keyword",
                                type: 'string'
                            },
                            {
                                name: 'createFormPlaceholder',
                                title: "Example: Shoes",
                                type: 'string'
                            },
                            {
                                name: 'discardFilterButtonLabel',
                                title: "Discard",
                                type: 'string'
                            },
                            {
                                name: 'createIgnoreTermsButtonLabel',
                                title: "Create Ignore Term",
                                type: 'string'
                            },
                            {
                                name: 'editIgnoreTermsButtonLabel',
                                title: "Edit Ignore Term",
                                type: 'string'
                            },
                            {
                                name: 'originalKeywordLabel',
                                title: "Keyword",
                                type: 'string'
                            },
                            {
                                name: 'pageSubHeader',
                                title: "Searching for any keyword in the group returns the same results for all keywords",
                                type: 'string'
                            },
                            {
                                name: 'emptyIgnoreTermsListTitle',
                                title: "Build Your Ignore Terms Library",
                                type: 'string'
                            },
                            {
                                name: 'emptyIgnoreTermsListSubtitle',
                                title: "Enable similar word search, and improve search behavior by adding new fields to your search management",
                                type: 'string'
                            },
                        ],
                        options: {
                            collapsible: true, // Enable collapsible
                            collapsed: false // Whether it starts out collapsed (default is false)
                        }
                    },
                    {
                        name: 'queryReplacement',
                        title: 'Query Replacement',
                        type: 'object',
                        fields: [{
                                name: 'addFilterButtonLabel',
                                title: "Add Query Replacement Rule",
                                type: 'string'
                            },
                            {
                                name: 'createFormCreateTitle',
                                title: "Add Query Replacement Rule",
                                type: 'string'
                            },
                            {
                                name: 'createFormEditTitle',
                                title: "Edit Query Replacement Rule",
                                type: 'string'
                            },
                            {
                                name: 'createFormOriginalKeywordLabel',
                                title: "Original Keyword",
                                type: 'string'
                            },
                            {
                                name: 'createFormOriginalReplacementPlaceholder',
                                title: "Example: Footware",
                                type: 'string'
                            },
                            {
                                name: 'createFormCreateQueryReplacementButtonLabel',
                                title: "Create Query Replacement",
                                type: 'string'
                            },
                            {
                                name: 'createFormDiscardFilterButtonLabel',
                                title: "Discard",
                                type: 'string'
                            },
                            {
                                name: 'createFormEditQueryReplacementButtonLabel',
                                title: "Edit Query Replacement",
                                type: 'string'
                            },
                            {
                                name: 'snackbarSuccessLabel',
                                title: "Query replacement successfully created",
                                type: 'string'
                            },
                            {
                                name: "noteTitle",
                                title: "Note:",
                                type: 'string'
                            },
                            {
                                name: 'noteText',
                                title: "  Add a replacement word like the example below to prevent the system from treating it as the same as other variations",
                                type: 'string'
                            },
                            {
                                name: 'pageTitle',
                                title: "Query Replacement | Search Management Console",
                                type: 'string'
                            },
                            {
                                name: 'pageDescription',
                                title: "Query Replacement | Search Management Console",
                                type: 'string'
                            },
                            {
                                name: 'pageHeader',
                                title: "Query Replacement",
                                type: 'string'
                            },
                            {
                                name: 'pageSubHeader',
                                title: "Searching for any keyword in the group returns the same results for all keywords",
                                type: 'string'
                            },
                            {
                                name: 'emptyQueryReplacementListTitle',
                                title: "Build Your Query Replacements Library",
                                type: 'string'
                            },
                            {
                                name: 'emptyQueryReplacementListSubtitle',
                                title: "Enable similar word search, and improve search behavior by adding new fields to your search management",
                                type: 'string'
                            },
                            {
                                name: 'deleteDialogSnackbarSuccessLabel',
                                title: "Query replacement Deleted",
                                type: 'string'
                            },
                            {
                                name: 'deleteDialogDialogTitle',
                                title: "Confirm Delete",
                                type: 'string'
                            },
                            {
                                name: 'deleteDialogActionButtonLabel',
                                title: "Cancel",
                                type: 'string'
                            },
                            {
                                name: 'deleteDialogActionButtonDeleteLabel',
                                title: "Confirm Delete",
                                type: 'string'
                            },
                            {
                                name: 'deleteDialogDialogContentText',
                                title: "Removing a query replacement",
                                type: 'string'
                            },
                            {
                                name: 'deleteDialogDialogConfirmationText',
                                title: "Are you sure you want to delete this Query Replacement?",
                                type: 'string'
                            },
                        ],
                        options: {
                            collapsible: true, // Enable collapsible
                            collapsed: false // Whether it starts out collapsed (default is false)
                        }
                    },
                    {
                        name: 'spellCorrectionBlocklist',
                        title: 'Spell Correction Block list',
                        type: 'object',
                        fields: [{
                                name: 'pageTitle',
                                title: "Spell Correction Blocklist | Search Management Console",
                                type: 'string'
                            },
                            {
                                name: 'pageDescription',
                                title: "Spell Correction Blocklist | Search Management Console",
                                type: 'string'
                            },
                            {
                                name: 'pageHeader',
                                title: "Spell Correction Blocklist",
                                type: 'string'
                            },
                            {
                                name: 'pageSubHeader',
                                title: "Searching for any keyword in the group returns the same results for all keywords",
                                type: 'string'
                            },
                            {
                                name: 'createFormSnackbarSuccessLabel',
                                title: "Term successfully created",
                                type: 'string'
                            },
                            {
                                name: 'editFormSnackbarSuccessLabel',
                                title: "Term successfully updated",
                                type: 'string'
                            },
                            {
                                name: 'blocklistDialogSnackbarSuccessLabel',
                                title: "Term Deleted",
                                type: 'string'
                            },
                            {
                                name: 'addSpellCorrectionBlocklistButtonLabel',
                                title: "Add Blocked Term",
                                type: 'string'
                            },
                            {
                                name: 'listWordLabel',
                                title: "Term",
                                type: 'string'
                            },
                            {
                                name: "listSearchStatusLabel",
                                title: "Status",
                                type: 'string'
                            },
                            {
                                name: 'listSearchOptionsLabel',
                                title: "Options",
                                type: 'string'
                            },
                            {
                                name: 'statusEnabled',
                                title: "Enabled",
                                type: 'string'
                            },
                            {
                                name: 'statusDisabled',
                                title: "Disabled",
                                type: 'string'
                            },
                            {
                                name: 'filterListMenuActionEditLabel',
                                title: "Edit Field",
                                type: 'string'
                            },
                            {
                                name: 'filterListMenuActionDeleteLabel',
                                title: "Delete Field",
                                type: 'string'
                            },
                            {
                                name: 'deleteDialogDialogTitle',
                                title: "Confirm Delete",
                                type: 'string'
                            },
                            {
                                name: 'deleteDialogActionButtonLabel',
                                title: "Cancel",
                                type: 'string'
                            },
                            {
                                name: 'deleteDialogActionButtonDeleteLabel',
                                title: "Confirm Delete",
                                type: 'string'
                            },
                            {
                                name: 'deleteDialogDialogContentText',
                                title: "Removing a Term",
                                type: 'string'
                            },
                            {
                                name: 'deleteDialogDialogConfirmationText',
                                title: "Are you sure you want to delete this Term?",
                                type: 'string'
                            },
                            {
                                name: 'emptySpellCorrectionBlocklistListTitle',
                                title: "Build Your Spell correction blocklist Library",
                                type: 'string'
                            },
                            {
                                name: 'emptySpellCorrectionBlocklistListSubtitle',
                                title: "Enable similar word search, and improve search behavior by adding new fields to your search management",
                                type: 'string'
                            },
                            {
                                name: 'createFormCreateTitle',
                                title: "Blocked Spell Correct Term",
                                type: 'string'
                            },
                            {
                                name: 'createFormOriginalKeywordLabel',
                                title: "Term",
                                type: 'string'
                            },
                            {
                                name: 'createFormPlaceholder',
                                title: "Example: Shoes",
                                type: 'string'
                            },
                            {
                                name: 'discardFilterButtonLabel',
                                title: "Discard",
                                type: 'string'
                            },
                            {
                                name: 'createSpellCorrectionBlocklistButtonLabel',
                                title: "Create Blocked Term",
                                type: 'string'
                            },
                            {
                                name: 'editSpellCorrectionBlocklistButtonLabel',
                                title: "Edit Blocked Term",
                                type: 'string'
                            },
                        ],
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