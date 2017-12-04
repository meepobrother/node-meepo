
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { tabless } from '../../config/tables';

@Entity(tabless['oauthModule'])
export class OauthmoduleEntry {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    uniacid: number;
    @Column()
    create_time: number;
    @Column()
    title: string;
    @Column()
    code: string;
    @Column()
    price: number;
}
