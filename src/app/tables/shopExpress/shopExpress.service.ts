
import { Component, Inject } from '@nestjs/common';
import { ShopexpressEntry } from './shopExpress.entry';
import { Repository } from 'typeorm';

@Component()
export class ShopexpressService {
    constructor(
        @Inject('ShopexpressRepositoryToken') private readonly repository: Repository<ShopexpressEntry>
    ) { }
}
