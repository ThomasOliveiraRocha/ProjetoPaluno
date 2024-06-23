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
exports.ItensPedidoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const itens_pedido_entity_1 = require("../entities/itens-pedido.entity");
let ItensPedidoService = exports.ItensPedidoService = class ItensPedidoService {
    constructor(itensPedidoRepository) {
        this.itensPedidoRepository = itensPedidoRepository;
    }
    async getAllItensPedido() {
        return this.itensPedidoRepository.find();
    }
    async getItensPedidoById(id) {
        return this.itensPedidoRepository.findOneBy({ id: id });
    }
    async getItensPedidoByDate(data_now) {
        return this.itensPedidoRepository.findOneBy({ data_now: data_now });
    }
    async createItensPedido(itensPedido) {
        return this.itensPedidoRepository.save(itensPedido);
    }
    async updateItensPedido(id, itensPedido) {
        await this.itensPedidoRepository.update(id, itensPedido);
        return this.itensPedidoRepository.findOneBy({ id: id });
    }
    async deleteItensPedido(id) {
        await this.itensPedidoRepository.delete(id);
    }
};
exports.ItensPedidoService = ItensPedidoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(itens_pedido_entity_1.ItensPedido)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ItensPedidoService);
//# sourceMappingURL=itens-pedido.service.js.map