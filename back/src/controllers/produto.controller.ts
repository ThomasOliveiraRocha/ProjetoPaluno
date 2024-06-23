import { Controller, Get, Post, Put, Delete, Body, Param, HttpException, HttpStatus } from '@nestjs/common';
import { Produto } from '../entities/produto.entity';
import { ProdutoService } from '../services/produto.service';

@Controller('produtos')
export class ProdutoController {
  constructor(private produtoService: ProdutoService) { }

  @Get()
  async getAllProdutos(): Promise<Produto[]> {
    return this.produtoService.getAllProdutos();
  }

  @Get(':id')
  async getProdutoById(@Param('id') id: number): Promise<Produto> {
    return this.produtoService.getProdutoById(id);
  }

  @Post()
  async createProduto(@Body() produto: Produto): Promise<Produto> {
    return this.produtoService.createProduto(produto);
  }

  @Put(':id')
  async updateProduto(@Param('id') id: number, @Body() produto: Produto): Promise<Produto> {
    return this.produtoService.updateProduto(id, produto);
  }

  @Delete(':id')
  async deleteProduto(@Param('id') id: number): Promise<void> {
    try {
      await this.produtoService.deleteProduto(id);
    } catch (error) {
      throw new HttpException('Não é possível excluir o produto. Ele está associado a uma venda.', HttpStatus.BAD_REQUEST);
    }
  }

}
