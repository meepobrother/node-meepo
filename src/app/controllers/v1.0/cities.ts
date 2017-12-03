
import { Controller, Get, Query, Param, Request, Response } from '@nestjs/common';
import { AddressBase } from '../core';
import { CitiesService } from '../../tables/cities';
@Controller('v1/cities')
export class CitiesCtrl extends AddressBase {

    constructor(
        public service: CitiesService
    ) {
        super();
    }
    // 获取城市列表 v1/cities
    // guess：定位城市， hot：热门城市， group：所有城市
    @Get()
    getCity( 
        @Query('type') type
    ) {
        let cityinfo = this.service.getGroup();
        return cityinfo;
    }

    // 获取所选城市信息 城市id
    @Get(':id')
    async getCityById( @Param('id') id) {
        return await this.service.getOneById(id)
    }

}
