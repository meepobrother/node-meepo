
import { Controller, Get, Query, Param, Request, Response } from '@nestjs/common';
import { AddressBase } from '../core';
import { CitiesService } from '../../tables/cities';
import { Util } from '../core/util';
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
        @Request() req
        ) {
        if (type == 'hot') {
            return this.service.getHots();
        } else if (type == 'group') {
            return this.service.getData();
        } else {
            try { 
                const city = await this.getCityName(req);
                const pinyin = Util.toPinyin(city);
                return this.service.cityGuess(pinyin);
            } catch (e) {
                return {
                    err: '定位失败',
                    code: 0
                };
            }
        }
    }

    // 获取所选城市信息 城市id
    @Get(':id')
    async getCityById( @Param('id') id) {
        return await this.service.getOneById(id)
    }

}
