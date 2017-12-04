
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { tabless } from '../../config/tables';

@Entity(tabless['oauthCode'])
export class OauthcodeEntry {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    uniacid: number;
    @Column()
    create_time: number;
    @Column()
    code: string;
    @Column()
    start_time: number;
    @Column()
    end_time: number;
    @Column()
    moduleId: number;
    @Column()
    status: boolean;
    @Column()
    userId: number;
    @Column()
    manageId: number;
    @Column()
    update_time: number;
}
