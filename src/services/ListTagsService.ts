import { getCustomRepository } from 'typeorm';
import { TagsRepositories } from '../repositories/TagsRepositories';
import { ITag } from './CreateTagService';

export class ListTagsService {
  async execute(): Promise<ITag[] | void> {
    const tagsRepositories = getCustomRepository(TagsRepositories);

    const tags = await tagsRepositories.find();

    return tags;
  }
}
