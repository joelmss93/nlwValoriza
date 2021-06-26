import { Request, Response } from 'express';
import { ListUsersService } from '../services/ListUsersService';

export class ListUsersController {
  async handle(request: Request, response: Response): Promise<Response | void> {
    const listUserService = new ListUsersService();

    const users = await listUserService.execute();

    return response.status(200).json(users);
  }
}
