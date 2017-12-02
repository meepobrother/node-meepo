
import { Controller, Get, Query, Param, Request } from '@nestjs/common';
import { AddressBase } from '../core';

@Controller('v1/address')
export class AddressCtrl extends AddressBase {

    constructor() {
        super();
    }

    @Get(':id')
    getAddressById(
        @Param('id') id
    ) {
        return 'city/count';
    }
}