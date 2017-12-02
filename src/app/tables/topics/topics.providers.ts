
import { TopicsEntry } from './topics.entry';
import { Connection, Repository } from 'typeorm';
export const topicsProviders = [
    {
        provide: 'TopicsRepositoryToken',
        useFactory: (connection: Connection) => connection.getRepository(TopicsEntry),
        inject: ['DbConnectionToken'],
    },
];
