import { Request, Response } from 'express';
import SendForgorPasswordEmailService from '../services/SendForgorPasswordEmailService';

export default class ForgotPasswordController {
  async create(request: Request, response: Response): Promise<Response> {
    const { email } = request.body

    const sendForgorPasswordEmailService = new SendForgorPasswordEmailService()

    await sendForgorPasswordEmailService.execute({ email })

    return response.status(204).json()
  };
}
