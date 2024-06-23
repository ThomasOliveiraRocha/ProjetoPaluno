import { Repository } from 'typeorm';
import { Produto } from '../entities/produto.entity';
export declare class ProdutoService {
    private produtoRepository;
    constructor(produtoRepository: Repository<Produto>);
    getAllProdutos(): Promise<Produto[]>;
    getProdutoById(id: number): Promise<Produto>;
    createProduto(produto: Produto): Promise<Produto>;
    updateProduto(id: number, produto: Produto): Promise<Produto>;
    deleteProduto(id: number): Promise<void>;
}
