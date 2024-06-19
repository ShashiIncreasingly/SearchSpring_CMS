
import locale from './locale'
import application from './translationsSchema/application/application'
import breadcrumbs from './translationsSchema/breadcrumbs/breadcrumbs'
import features from './translationsSchema/features/features'
import form from './translationsSchema/form/form'
import blockContent from './blockContent'
import button from './translationsSchema/application/button'
import error from './translationsSchema/application/error'
import link from './translationsSchema/application/link'
import snackbar from './translationsSchema/application/snackbar'
import success from './translationsSchema/application/success'
import backgroundFilters from './translationsSchema/features/searchBehavior/backgroundFilters'
import exactMatch from './translationsSchema/features/searchOptimizations/exactMatch'
import ignoreTerms from './translationsSchema/features/searchOptimizations/ignoreTerms'
import queryReplacements from './translationsSchema/features/searchOptimizations/queryReplacements'
import spellCorrectionBlocklist from './translationsSchema/features/searchOptimizations/spellCorrectionBlocklist'
import synonyms from './translationsSchema/features/searchOptimizations/synonyms'
import validationError from './translationsSchema/form/validationError'
import validationInfo from './translationsSchema/form/validationInfo'

export const schemaTypes = [
  locale,
  application,
  //Application schema started
  snackbar,
  link,
  button,
  error,
  success,
  breadcrumbs,
  //end of Application schema
  features,
  //features schema started
  backgroundFilters,
  exactMatch,
  ignoreTerms,
  queryReplacements,
  spellCorrectionBlocklist,
  synonyms,
  //end of features schema
  form,
  //form schema started
  validationError,
  validationInfo,
  //end of form schema
  blockContent
]
