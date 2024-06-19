import {
    defineType
} from 'sanity';

export default defineType({
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
});