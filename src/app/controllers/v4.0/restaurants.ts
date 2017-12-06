import { Controller, Get, Query, Param, Request } from '@nestjs/common';
import * as fetch from 'node-fetch';
import * as pinyin from 'pinyin';
import { CitiesService } from '../../tables/cities';

import { AddressBase } from '../core';
@Controller('v4/restaurants')
export class V4RestaurantsCtrl extends AddressBase {
    constructor() {
        super();
    }

    @Get()
    index() {
        return items;
    }
}

let items = {"status":0,"type":"ERROR_PARAMS","message":"经纬度参数错误"}