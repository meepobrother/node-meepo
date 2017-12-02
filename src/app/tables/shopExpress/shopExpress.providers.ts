
import { ShopexpressEntry } from './shopExpress.entry';
import { Connection, Repository } from 'typeorm';
export const shopExpressProviders = [
    {
        provide: 'ShopexpressRepositoryToken',
        useFactory: (connection: Connection) => connection.getRepository(ShopexpressEntry),
        inject: ['DbConnectionToken'],
    },
];
