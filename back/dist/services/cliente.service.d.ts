import { Repository } from 'typeorm';
import { Cliente } from '../entities/cliente.entity';
export declare class ClienteService {
    private clienteRepository;
    constructor(clienteRepository: Repository<Cliente>);
    getAllClientes(): Promise<Cliente[]>;
    getClienteByCpf(cpf: string): Promise<Cliente>;
    createCliente(cliente: Cliente): Promise<Cliente>;
    updateCliente(cpf: string, cliente: Cliente): Promise<Cliente>;
    deleteCliente(cpf: string): Promise<void>;
}
