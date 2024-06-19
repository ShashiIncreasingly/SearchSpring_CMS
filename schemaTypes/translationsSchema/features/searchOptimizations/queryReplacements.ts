import {
    defineType
} from 'sanity';

export default defineType({
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
});