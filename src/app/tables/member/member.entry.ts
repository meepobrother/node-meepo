
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { tabless } from '../../config/tables';

@Entity(tabless['member'])
export class MemberEntry {
    @PrimaryGeneratedColumn()
    id: number;
}
