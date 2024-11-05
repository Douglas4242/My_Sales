import { Customer } from "../database/entities/Customer";
import { customerRespository } from "../database/repositories/CustomerRespositories";

export default class ListCustomersService {
  async execute(): Promise<Customer[]>{
    const customers = customerRespository.find()

    return customers
  }
}
