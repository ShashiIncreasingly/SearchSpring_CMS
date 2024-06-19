import {
    defineType
} from 'sanity';

export default defineType({
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
});