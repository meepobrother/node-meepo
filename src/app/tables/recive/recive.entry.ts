
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { tabless } from '../../config/tables';

@Entity(tabless['recive'])
export class ReciveEntry {
    @PrimaryGeneratedColumn()
    id: number;
}
