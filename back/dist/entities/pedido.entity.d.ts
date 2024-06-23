import { Cliente } from './cliente.entity';
import { ItensPedido } from './itens-pedido.entity';
export declare class Pedido {
    id: number;
    observacao: string;
    valor_total: number;
    data_now: Date;
    cliente: Cliente;
    itensPedido: ItensPedido[];
}
