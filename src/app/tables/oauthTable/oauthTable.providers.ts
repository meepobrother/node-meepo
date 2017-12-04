
import { OauthtableEntry } from './oauthTable.entry';
import { Connection, Repository } from 'typeorm';
export const oauthTableProviders = [
    {
        provide: 'OauthtableRepositoryToken',
        useFactory: (connection: Connection) => connection.getRepository(OauthtableEntry),
        inject: ['DbConnectionToken'],
    },
];
