
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { tabless } from '../../config/tables';

@Entity(tabless['agent'])
export class AgentEntry {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    url: string;

    @Column()
    uniacid: number;

    @Column()
    avatar: string;

    @Column()
    name: string;
    
    @Column()
    realname: string;

    @Column()
    create_time: number;

    @Column()
    area_code: string;

    @Column()
    area_id: number;

    @Column()
    mobile: string;
}
