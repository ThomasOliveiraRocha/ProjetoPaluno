import { Pedido } from './pedido.entity';
import { Produto } from './produto.entity';
export declare class ItensPedido {
    id: number;
    pedido: Pedido;
    produto: Produto;
    quantidade: number;
    data_now: Date;
}
