import { JSONPostRepository } from './json-post-repository';
import { PostRepository } from './post-repository';

export const postRepository: PostRepository = new JSONPostRepository();

// (async () => {
//   const posts = await postRepository.findAll();
//   const post = await postRepository.findById(posts[0].id);
//   console.log(post);
// })();
