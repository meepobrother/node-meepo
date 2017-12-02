
import { MemberEntry } from './member.entry';
import { Connection, Repository } from 'typeorm';
export const memberProviders = [
    {
        provide: 'MemberRepositoryToken',
        useFactory: (connection: Connection) => connection.getRepository(MemberEntry),
        inject: ['DbConnectionToken'],
    },
];
