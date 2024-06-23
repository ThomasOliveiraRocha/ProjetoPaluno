import { Controller, Get, Post, Put, Delete, Body, Param, Query, InternalServerErrorException  } from '@nestjs/common';
import { Pedido } from '../entities/pedido.entity';
import { PedidoService } from '../services/pedido.service';
import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException } from '@nestjs/common';

@Controller('pedidos')
export class PedidoController {
  constructor(private pedidoService: PedidoService) {}

  @Get()
  async getAllPedidos(): Promise<Pedido[]> {
    return this.pedidoService.getAllPedidos();
  }

  @Get('/id/:id') // Define rota como 'pedidos/id/:id'
  async getPedidoById(@Param('id') id: number): Promise<Pedido> {
      return this.pedidoService.getPedidoById(id);
  }


  @Get('/date/:date') // Define rota como 'pedidos/date'
  async getPedidosByDate(@Query('data_now') data: Date): Promise<Pedido[]> {
      try {
          // Convertendo 'data' para um objeto Date
          console.log("Parsed")
          console.log(data)
          const pedidos = await this.pedidoService.getPedidoByDate(data);
          return pedidos;
      } catch (error) {
          console.error('Erro ao obter pedidos por data:', error);
          throw new InternalServerErrorException('Erro interno ao processar a requisição');
      }
  }

  @Post()
  async createPedido(@Body() pedido: Pedido): Promise<Pedido> {
    return this.pedidoService.createPedido(pedido);
  }

  @Put(':id')
  async updatePedido(@Param('id') id: number, @Body() pedido: Pedido): Promise<Pedido> {
    return this.pedidoService.updatePedido(id, pedido);
  }

  @Delete(':id')
  async deletePedido(@Param('id') id: number): Promise<void> {
    return this.pedidoService.deletePedido(id);
  }
}
