
import { Component, Inject } from '@nestjs/common';
import { ShopgoodsEntry } from './shopGoods.entry';
import { Repository } from 'typeorm';

@Component()
export class ShopgoodsService {
    constructor(
        @Inject('ShopgoodsRepositoryToken') private readonly repository: Repository<ShopgoodsEntry>
    ) { }
}
