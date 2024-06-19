import {
    defineType
} from 'sanity';

export default defineType({
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
});