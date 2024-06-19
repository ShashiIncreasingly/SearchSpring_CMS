import {
    defineType
} from 'sanity';

export default defineType({
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
            title: "New Grouped Synonym",
            type: 'string'
        },
        {
            name: 'groupSynonymsListColumnTermsLabel',
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
            name: 'columnStatusEnabled',
            title: "Enabled",
            type: 'string'
        },
        {
            name: 'columnStatusDisabled',
            title: "Disabled",
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
            title: "Removing a Synonym",
            type: 'string'
        },
        {
            name: 'deleteDialogConfirmationText',
            title: "Are you sure you want to delete this Synonym?",
            type: 'string'
        },
        {
            name: 'oneWaySynonymsListColumnSearchingforLabel',
            title: "Searching for",
            type: 'string'
        },
        {
            name: 'oneWaySynonymsListColumnAlsoFindsTheseTermsLabel',
            title: "Also Finds these Terms",
            type: 'string'
        },
        {
            name: 'oneWaySynonymsTabLabel',
            title: "One-way Synonyms",
            type: 'string'
        },
        {
            name: 'groupSynonymsTabLabel',
            title: "Grouped Synonyms",
            type: 'string'
        },
        {
            name: 'groupSynonymsCreateFormInfoTitle',
            title: "Grouped Synonyms",
            type: 'string'
        },
        {
            name: 'groupSynonymsTabPanelSubheaderLabel',
            title: "Searching for any keyword in the group returns the same results for all keywords",
            type: 'string'
        },
        {
            name: 'oneWaySynonymsTabPanelHeaderLabel',
            title: "One-way Synonyms",
            type: 'string'
        },
        {
            name: 'oneWaySynonymsTabPanelSubheaderLabel',
            title: "Searching for any keyword in the group returns the same results for all keywords",
            type: 'string'
        },
        {
            name: 'searchPlaceholder',
            title: "Search synonym",
            type: 'string'
        },
        {
            name: 'emptyListTitle',
            title: "Build Your Synonym Library",
            type: 'string'
        },
        {
            name: 'emptyListSubtitle',
            title: "Enable similar word search, and improve search behavior by adding new fields to your search management",
            type: 'string'
        },
        {
            name: 'groupedSynonymsCreateFormKeywordLabel',
            title: "Type Synonyms Here",
            type: 'string'
        },
        {
            name: 'createFormPlaceholder',
            title: "Type query here",
            type: 'string'
        },
        {
            name: 'createFormDiscardFilterButtonLabel',
            title: "Discard",
            type: 'string'
        },
        {
            name: 'groupedSynonymsCreateFormButtonLabel',
            title: "Create Grouped Synonym",
            type: 'string'
        },
        {
            name: 'groupedSynonymsCreateFormEditButtonLabel',
            title: "Edit Grouped Synonym",
            type: 'string'
        },
        {
            name: 'oneWaySynonymsCreateFormKeywordLabel',
            title: "Searching for:",
            type: 'string'
        },
        {
            name: 'oneWaySynonymsCreateFormPlaceholder',
            title: "Type query here",
            type: 'string'
        },
        {
            name: 'oneWaySynonymsCreateFormDiscardFilterButtonLabel',
            title: "Discard",
            type: 'string'
        },
        {
            name: 'oneWaySynonymsCreateFormButtonLabel',
            title: "Create One-Way Synonym",
            type: 'string'
        },
        {
            name: 'oneWaySynonymsCreateFormEditButtonLabel',
            title: "Edit One-Way Synonym",
            type: 'string'
        },
        {
            name: 'groupedSynonymsCreateEditFormNoteContent',
            title: "Changes will take effect the next time your index is updated.",
            type: 'string'
        },
        {
            name: 'groupSynonymsCreateFormTitle',
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
            name: 'createFormExampleLabel',
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
            name: 'oneWaySynonymsCreateFormTitle',
            title: "New  One-Way Synonym",
            type: 'string'
        },
        {
            name: 'oneWaySynonymsCreateFormEditTitle',
            title: "Edit  One-Way Synonym",
            type: 'string'
        },
        {
            name: 'oneWaySynonymsCreateFormOneButtonLabel',
            title: "Create One-Way Synonym",
            type: 'string'
        },
        {
            name: 'oneWaySynonymsCreateFormOneEditButtonLabel',
            title: "Create One-Way Synonym",
            type: 'string'
        },
        {
            name: 'oneWaySynonymsCreateFormOneSearchingforLabel',
            title: "Searching for:",
            type: 'string'
        },
        {
            name: 'oneWaySynonymsCreateFormOneAlsoReturnsLabel',
            title: "Also Returns Results for:",
            type: 'string'
        },
    ],
});