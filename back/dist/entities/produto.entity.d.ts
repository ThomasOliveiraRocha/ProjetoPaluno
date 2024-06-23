import { ItensPedido } from './itens-pedido.entity';
export declare class Produto {
    id: number;
    nome: string;
    categoria: string;
    valor: number;
    itensPedido: ItensPedido[];
}
