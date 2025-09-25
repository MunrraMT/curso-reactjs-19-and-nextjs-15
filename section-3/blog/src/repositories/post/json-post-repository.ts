import { resolve } from 'path';
import { readFile } from 'fs/promises';

import { PostModel } from '@/models/post/post-model';
import { PostRepository } from './post-repository';
import { getRandomIntInclusive } from '@/tools/get-random-int-inclusive';

const ROOT_DIR = process.cwd();
const JSON_POSTS_FILE_PATH = resolve(
  ROOT_DIR,
  'src',
  'db',
  'seed',
  'posts.json',
);
const MIN_SIMULATE_WAIT_IN_MS = 0;
const MAX_SIMULATE_WAIT_IN_MS = 1000;

export class JSONPostRepository implements PostRepository {
  private async simulateWait() {
    if (MAX_SIMULATE_WAIT_IN_MS <= 0) return 0;
    const timer = getRandomIntInclusive(
      MIN_SIMULATE_WAIT_IN_MS,
      MAX_SIMULATE_WAIT_IN_MS,
    );

    await new Promise((resolve) => setTimeout(resolve, timer));
  }

  private async readFromDisk(): Promise<PostModel[]> {
    await this.simulateWait();
    const JSONContent = await readFile(JSON_POSTS_FILE_PATH, 'utf-8');
    const parsedJSON = JSON.parse(JSONContent);
    return parsedJSON?.posts;
  }

  async findAll(): Promise<PostModel[]> {
    const posts = await this.readFromDisk();
    return posts;
  }

  async findById(id: string): Promise<PostModel> {
    const posts = await this.findAll();
    const post = posts.find((post) => post.id === id);
    if (!post) throw new Error('Post not found');
    return post;
  }

  async findAllPublic(): Promise<PostModel[]> {
    const posts = await this.findAll();
    const postsPublic = posts.filter((post) => post.published);
    return postsPublic;
  }

  async findBySlugPublic(slug: string): Promise<PostModel> {
    const posts = await this.findAllPublic();
    const post = posts.find((post) => post.slug === slug && post.published);
    if (!post) throw new Error('Post not found');
    return post;
  }
}
