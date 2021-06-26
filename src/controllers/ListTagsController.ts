import { Request, Response } from 'express';
import { ListTagsService } from '../services/ListTagsService';

export class ListTagsController {
  async handle(request: Request, response: Response): Promise<Response | void> {
    const listTagsService = new ListTagsService();

    const tags = await listTagsService.execute();

    return response.json(tags);
  }
}
