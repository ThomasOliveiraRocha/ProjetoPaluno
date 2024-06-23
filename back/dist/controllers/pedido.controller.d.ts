import { Pedido } from '../entities/pedido.entity';
import { PedidoService } from '../services/pedido.service';
export declare class PedidoController {
    private pedidoService;
    constructor(pedidoService: PedidoService);
    getAllPedidos(): Promise<Pedido[]>;
    getPedidoById(id: number): Promise<Pedido>;
    getPedidosByDate(data: Date): Promise<Pedido[]>;
    createPedido(pedido: Pedido): Promise<Pedido>;
    updatePedido(id: number, pedido: Pedido): Promise<Pedido>;
    deletePedido(id: number): Promise<void>;
}
