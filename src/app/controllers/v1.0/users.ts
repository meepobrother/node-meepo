
import { Controller, Get, Query, Param, Request } from '@nestjs/common';
import { AddressBase } from '../core';

@Controller('v1/users')
export class UsersCtrl extends AddressBase {

    constructor() {
        super();
    }
    @Get('list')
    getUsersList() {
        return 'city/count';
    }
    
}