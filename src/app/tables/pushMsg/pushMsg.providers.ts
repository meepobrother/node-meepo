
import { PushmsgEntry } from './pushMsg.entry';
import { Connection, Repository } from 'typeorm';
export const pushMsgProviders = [
    {
        provide: 'PushmsgRepositoryToken',
        useFactory: (connection: Connection) => connection.getRepository(PushmsgEntry),
        inject: ['DbConnectionToken'],
    },
];
