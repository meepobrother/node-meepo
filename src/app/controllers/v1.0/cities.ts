
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
    async getCity( 
        @Query('type') type,
        @Request() req,
        @Response() res
    ) {
        res.header("Access-Control-Allow-Origin", "*");
        // this.service.installData();
        let cityinfo = await this.service.getGroup();
        try {
            switch (type) { 
                case 'guess':
                    //定位城市
                    const city = await this.getCityName(req);

                    break;
                case 'hot': 
                    cityinfo = await this.service.getHots();
                    break;
                case 'group':
                    cityinfo = await this.service.getGroup();
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
