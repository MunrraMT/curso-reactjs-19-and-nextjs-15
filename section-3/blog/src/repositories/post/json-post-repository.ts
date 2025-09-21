import { resolve } from 'path';
import { readFile } from 'fs/promises';

import { PostModel } from '@/models/post/post-model';
import { PostRepository } from './post-repository';

const ROOT_DIR = process.cwd();
const JSON_POSTS_FILE_PATH = resolve(
  ROOT_DIR,
  'src',
  'db',
  'seed',
  'posts.json',
);

export class JSONPostRepository implements PostRepository {
  private async readFromDisk(): Promise<PostModel[]> {
    const JSONContent = await readFile(JSON_POSTS_FILE_PATH, 'utf-8');
    const parsedJSON = JSON.parse(JSONContent);
    return parsedJSON?.posts;
  }

  async findAll(): Promise<PostModel[]> {
    const posts = await this.readFromDisk();
    return posts;
  }

  async findById(id: string): Promise<PostModel> {
    const posts = await this.readFromDisk();
    const post = posts.find((post) => post.id === id);
    if (!post) throw new Error('Post not find');
    return post;
  }
}
