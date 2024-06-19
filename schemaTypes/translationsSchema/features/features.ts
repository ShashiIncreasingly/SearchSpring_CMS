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
                            name: 'learnMoreLink',
                            title: 'https://help.searchspring.net/hc/en-us/articles/115002210786-Background-Filters',
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
                            name: 'deleteDialogTitle',
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
                            name: 'deleteDialogActionButtonCancelLabel',
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
                                name: 'learnMoreLink',
                                title: "https://help.searchspring.net/hc/en-us/articles/206986743-Exact-Match",
                                type: 'string'
                            },
                            {
                                name: 'exactMatchListWordLabel',
                                title: "Word",
                                type: 'string'
                            },
                            {
                                name: 'exactMatchListStatusLabel',
                                title: "Status",
                                type: 'string'
                            },
                            {
                                name: 'exactMatchListStatusEnabled',
                                title: "Enabled",
                                type: 'string'
                            },
                            {
                                name: 'exactMatchListStatusDisabled',
                                title: "Disabled",
                                type: 'string'
                            },
                            {
                                name: 'exactMatchListMenuActionEditLabel',
                                title: "Edit Field",
                                type: 'string'
                            },
                            {
                                name: 'exactMatchListMenuActionDeleteLabel',
                                title: "Delete Field",
                                type: 'string'
                            },
                            {
                                name: 'emptyExactMatchListTitle',
                                title: "Build Your Exact Match Library",
                                type: 'string'
                            },
                            {
                                name: 'emptyExactMatchListSubtitle',
                                title: "Enable similar word search, and improve search behavior by adding new fields to your search management",
                                type: 'string'
                            },
                            {
                                name: "addExactMatchButtonLabel",
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
                                name: 'createFormSaveExactMatchButtonLabel',
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
                                name: 'deleteDialogTitle',
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
                            {
                                name: 'deleteDialogActionButtonCancelLabel',
                                title: "Cancel",
                                type: 'string'
                            },
                            {
                                name: 'deleteDialogActionButtonDeleteLabel',
                                title: "Confirm Delete",
                                type: 'string'
                            },
                            {
                                name: 'editFormSnackbarUpdateLabel',
                                title: "Word successfully edited",
                                type: 'string'
                            },
                            {
                                name: 'createFormErrorBannerLabel',
                                title: "Error: Something went wrong. Please wait a few minutes and retry",
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
                                name: 'pageDescription',
                                title: "Ignore Terms | Search Management Console",
                                type: 'string'
                            },
                            {
                                name: 'pageHeader',
                                title: "Ignore Terms",
                                type: 'string'
                            },
                            {
                                name: 'pageSubHeader',
                                title: "Searching for any keyword in the group returns the same results for all keywords",
                                type: 'string'
                            },
                            {
                                name: 'learnMoreLink',
                                title: "https://help.searchspring.net/hc/en-us/articles/206607636-Ignore-Terms",
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
                                name: "statusEnabled",
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
                                name: 'deleteDialogTitle',
                                title: "Confirm Delete",
                                type: 'string'
                            },
                            {
                                name: 'deleteDialogActionButtonCancelLabel',
                                title: "Cancel",
                                type: 'string'
                            },
                            {
                                name: 'deleteDialogActionButtonDeleteLabel',
                                title: "Confirm Delete",
                                type: 'string'
                            },
                            {
                                name: 'deleteDialogContentText',
                                title: "Removing a ignore term",
                                type: 'string'
                            },
                            {
                                name: 'deleteDialogConfirmationText',
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
                                name: 'createFormKeywordPlaceholder',
                                title: "Example: Shoes",
                                type: 'string'
                            },
                            {
                                name: 'createFormDiscardFilterButtonLabel',
                                title: "Discard",
                                type: 'string'
                            },
                            {
                                name: 'createFormCreateIgnoreTermsButtonLabel',
                                title: "Create Ignore Term",
                                type: 'string'
                            },
                            {
                                name: 'createFormEditIgnoreTermsButtonLabel',
                                title: "Edit Ignore Term",
                                type: 'string'
                            },
                            {
                                name: 'createFormOriginalKeywordLabel',
                                title: "Keyword",
                                type: 'string'
                            },
                            {
                                name: 'createFormNoteContent',
                                title: "Add a word for the search results to ignore",
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
                        fields: [
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
                                name: 'learnMoreLink',
                                title: "https://help.searchspring.net/hc/en-us/articles/206607646-Query-Replacement",
                                type: 'string'
                            },
                            {
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
                                name: 'listSearchQueryLabel',
                                title: "Search Query",
                                type: 'string'
                            },
                            {
                                name: 'listSearchReplacementLabel',
                                title: "Replacement",
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
                                name: 'createFormDeleteTitle',
                                title: "Confirm Delete",
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
                                name: 'createFormSnackbarSuccessLabel',
                                title: "Query replacement successfully created",
                                type: 'string'
                            },
                            {
                                name: 'editFormSnackbarSuccessLabel',
                                title: "Query replacement successfully updated",
                                type: 'string'
                            },
                            {
                                name: 'deleteDialogSnackbarSuccessLabel',
                                title: "Query replacement Deleted",
                                type: 'string'
                            },
                            {
                                name: 'deleteDialogTitle',
                                title: "Confirm Delete",
                                type: 'string'
                            },
                            {
                                name: 'deleteDialogActionButtonCancelLabel',
                                title: "Cancel",
                                type: 'string'
                            },
                            {
                                name: 'deleteDialogActionButtonDeleteLabel',
                                title: "Confirm Delete",
                                type: 'string'
                            },
                            {
                                name: 'deleteDialogContentText',
                                title: "Removing a query replacement",
                                type: 'string'
                            },
                            {
                                name: 'deleteDialogConfirmationText',
                                title: "Are you sure you want to delete this Query Replacement?",
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
                                name: 'addQueryReplacementButtonLabel',
                                title: "Add Query Replacement Rule",
                                type: 'string'
                            },
                            {
                                name: 'createFormReplacementKeywordLabel',
                                title: "Replacement Keyword",
                                type: 'string'
                            },
                            {
                                name: 'replacementStatusEnabled',
                                title: "Enabled",
                                type: 'string'
                            },
                            {
                                name: 'replacementStatusDisabled',
                                title: "Disabled",
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
                        fields: [
                            {
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
                                name: 'learnMoreLink',
                                title: "https://help.searchspring.net/hc/en-us/articles/206607636-Ignore-Terms",
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
                                name: 'deleteDialogTitle',
                                title: "Confirm Delete",
                                type: 'string'
                            },
                            {
                                name: 'deleteDialogActionButtonCancelLabel',
                                title: "Cancel",
                                type: 'string'
                            },
                            {
                                name: 'deleteDialogActionButtonDeleteLabel',
                                title: "Confirm Delete",
                                type: 'string'
                            },
                            {
                                name: 'deleteDialogContentText',
                                title: "Removing a Term",
                                type: 'string'
                            },
                            {
                                name: 'deleteDialogConfirmationText',
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
                                title: "Add Blocked Spell Correct Term",
                                type: 'string'
                            },
                            {
                                name: 'createFormEditTitle',
                                title: "Edit Blocked Spell Correct Term",
                                type: 'string'
                            },
                            {
                                name: 'createFormNote',
                                title: "Note",
                                type: 'string'
                            },
                            {
                                name: 'createFormNoteContent',
                                title: "Ignore this term when performing Integrated Spell Correction",
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
                                name: 'createFormDiscardFilterButtonLabel',
                                title: "Discard",
                                type: 'string'
                            },
                            {
                                name: 'createFormCreateSpellCorrectionBlocklistButtonLabel',
                                title: "Create Blocked Term",
                                type: 'string'
                            },
                            {
                                name: 'createFormEditSpellCorrectionBlocklistButtonLabel',
                                title: "Edit Blocked Term",
                                type: 'string'
                            },
                        ],
                        options: {
                            collapsible: true, // Enable collapsible
                            collapsed: false // Whether it starts out collapsed (default is false)
                        }
                    },
                    {
                        name: 'synonyms',
                        title: 'Synonyms',
                        type: 'object',
                        fields: [
                            {
                                name: 'pageTitle',
                                title: "Synonyms | Search Management Console",
                                type: 'string'
                            },
                            {
                                name: 'pageDescription',
                                title: "Synonyms | Search Management Console",
                                type: 'string'
                            },
                            {
                                name: 'pageHeader',
                                title: "Synonyms",
                                type: 'string'
                            },
                            {
                                name: 'pageSubHeader',
                                title: "Placeholder text for synonyms",
                                type: 'string'
                            },
                            {
                                name: 'learnMoreLink',
                                title: "https://help.searchspring.net/hc/en-us/articles/115000313766-Synonyms",
                                type: 'string'
                            },
                            {
                                name: 'createFormSnackbarSuccessLabel',
                                title: "Synonyms successfully created",
                                type: 'string'
                            },
                            {
                                name: 'editFormSnackbarSuccessLabel',
                                title: "Synonyms successfully updated",
                                type: 'string'
                            },
                            {
                                name: 'deleteDialogSnackbarSuccessLabel',
                                title: "Synonyms Deleted",
                                type: 'string'
                            },
                            {
                                name: 'oneWaySynonymsAddButtonLabel',
                                title: "New One-Way Synonyms",
                                type: 'string'
                            },
                            {
                                name: 'groupSynonymsAddButtonLabel',
                                title: "New Grouped Synonyms",
                                type: 'string'
                            },
                            {
                                name: "filterListMenuActionEditLabel",
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
                                name: 'deleteDialogDialogActionButtonLabel',
                                title: "Cancel",
                                type: 'string'
                            },
                            {
                                name: 'deleteDialogDialogActionButtonDeleteLabel',
                                title: "Confirm Delete",
                                type: 'string'
                            },
                            {
                                name: 'deleteDialogDialogContentText',
                                title: "Removing a Synonym",
                                type: 'string'
                            },
                            {
                                name: 'deleteDialogDialogConfirmationText',
                                title: "Are you sure you want to delete this Synonym?",
                                type: 'string'
                            },
                            {
                                name: 'tabLabel',
                                title: "Synonyms",
                                type: 'string'
                            },
                            {
                                name: 'listColumnTermsLabel',
                                title: "Terms",
                                type: 'string'
                            },
                            {
                                name: 'listColumnStatusLabel',
                                title: "Status",
                                type: 'string'
                            },
                            {
                                name: 'listColumnOptionsLabel',
                                title: "Options",
                                type: 'string'
                            },
                            {
                                name: 'tabPanelSubheaderLabel',
                                title: "Searching for any keyword in the group returns the same results for all keywords",
                                type: 'string'
                            },
                            {
                                name: 'tabPanelHeaderLabel',
                                title: "One-way Synonyms",
                                type: 'string'
                            },
                            {
                                name: 'searchPlaceholder',
                                title: "Search synonym",
                                type: 'string'
                            },
                            {
                                name: 'emptyGroupSynonymsListTitle',
                                title: "Build Your Synonym Library",
                                type: 'string'
                            },
                            {
                                name: 'emptyGroupSynonymsListSubtitle',
                                title: "Enable similar word search, and improve search behavior by adding new fields to your search management",
                                type: 'string'
                            },
                            {
                                name: 'createFormGroupedSynonymsKeywordLabel',
                                title: "Type Synonyms Here",
                                type: 'string'
                            },
                            {
                                name: 'createFormGroupedSynonymsPlaceholder',
                                title: "Type query here",
                                type: 'string'
                            },
                            {
                                name: 'groupedSynonymsCreateFormDiscardFilterButtonLabel',
                                title: "Discard",
                                type: 'string'
                            },
                            {
                                name: 'groupedSynonymsCreateFormCreateSynonymsButtonLabel',
                                title: "Create Grouped Synonym",
                                type: 'string'
                            },
                            {
                                name: 'createFormEditGroupedSynonymsButtonLabel',
                                title: "Edit Grouped Synonym",
                                type: 'string'
                            },
                            {
                                name: 'createFormOneWaySynonymsKeywordLabel',
                                title: "Searching for:",
                                type: 'string'
                            },
                            {
                                name: 'createFormOneWaySynonymsPlaceholder',
                                title: "Type query here",
                                type: 'string'
                            },
                            {
                                name: 'oneWaySynonymsCreateFormDiscardFilterButtonLabel',
                                title: "Discard",
                                type: 'string'
                            },
                            {
                                name: 'oneWaySynonymsCreateFormCreateSynonymsButtonLabel',
                                title: "Create One-Way Synonym",
                                type: 'string'
                            },
                            {
                                name: 'createFormEditOneWaySynonymsButtonLabel',
                                title: "Edit One-Way Synonym",
                                type: 'string'
                            },
                            {
                                name: 'groupedSynonymsCreateEditFormNoteContent',
                                title: "Changes will take effect the next time your index is updated.",
                                type: 'string'
                            },
                            {
                                name: 'groupSynonymsCreateFormCreateTitle',
                                title: "New Grouped Synonym",
                                type: 'string'
                            },
                            {
                                name: 'groupSynonymsCreateFormEditTitle',
                                title: "Edit Grouped Synonym",
                                type: 'string'
                            },
                            {
                                name: 'groupSynonymsCreateFormInfoSubTitle',
                                title: "Grouped synonyms specify equivalent keywords that will return the same results for all keywords",
                                type: 'string'
                            },
                            {
                                name: 'groupSynonymsCreateFormExampleLabel',
                                title: "Example: ",
                                type: 'string'
                            },
                            {
                                name: 'groupSynonymsCreateFormExampleContent',
                                title: "Searching for \"t-shirt\", \"crew\", \"tee\", and \"v-neck\" will all return the same results",
                                type: 'string'
                            },
                            {
                                name: 'oneWaySynonymsCreateFormInfoTitle',
                                title: "One-Way Synonym",
                                type: 'string'
                            },
                            {
                                name: 'oneWaySynonymsCreateFormInfoSubTitle',
                                title: "One way synonyms are useful for including more specific results in a broad search query",
                                type: 'string'
                            },
                            {
                                name: 'oneWaySynonymsCreateFormExampleContent',
                                title: "When searching for \"fruit\", you want to show results for \"strawberry\", \"banana\", and \"apple\", but you would not want bananas to show up when someone searches for \"apple\"",
                                type: 'string'
                            },
                            {
                                name: 'oneWaySynonymsCreateFormCreateTitle',
                                title: "New  One-Way Synonym",
                                type: 'string'
                            },
                            {
                                name: 'oneWaySynonymsCreateFormEditTitle',
                                title: "Edit  One-Way Synonym",
                                type: 'string'
                            },
                            {
                                name: 'oneWaySynonymsCreateFormCreateOneWaySynonymsButtonLabel',
                                title: "Create One-Way Synonym",
                                type: 'string'
                            },
                            {
                                name: 'oneWaySynonymsCreateFormEditOneWaySynonymsButtonLabel',
                                title: "Create One-Way Synonym",
                                type: 'string'
                            },
                            {
                                name: 'oneWaySynonymsCreateFormSearchingforLabel',
                                title: "Searching for:",
                                type: 'string'
                            },
                            {
                                name: 'oneWaySynonymsCreateFormAlsoReturnsResultsLabel',
                                title: "Also Returns Results for:",
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