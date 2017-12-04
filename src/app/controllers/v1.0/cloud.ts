
import { Controller, Get, Query, Param, Request, Response, Post, Body } from '@nestjs/common';
import { AddressBase } from '../core';
import { OauthmanageService } from '../../tables';
import { Util } from '../core/util';

@Controller('v1/cloud')
export class CloudCtrl {
    constructor(
        public manage: OauthmanageService
    ) { }

    // 我的授权
    @Get()
    index( @Query('page') page, @Query('psize') psize, @Query('url') url) {
        page = page || 0;
        psize = psize || 10;
        url = url || '';
        return this.manage.getMy(page, psize, url);
    }

    @Post('updateurl')
    async updateUrl( @Body() post) {
        // 验证身份码
        let _new = post['new'];
        let mids = post['mids'];
        let ids = [];
        for (let item of mids) {
            let id = item.id;
            this.manage.updateOneUrl(_new, id);
        }
        return this.manage.getMy(0, 10, _new);
    }

    @Get('all')
    getAll(
        @Query('page') page,
        @Query('psize') psize
        ) {
        page = page || 0;
        psize = psize || 10;
        return this.manage.list(page, psize);
    }

}