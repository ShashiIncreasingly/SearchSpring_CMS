import client from "../services/sanityClient";

interface LocaleData {
  locale: string;
  value: string;
  application?: any; // Replace with appropriate type
  breadcrumbs?: any; // Replace with appropriate type
  features?: any;    // Replace with appropriate type
  form?: any;        // Replace with appropriate type
}

export async function upsertLocale(localeId: string, localeData: LocaleData) {
  try {
    if(localeId != undefined){
      const response = await client.createOrReplace({
        _id: localeId,
        _type: 'locale',
        ...localeData,
      });
      console.log('Locale document created or updated:', response);
    }
  } catch (error) {
    console.error('Error creating or updating locale document:', error);
  }
}