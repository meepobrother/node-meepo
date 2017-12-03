
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { tabless } from '../../config/tables';

@Entity(tabless['pushMsg'])
export class PushmsgEntry {
    @PrimaryGeneratedColumn()
    id: number;
}
