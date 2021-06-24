import { Repository, EntityRepository } from 'typeorm';
import { Compliment } from '../entities/Compliments';

@EntityRepository(Compliment)
export class ComplimentsRepositories extends Repository<Compliment> {}
