"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const typeorm_1 = require("@nestjs/typeorm");
const cliente_controller_1 = require("./controllers/cliente.controller");
const pedido_controller_1 = require("./controllers/pedido.controller");
const produto_controller_1 = require("./controllers/produto.controller");
const itens_pedido_controller_1 = require("./controllers/itens-pedido.controller");
const cliente_service_1 = require("./services/cliente.service");
const pedido_service_1 = require("./services/pedido.service");
const produto_service_1 = require("./services/produto.service");
const itens_pedido_service_1 = require("./services/itens-pedido.service");
const produto_entity_1 = require("./entities/produto.entity");
const cliente_entity_1 = require("./entities/cliente.entity");
const pedido_entity_1 = require("./entities/pedido.entity");
const itens_pedido_entity_1 = require("./entities/itens-pedido.entity");
const connectionOptions = {
    type: 'postgres',
    host: 'viaduct.proxy.rlwy.net',
    port: 55225,
    username: 'postgres',
    password: 'dKcygfMMeMZfHppWrsvVWEcFIwwwtsMw',
    database: 'railway',
    entities: [produto_entity_1.Produto, cliente_entity_1.Cliente, pedido_entity_1.Pedido, itens_pedido_entity_1.ItensPedido],
    synchronize: true,
};
let AppModule = exports.AppModule = class AppModule {
};
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot(connectionOptions),
            typeorm_1.TypeOrmModule.forFeature([cliente_entity_1.Cliente, pedido_entity_1.Pedido, produto_entity_1.Produto, itens_pedido_entity_1.ItensPedido]),
        ],
        controllers: [app_controller_1.AppController, cliente_controller_1.ClienteController, pedido_controller_1.PedidoController, itens_pedido_controller_1.ItensPedidoController, produto_controller_1.ProdutoController],
        providers: [app_service_1.AppService, cliente_service_1.ClienteService, pedido_service_1.PedidoService, itens_pedido_service_1.ItensPedidoService, produto_service_1.ProdutoService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map