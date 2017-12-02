
import { Controller, Get, Query, Param, Request } from '@nestjs/common';
import { AddressBase } from '../core';

@Controller('v1/cities')
export class CitiesCtrl extends AddressBase {

    constructor() {
        super();
    }
    // 获取城市列表 v1/cities
    // guess：定位城市， hot：热门城市， group：所有城市
    @Get()
    async getCity(
        @Query('type') type,
        @Request() req
        ) {
        let cityinfo;
        try {
            switch (type) {
                case 'guess':
                    const city = await this.getCityName(req);
                    break;
                case 'hot':
                    break;
                case 'group':
                    break;
                default:
                    break;
            }
            return cityinfo;
        } catch (e) {
            return e;
        }
    }

    // 获取所选城市信息 城市id
    @Get(':id')
    getCityById( @Param('id') id) {
        return id;
    }
}
