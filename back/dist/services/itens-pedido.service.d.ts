import { Repository } from 'typeorm';
import { ItensPedido } from '../entities/itens-pedido.entity';
export declare class ItensPedidoService {
    private itensPedidoRepository;
    constructor(itensPedidoRepository: Repository<ItensPedido>);
    getAllItensPedido(): Promise<ItensPedido[]>;
    getItensPedidoById(id: number): Promise<ItensPedido>;
    getItensPedidoByDate(data_now: Date): Promise<ItensPedido>;
    createItensPedido(itensPedido: ItensPedido): Promise<ItensPedido>;
    updateItensPedido(id: number, itensPedido: ItensPedido): Promise<ItensPedido>;
    deleteItensPedido(id: number): Promise<void>;
}
