import { Request, Response } from 'express';
import { CreateTagService } from '../services/CreateTagService';

export class CreateTagController {
  async handle(request: Request, response: Response): Promise<Response | void> {
    const { name } = request.body;
    const createTagService = new CreateTagService();

    const tag = await createTagService.execute(name);

    return response.status(201).json(tag);
  }
}
