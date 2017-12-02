
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { tabless } from '../../config/tables';

@Entity(tabless['category'])
export class CategoryEntry {
    @PrimaryGeneratedColumn()
    id: number;
}
