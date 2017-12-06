import { Controller, Get, Query, Param, Request } from '@nestjs/common';
import * as fetch from 'node-fetch';
import * as pinyin from 'pinyin';
import { CitiesService } from '../../tables/cities';

import { AddressBase } from '../core';
@Controller('v2/pois')
export class V2PoisCtrl extends AddressBase {
    constructor(
        public service: CitiesService
    ) {
        super();
    }

    // 根据经纬度详细定位 v2/pois/:geohash
    @Get(':geohash')
    async getPois( @Param('geohash') geohash) {
        const poisArr = geohash.split(',');
        console.log(poisArr);
        if (poisArr.length > 1) {
            let result = await this.getpois(poisArr[0], poisArr[1]);
            const address = {
                address: result.result.address,
                city: result.result.address_component.province,
                geohash,
                latitude: poisArr[0],
                longitude: poisArr[1],
                name: result.result.formatted_addresses.recommend,
            }
            return address;
        } else {
            return error;
        }
    }
}

let error = {"status":0,"type":"ERROR_PARAMS","message":"参数错误"};