import GhostContentAPI from "@tryghost/content-api";

// Create API instance with site credentials
const api = new GhostContentAPI({
  url: 'http://localhost:2368',
  key: '143ea3806dee552e5a27292b73',
  version: "v2"
});


const postIndexFields = [
  'id',
  'uuid',
  'title',
  'slug',
  'feature_image',
  'published_at',
  'html',
  'excerpt'
]

const postsPerPage = 8

export async function getPosts() {
  return await api.posts
    .browse({
	  include: "tags, authors, feature_image",
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

// Rendering a single post
export async function getSinglePost(postSlug) {
  return await api.posts
    .read({
      slug: postSlug
    })
    .catch(err => {
      console.error(err);
    });
}


export async function getAuthor(authorSlug) {
  return await api.authors
    .read({
      slug: authorSlug
    })
    .catch(err => {
      console.error(err);
    });
}



