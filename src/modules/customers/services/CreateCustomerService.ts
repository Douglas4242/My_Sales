import AppError from "@shared/erros/AppError";
import { Customer } from "../database/entities/Customer";
import { customerRespository } from "../database/repositories/CustomerRespositories";

interface ICreateCustomer {
  name: string;
  email: string;
}

export default class CreateCustomerService{
  async execute({ name, email }: ICreateCustomer): Promise<Customer> {
    const emailExists = await customerRespository.findByEmail(email)

    if (emailExists) {
      throw new AppError('Email adress already used', 409)
    }

    const customer = customerRespository.create({
      name,
      email,
    })

    await customerRespository.save(customer)

    return customer
  }
}
