export default function (doc) {
  // Return the path depending on Prismic Document's type
// If it is a Repeatable Custom Type with the API ID of "page" (must contain a UID field)
  if (doc.type === 'page') {
    return '/page/' + doc.uid;
  }

  if (doc.type === 'work') {
    return '/work/' + doc.uid;
  }

  // Default to the root
  return '/work';
};
