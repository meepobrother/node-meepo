
import { CitiesEntry } from './cities.entry';
import { Connection, Repository } from 'typeorm';
export const citiesProviders = [
    {
        provide: 'CitiesRepositoryToken',
        useFactory: (connection: Connection) => connection.getRepository(CitiesEntry),
        inject: ['DbConnectionToken'],
    },
];
