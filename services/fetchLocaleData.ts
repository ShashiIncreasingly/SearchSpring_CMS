// import client from './sanityClient';

// export const fetchLocaleData = async (currentLocale: string) => {
//   const query = `
//     *[_type == "locale" && locale == $currentLocale]{
//       _id,
//       locale,
//       value,
//       jsonFile,
//       "application": {
//         ...application
//       },
//       "breadcrumbs": {
//         ...breadcrumbs
//       },
//       "features": {
//         ...features
//       },
//       "form": {
//         ...form
//       }
//     }
//   `;

//   const params = { currentLocale };

//   try {
//     const data = await client.fetch(query, params);
//     return data;
//   } catch (error) {
//     console.error("Error fetching locale data:", error);
//     return [];
//   }
// };

import client from './sanityClient';

export const fetchLocaleData = async (localeId: string) => {
  const query = `
    *[_type == "locale" && _id == $localeId]{
      _id,
      locale,
      value,
      jsonFile,
      "application": {
        ...application
      },
      "breadcrumbs": {
        ...breadcrumbs
      },
      "features": {
        ...features
      },
      "form": {
        ...form
      }
    }
  `;

  const params = {
    localeId,
  };

  try {
    const data = await client.fetch(query, params);
    return data;
  } catch (error) {
    console.error("Error fetching locale data:", error);
    return [];
  }
};