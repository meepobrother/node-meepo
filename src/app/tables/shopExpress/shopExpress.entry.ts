
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { tabless } from '../../config/tables';

@Entity(tabless['shopExpress'])
export class ShopexpressEntry {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    uniacid: number;

    @Column()
    express_name: string;

    @Column()
    displayorder: number;

    @Column()
    express_price: string;

    @Column()
    express_area: string;

    @Column()
    express_url: string;
}
