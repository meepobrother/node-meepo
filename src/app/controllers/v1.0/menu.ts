
import { Controller, Get, Query, Param, Request } from '@nestjs/common';
import { AddressBase } from '../core';

@Controller('v1/menu')
export class MenuCtrl extends AddressBase {

    constructor() {
        super();
    }
    @Get(':id')
    getMenu() {
        return 'menu';
    }
    
}