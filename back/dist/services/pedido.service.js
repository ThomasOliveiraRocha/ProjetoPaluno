"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PedidoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const pedido_entity_1 = require("../entities/pedido.entity");
let PedidoService = exports.PedidoService = class PedidoService {
    constructor(pedidoRepository) {
        this.pedidoRepository = pedidoRepository;
    }
    async getAllPedidos() {
        return this.pedidoRepository.find();
    }
    async getPedidoById(id) {
        return this.pedidoRepository.findOneBy({ id: id });
    }
    async getPedidoByDate(data) {
        console.log("Service call");
        try {
            console.log("Find Pedido Repository");
            const pedidos = await this.pedidoRepository.find({
                where: {
                    data_now: data,
                },
            });
            return pedidos;
        }
        catch (error) {
            console.error('Erro ao buscar pedidos por data:', error);
            throw error;
        }
    }
    async createPedido(pedido) {
        return this.pedidoRepository.save(pedido);
    }
    async updatePedido(id, pedido) {
        await this.pedidoRepository.update(id, pedido);
        return this.pedidoRepository.findOneBy({ id: id });
    }
    async deletePedido(id) {
        await this.pedidoRepository.delete(id);
    }
};
exports.PedidoService = PedidoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(pedido_entity_1.Pedido)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], PedidoService);
//# sourceMappingURL=pedido.service.js.map