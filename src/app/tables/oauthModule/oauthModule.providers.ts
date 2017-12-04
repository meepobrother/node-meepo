
import { OauthmoduleEntry } from './oauthModule.entry';
import { Connection, Repository } from 'typeorm';
export const oauthModuleProviders = [
    {
        provide: 'OauthmoduleRepositoryToken',
        useFactory: (connection: Connection) => connection.getRepository(OauthmoduleEntry),
        inject: ['DbConnectionToken'],
    },
];
