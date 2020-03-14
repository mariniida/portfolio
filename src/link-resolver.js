export default function (doc) {
  // Return the path depending on Prismic Document's type
// If it is a Repeatable Custom Type with the API ID of "page" (must contain a UID field)
  if (doc.type === 'work') {
    return '/work/' + doc.uid;
  }

  if (doc.isBroken) {
   return '/not-found';
 }

  // Default to the root
  return '/work';
};
