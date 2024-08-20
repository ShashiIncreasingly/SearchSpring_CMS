import sanityClient from '@sanity/client';

const client = sanityClient({
  projectId: 'abc5you0',
  dataset: 'production',
  useCdn: false, // Set to `false` to ensure fresh data
});

export default client;