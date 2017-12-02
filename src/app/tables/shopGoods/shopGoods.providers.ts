
import { ShopgoodsEntry } from './shopGoods.entry';
import { Connection, Repository } from 'typeorm';
export const shopGoodsProviders = [
    {
        provide: 'ShopgoodsRepositoryToken',
        useFactory: (connection: Connection) => connection.getRepository(ShopgoodsEntry),
        inject: ['DbConnectionToken'],
    },
];
