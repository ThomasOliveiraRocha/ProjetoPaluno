import { ItensPedido } from '../entities/itens-pedido.entity';
import { ItensPedidoService } from '../services/itens-pedido.service';
export declare class ItensPedidoController {
    private itensPedidoService;
    constructor(itensPedidoService: ItensPedidoService);
    getAllItensPedido(): Promise<ItensPedido[]>;
    getItensPedidoById(id: number): Promise<ItensPedido>;
    createItensPedido(itensPedido: ItensPedido): Promise<ItensPedido>;
    updateItensPedido(id: number, itensPedido: ItensPedido): Promise<ItensPedido>;
    deleteItensPedido(id: number): Promise<void>;
}
