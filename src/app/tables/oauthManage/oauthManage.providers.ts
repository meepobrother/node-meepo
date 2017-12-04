
import { OauthmanageEntry } from './oauthManage.entry';
import { Connection, Repository } from 'typeorm';
export const oauthManageProviders = [
    {
        provide: 'OauthmanageRepositoryToken',
        useFactory: (connection: Connection) => connection.getRepository(OauthmanageEntry),
        inject: ['DbConnectionToken'],
    },
];
