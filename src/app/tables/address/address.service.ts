import { Component, Inject } from '@nestjs/common';
import { AddressEntry } from './address.entry';
import { Repository } from 'typeorm';

@Component()
export class AddressService {
    constructor(
        @Inject('AddressRepositoryToken') private readonly repository: Repository<AddressEntry>
    ) { }

    async getById(id) {
        return await this.repository.findOneById(id)
    }

    async search(
        where = { uniacid: 1 },
        skip: number = 0,
        take: number = 10
    ) {
        return await this.repository.find({
            where: {
                uniacid: 1
            },
            skip: skip,
            take: take
        })
    }
}
