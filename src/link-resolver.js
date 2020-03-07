export default function (doc) {

  if (doc.isBroken) {
  return '/not-found'
}
  // Return the path depending on Prismic Document's type
// If it is a Repeatable Custom Type with the API ID of "page" (must contain a UID field)

  if (doc.type === 'work') {
    return '/work/' + doc.uid;
  }

  return '/not-found'
};
