import AppError from "@shared/erros/AppError";
import { customerRespository } from "../database/repositories/CustomerRespositories";

interface IDeleteCustomer {
  id:number
}

export default class DeleteCustomerService{
  async execute({ id }: IDeleteCustomer): Promise<void> {
    const customer = await customerRespository.findById(id);

    if (!customer) {
      throw new AppError('Customer not found.', 404);
    }

    await customerRespository.remove(customer);
  }
}
