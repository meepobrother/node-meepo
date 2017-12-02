import { Component, Inject } from '@nestjs/common';
import { AddressEntry } from './address.entry';
import { Repository } from 'typeorm';

@Component()
export class AddressService {
    constructor(
        @Inject('AddressRepositoryToken') private readonly repository: Repository<AddressEntry>
    ) { }
}
