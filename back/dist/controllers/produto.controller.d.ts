import { Produto } from '../entities/produto.entity';
import { ProdutoService } from '../services/produto.service';
export declare class ProdutoController {
    private produtoService;
    constructor(produtoService: ProdutoService);
    getAllProdutos(): Promise<Produto[]>;
    getProdutoById(id: number): Promise<Produto>;
    createProduto(produto: Produto): Promise<Produto>;
    updateProduto(id: number, produto: Produto): Promise<Produto>;
    deleteProduto(id: number): Promise<void>;
}
