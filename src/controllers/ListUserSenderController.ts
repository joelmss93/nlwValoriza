import { Request, Response } from 'express';
import { ListUserSenderComplimentsService } from '../services/ListUserSendComplimentsService';

export class ListUserSenderComplimentsController {
  async handle(request: Request, response: Response): Promise<Response | void> {
    const { user_id } = request;

    const listUserSendComplimentsService =
      new ListUserSenderComplimentsService();

    const compliments = await listUserSendComplimentsService.execute(user_id);

    return response.json(compliments);
  }
}
