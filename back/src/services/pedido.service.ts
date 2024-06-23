import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pedido } from '../entities/pedido.entity';

@Injectable()
export class PedidoService {
  constructor(
    @InjectRepository(Pedido)
    private pedidoRepository: Repository<Pedido>,
  ) {}

  async getAllPedidos(): Promise<Pedido[]> {
    return this.pedidoRepository.find();
  }

  async getPedidoById(id: number): Promise<Pedido> {
    return this.pedidoRepository.findOneBy({id: id});
  }  

  async getPedidoByDate(data: Date): Promise<Pedido[]> {
    console.log("Service call")
      try {
        console.log("Find Pedido Repository")
          const pedidos = await this.pedidoRepository.find({
              where: {
                  data_now: data, // Certifique-se que 'data_now' no banco é um campo do tipo Date ou equivalente
              },
          });
          return pedidos;
      } catch (error) {
          console.error('Erro ao buscar pedidos por data:', error);
          throw error;
      }
  }

  async createPedido(pedido: Pedido): Promise<Pedido> {
    return this.pedidoRepository.save(pedido);
  }

  async updatePedido(id: number, pedido: Pedido): Promise<Pedido> {
    await this.pedidoRepository.update(id, pedido);
    return this.pedidoRepository.findOneBy({id: id});
  }

  async deletePedido(id: number): Promise<void> {
    await this.pedidoRepository.delete(id);
  }
}
