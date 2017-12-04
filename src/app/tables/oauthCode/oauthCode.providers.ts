
import { OauthcodeEntry } from './oauthCode.entry';
import { Connection, Repository } from 'typeorm';
export const oauthCodeProviders = [
    {
        provide: 'OauthcodeRepositoryToken',
        useFactory: (connection: Connection) => connection.getRepository(OauthcodeEntry),
        inject: ['DbConnectionToken'],
    },
];
