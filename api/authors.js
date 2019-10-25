import GhostContentAPI from "@tryghost/content-api";

// Create API instance with site credentials
const api = new GhostContentAPI({
  url: 'http://localhost:2368',
  key: '143ea3806dee552e5a27292b73',
  version: "v2"
});




export async function getAuthor(authorSlug) {
  return await api.authors
    .read({
      slug: authorSlug
    })
    .catch(err => {
      console.error(err);
    });
}
