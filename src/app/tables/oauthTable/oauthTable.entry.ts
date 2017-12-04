
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { tabless } from '../../config/tables';

@Entity(tabless['oauthTable'])
export class OauthtableEntry {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    uniacid: number;
    @Column()
    name: string;
    @Column()
    moduleId: number;
}
