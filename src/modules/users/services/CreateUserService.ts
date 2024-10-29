import AppError from '@shared/erros/AppError';
import User from '../database/entites/User';
import { usersRepositories } from '../database/repositories/UserRepositories';
import { hash } from 'bcrypt';

interface ICreateUser {
  name: string;
  email: string;
  password: string;
}

export default class CreteUserService {
  async execute({ name, email, password }: ICreateUser): Promise<User> {
    const emailExists = await usersRepositories.findByEmail(email);

    if (emailExists) {
      throw new AppError('Email adress already used', 409);
    }

    const hashedPassword = await hash(password, 10);

    const user = usersRepositories.create({
      name,
      email,
      password: hashedPassword,
    });

    await usersRepositories.save(user);

    return user;
  }
}
