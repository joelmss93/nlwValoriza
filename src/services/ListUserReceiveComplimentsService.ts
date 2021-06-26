import { getCustomRepository } from 'typeorm';
import { Compliment } from '../entities/Compliments';
import { ComplimentsRepositories } from '../repositories/ComplimentsRepositories';

export class ListUserReceiveComplimentsService {
  async execute(user_id: string): Promise<Compliment | void> {
    const complimentsRepositories = getCustomRepository(
      ComplimentsRepositories,
    );

    const compliments = await complimentsRepositories.findOne({
      where: {
        user_receiver: user_id,
      },
      relations: ['userSender', 'userReceiver', 'tag'],
    });

    return compliments;
  }
}
