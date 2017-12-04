
import {
    Entity, Column, PrimaryGeneratedColumn,
    OneToOne, JoinColumn
} from 'typeorm';
import { tabless } from '../../config/tables';
import { OauthmoduleEntry } from '../oauthModule';
import { OauthcodeEntry } from '../oauthCode';

@Entity(tabless['oauthManage'])
export class OauthmanageEntry {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    uniacid: number;
    @Column()
    create_time: number;

    @OneToOne(type => OauthmoduleEntry)
    @JoinColumn()
    module: number;

    @Column()
    status: number;
    @Column()
    url: string;

    @OneToOne(type => OauthcodeEntry)
    @JoinColumn()
    code: number;
}
