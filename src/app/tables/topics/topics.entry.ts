
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { tabless } from '../../config/tables';

@Entity(tabless['topics'])
export class TopicsEntry {
    @PrimaryGeneratedColumn()
    id: number;
}
