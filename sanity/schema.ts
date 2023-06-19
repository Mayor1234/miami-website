import { type SchemaTypeDefinition } from 'sanity';

import comment from './schemas/comment';

import blockContent from './schemas/blockContent';
import category from './schemas/category';
import post from './schemas/post';
import author from './schemas/author';
import user from './schemas/user';
import youtube from './schemas/youtube';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, author, category, comment, blockContent, youtube, user],
};
