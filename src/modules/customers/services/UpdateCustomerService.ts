import AppError from "@shared/erros/AppError";
import { customerRespository } from "../database/repositories/CustomerRespositories";
import { Customer } from "../database/entities/Customer";

interface IUpdateCustomer {
  id: number;
  name: string;
  email: string;
  }

export default class UpdateCustomerService{
  async execute({id, name, email}:IUpdateCustomer): Promise<Customer> {
    const customer = await customerRespository.findById(id)

    if (!customer) {
      throw new AppError("Customer not found", 404)
    }

    const customerExists = await customerRespository.findByEmail(email)

    if (customerExists && email !== customer.email) {
      throw new AppError("There is already one customer with this email",409)
    }

    customer.name = name;
    customer.email = email

    await customerRespository.save(customer)

    return customer
  }

}
