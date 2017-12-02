
import { Controller, Get, Query, Param, Request } from '@nestjs/common';
import { AddressBase } from '../core';

@Controller('v1/user')
export class UserCtrl extends AddressBase {

    constructor() {
        super();
    }
    @Get('city/count')
    getUserCity() {
        return 'city/count';
    }

    
}