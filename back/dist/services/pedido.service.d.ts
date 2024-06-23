import { Repository } from 'typeorm';
import { Pedido } from '../entities/pedido.entity';
export declare class PedidoService {
    private pedidoRepository;
    constructor(pedidoRepository: Repository<Pedido>);
    getAllPedidos(): Promise<Pedido[]>;
    getPedidoById(id: number): Promise<Pedido>;
    getPedidoByDate(data: Date): Promise<Pedido[]>;
    createPedido(pedido: Pedido): Promise<Pedido>;
    updatePedido(id: number, pedido: Pedido): Promise<Pedido>;
    deletePedido(id: number): Promise<void>;
}
