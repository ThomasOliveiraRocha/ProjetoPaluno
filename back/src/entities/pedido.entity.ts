import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Cliente } from './cliente.entity';
import { ItensPedido } from './itens-pedido.entity';

@Entity()
export class Pedido {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  observacao: string;

  @Column({ type: 'float' })
  valor_total: number;

  @Column({type: 'date'})
  data_now: Date;

  @ManyToOne(() => Cliente, cliente => cliente.pedidos)
  cliente: Cliente;

  @OneToMany(() => ItensPedido, itensPedido => itensPedido.pedido)
  itensPedido: ItensPedido[];
}
