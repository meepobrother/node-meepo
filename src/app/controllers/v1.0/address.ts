
import { Controller, Get, Query, Param, Request } from '@nestjs/common';
import { AddressBase } from '../core';
import { AddressService } from '../../tables/address';
@Controller('v1/address')
export class AddressCtrl extends AddressBase {

    constructor(
        public address: AddressService
    ) {
        super();
    }

    @Get(':id')
    getAddressById(
        @Param('id') id
    ) {
        console.log(this.address);
        return 'city/count';
    }
}