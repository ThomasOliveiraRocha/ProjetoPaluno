import { Cliente } from '../entities/cliente.entity';
import { ClienteService } from '../services/cliente.service';
export declare class ClienteController {
    private clienteService;
    constructor(clienteService: ClienteService);
    getAllClientes(): Promise<Cliente[]>;
    getClienteByCpf(cpf: string): Promise<Cliente>;
    createCliente(cliente: Cliente): Promise<Cliente>;
    updateCliente(cpf: string, cliente: Cliente): Promise<Cliente>;
    deleteCliente(cpf: string): Promise<void>;
}
