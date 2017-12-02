import { AddressEntry } from './address.entry';
import { Connection, Repository } from 'typeorm';
export const addressProviders = [
    {
        provide: 'AddressRepositoryToken',
        useFactory: (connection: Connection) => connection.getRepository(AddressEntry),
        inject: ['DbConnectionToken'],
    },
];