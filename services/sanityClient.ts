// import sanityClient from '@sanity/client';

// const client = sanityClient({
//   projectId: 'abc5you0', 
//   dataset: 'production',     
//   useCdn: true,   
//   token:'sk47JV9ae4yBNZUYkODke0sCsqAG0nDjXgQUwAa3fo0p5lOgo5Nql67YvcMBrrFragQyN75WZt6p1nkTygTsYIX2bLl25tRR1t9ol3QNYzg6QmYYL1musUwdLu1iKKjUBwpNdNgH8lgY9X9R4CsRYS7MiB7yWKnFpggnjvJRDtBUrauQGxjH',
// });

// export default client;



import sanityClient from '@sanity/client'

const client = sanityClient({
  projectId: 'abc5you0',   // Replace with your project ID
  dataset: 'production',   // Replace with your dataset name
  apiVersion: '2023-08-21', // Use the current date (YYYY-MM-DD) to leverage the latest API features
  token: 'skyDypFEeYMIXLeJwQ1ApEuljGtrU9RwQT6fVb6NXlegeHCedP3vT272iBiRQFB2a4DJVChTksfNGkBYFtklqu8Ojdq8YDiJvdYVVbdvsxM6FSR3kMwxqZBeraRMLRWT1iM5bbke99vONwUw3fZ4vDri7HC7XrBOI7PLYVct4UveBqbvo6FK', // Add your token here
  useCdn: false,           // `false` if you want to ensure fresh data
})

export default client;