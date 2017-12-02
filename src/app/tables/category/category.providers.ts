
import { CategoryEntry } from './category.entry';
import { Connection, Repository } from 'typeorm';
export const categoryProviders = [
    {
        provide: 'CategoryRepositoryToken',
        useFactory: (connection: Connection) => connection.getRepository(CategoryEntry),
        inject: ['DbConnectionToken'],
    },
];
