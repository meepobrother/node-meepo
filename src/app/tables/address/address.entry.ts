import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { tabless } from '../../config/tables';

@Entity(tabless['address'])
export class AddressEntry {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    uniacid: number;
    @Column()
    openid: string;
    @Column()
    lat: string;
    @Column()
    lng: string;
    @Column()
    poiaddress: string;
    @Column()
    poiname: string;
    @Column()
    cityname: string;
    @Column()
    detail: string;
    @Column()
    realname: string;
    @Column()
    mobile: string;
    @Column()
    create_at: number;
    @Column()
    type: number;
}



