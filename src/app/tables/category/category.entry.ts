
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { tabless } from '../../config/tables';

@Entity(tabless['category'])
export class CategoryEntry {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    uniacid: number;

    @Column()
    name: string;

    @Column()
    thumb: string;

    @Column()
    parentid: number;

    @Column()
    isrecommand: number;

    @Column()
    description: string;

    @Column()
    displayorder: number;

    @Column()
    enabled: number;

    @Column()
    ishome: number;

    @Column()
    advimg: string;

    @Column()
    advurl: string;

    @Column()
    level: number;

}
