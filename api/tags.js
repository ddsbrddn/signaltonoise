import GhostContentAPI from "@tryghost/content-api";

// Create API instance with site credentials
const api = new GhostContentAPI({
  url: 'http://localhost:2368',
  key: '143ea3806dee552e5a27292b73',
  version: "v2"
});



export async function getTags() {
  return await api.tags
    .browse({
	//   include: "tags, authors, feature_image",
	//   fields: postIndexFields,
      limit: "all"
	})

	// .then((posts) => {
	// 	posts.forEach((post) => {
	// 		console.log(post.title)
	// 	})
	// })
    .catch(err => {
      console.error(err);
    });
}

export async function getSingleTag(tagSlug) {
  return await api.tags
    .read({
      slug: tagSlug
    })
    .catch(err => {
      console.error(err);
    });
}

