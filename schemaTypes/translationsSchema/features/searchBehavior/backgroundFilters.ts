import {
    defineType
} from 'sanity';

export default defineType({
    name: 'backgroundFilters',
    title: 'Background Filter',
    type: 'object',
    fields: [
        {
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
});