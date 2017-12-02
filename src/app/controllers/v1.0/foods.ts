
import { Controller, Get, Post, Delete, Query, Param, Request } from '@nestjs/common';
import { AddressBase } from '../core';

@Controller('v1/foods')
export class FoodsCtrl extends AddressBase {

    constructor() {
        super();
    }

    @Get()
    getList(){
        return 'list'
    }

    @Get('count')
    getCount() {
        return 'city/count';
    }
}