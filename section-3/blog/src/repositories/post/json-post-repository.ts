import { PostModel } from '@/models/post/post-model';
import { PostRepository } from './post-repository';

const ROOT_DIR = process.cwd();

export class JSONPostRepository implements PostRepository {
  private async readFromDisk() {}

  async findAll(): Promise<PostModel[]> {
    return [];
  }
}

export const postRepository = new JSONPostRepository();
