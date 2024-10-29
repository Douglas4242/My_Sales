import User from '../database/entites/User';
import { usersRepositories } from '../database/repositories/UserRepositories';

export default class ListUserService {
  async execute(): Promise<User[]> {
    const users = await usersRepositories.find();
    return users;
  }
}
