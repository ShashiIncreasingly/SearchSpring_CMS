import client from './sanityClient';

export const fetchLocaleData = async () => {
  const query = `
    *[_type == "locale"]{
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

  try {
    const data = await client.fetch(query);
    return data;
  } catch (error) {
    console.error("Error fetching locale data:", error);
    return [];
  }
};