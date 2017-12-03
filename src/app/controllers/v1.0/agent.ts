
import { Controller, Get, Query, Param, Request, Response } from '@nestjs/common';
import { AddressBase } from '../core';
import { AgentService } from '../../tables/agent';
import { Util } from '../core/util';
@Controller('v1/agent')
export class AgentCtrl extends AddressBase {
    constructor(
        public agent: AgentService
    ){
        super();
    }

    @Get(':area_code')
    getArea(
        @Param('area_code') area_code
    ){
        return this.agent.getAgentByAreaCode(area_code);
    }
}