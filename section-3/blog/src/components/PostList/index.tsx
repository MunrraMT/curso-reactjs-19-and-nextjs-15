import { postRepository } from '@/repositories/post';

export default async function PostList() {
  const posts = await postRepository.findAll();
  return posts.map((post) => <p key={post.id}>{post.title}</p>);
}
