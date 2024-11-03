import AppError from '@shared/erros/AppError';
import { usersRepositories } from '../database/repositories/UserRepositories';
import { userTokensRepositories } from '../database/repositories/UserTokensRepositories';

interface IForgotPassword {
  email: string;
}

export default class SendForgorPasswordEmailService {
  async execute({ email }: IForgotPassword): Promise<void> {
    const user = await usersRepositories.findByEmail(email);

    if (!user) {
      throw new AppError('User not found', 404);
    }

    const token = await userTokensRepositories.generate(user.id);

    console.log(token);
  }
}