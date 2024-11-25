import { Request, Response } from 'express';
import ListCustomersService from '../services/ListCustomersService';
import ShowCustomerService from '../services/ShowCustomerService';
import CreateCustomerService from '../services/CreateCustomerService';
import UpdateCustomerService from '../services/UpdateCustomerService';
import DeleteCustomerService from '../services/DeleteCustomerService';

export default class CustomerControllers {
  async index(request: Request, response: Response): Promise<Response> {
    const page = parseInt(request.query.page as string) || 1;
    const limit = parseInt(request.query.limit as string) || 10;
    const listCustomers = new ListCustomersService();

    const customers = listCustomers.execute(page, limit);

    return response.json(customers);
  }

  async show(request: Request, response: Response): Promise<Response> {
    const id = Number(request.params.id);

    const showCustomer = new ShowCustomerService();

    const customer = showCustomer.execute({ id });

    return response.json(customer);
  }

  async create(request: Request, response: Response): Promise<Response> {
    const { name, email } = request.body;

    const createCostumer = new CreateCustomerService();

    const customer = await createCostumer.execute({ name, email });

    return response.json(customer);
  }

  async update(request: Request, response: Response): Promise<Response> {
    const id = Number(request.params.id);
    const { name, email } = request.body;
    const updateCustomer = new UpdateCustomerService();

    const customer = updateCustomer.execute({
      id,
      name,
      email,
    });

    return response.json(customer);
  }

  async delete(request: Request, response: Response): Promise<Response> {
    const id = Number(request.params.id);

    const deleteCustomer = new DeleteCustomerService();
    const customer = deleteCustomer.execute({ id });

    return response.status(204).json([]);
  }
}
