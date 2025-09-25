import { cache } from 'react';

import { postRepository } from '@/repositories/post';

export const findAllPublicPostsCached = cache(
  async () => await postRepository.findAllPublic(),
);

export const findBySlugPublicPostsCached = cache(
  async (slug: string) => await postRepository.findBySlugPublic(slug),
);
