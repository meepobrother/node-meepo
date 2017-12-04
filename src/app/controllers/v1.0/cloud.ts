
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
    index(
        @Query('page') page,
        @Query('psize') psize,
        @Query('url') url
    ) {
        page = page || 0;
        psize = psize || 10;
        url = url || '';
        return this.manage.getMy(page, psize, url);
    }

    @Post('updateurl')
    updateUrl(
        @Body() post
    ){
        return post;
    }

    @Get('all')
    getAll(
        @Query('page') page,
        @Query('psize') psize
    ){
        page = page || 0;
        psize = psize || 10;
        return this.manage.list(page, psize);
    }

}