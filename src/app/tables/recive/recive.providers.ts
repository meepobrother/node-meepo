
import { ReciveEntry } from './recive.entry';
import { Connection, Repository } from 'typeorm';
export const reciveProviders = [
    {
        provide: 'ReciveRepositoryToken',
        useFactory: (connection: Connection) => connection.getRepository(ReciveEntry),
        inject: ['DbConnectionToken'],
    },
];
