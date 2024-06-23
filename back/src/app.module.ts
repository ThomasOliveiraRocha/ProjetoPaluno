import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConnectionOptions } from 'typeorm';

import { ClienteController } from './controllers/cliente.controller';
import { PedidoController } from './controllers/pedido.controller';
import { ProdutoController } from './controllers/produto.controller';
import { ItensPedidoController } from './controllers/itens-pedido.controller';

import { ClienteService } from './services/cliente.service';
import { PedidoService } from './services/pedido.service';
import { ProdutoService } from './services/produto.service';
import { ItensPedidoService } from './services/itens-pedido.service';

import { Produto } from './entities/produto.entity';
import { Cliente } from './entities/cliente.entity';
import { Pedido } from './entities/pedido.entity';
import { ItensPedido } from './entities/itens-pedido.entity';

//PGPASSWORD=dKcygfMMeMZfHppWrsvVWEcFIwwwtsMw psql -h viaduct.proxy.rlwy.net -U postgres -p 55225 -d railway
const connectionOptions: ConnectionOptions = {
  type: 'postgres',
  host: 'viaduct.proxy.rlwy.net',
  port: 55225,
  username: 'postgres',
  password: 'dKcygfMMeMZfHppWrsvVWEcFIwwwtsMw',
  database: 'railway',
  entities: [Produto, Cliente, Pedido, ItensPedido], // Aqui é onde você irá adicionar suas entidades
  synchronize: true, // Sincroniza automaticamente as entidades com o banco de dados (apenas para desenvolvimento)
};

@Module({
  imports: [
    TypeOrmModule.forRoot(connectionOptions),
    TypeOrmModule.forFeature([Cliente, Pedido, Produto, ItensPedido]),
  ],
  controllers: [AppController, ClienteController, PedidoController, ItensPedidoController, ProdutoController],
  providers: [AppService, ClienteService, PedidoService, ItensPedidoService, ProdutoService],
})
export class AppModule {}
