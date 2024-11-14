import AppError from "@shared/erros/AppError";
import { Order } from "../database/entities/Orders";
import { orderRepositories } from "../database/repositories/OrderRepositories";

export class ShowOrderService {
  async execute(id: string): Promise<Order> {
    const order = await orderRepositories.findById(Number(id))
    if (!order) {
  throw new AppError ('Order not found', 404)
}

    return order
  }
}
