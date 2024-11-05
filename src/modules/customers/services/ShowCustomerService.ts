import AppError from '@shared/erros/AppError';
import { Customer } from '../database/entities/Customer';
import { customerRespository } from '../database/repositories/CustomerRespositories';

interface IShowCustomer {
  id: Number;
}

export default class ShowCustomerService {
  async execute({ id }: IShowCustomer): Promise<Customer> {
    const customer = await customerRespository.findById(id);

    if (!customer) {
      throw new AppError("Customer not found", 404)
    }

    return customer;
  }
}
