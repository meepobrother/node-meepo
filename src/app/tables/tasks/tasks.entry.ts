
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { tabless } from '../../config/tables';

@Entity(tabless['tasks'])
export class TasksEntry {
    @PrimaryGeneratedColumn()
    id: number;
}
