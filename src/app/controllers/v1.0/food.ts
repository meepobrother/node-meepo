
import { Controller, Get, Post, Delete, Query, Param, Request } from '@nestjs/common';
import { AddressBase } from '../core';

@Controller('v1/food')
export class FoodCtrl extends AddressBase {

    constructor() {
        super();
    }
    @Delete(':id')
    deleteFoodById() {
        return 'city/count';
    }

    @Post('update')
    updateFood() {
        return 'update'
    }
}