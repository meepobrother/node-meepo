
import { Controller, Get, Query, Param, Request, Response } from '@nestjs/common';
import { AddressBase } from '../core';
import { AgentService } from '../../tables/agent';
import { Util } from '../core/util';

@Controller('v1/agents')
export class AgentsCtrl extends AddressBase {
    constructor(
        public agent: AgentService
    ) {
        super();
    }

    @Get()
    getList(
        @Query('page') page,
        @Query('psize') psize
    ) {
        page = page || 0;
        psize = psize || 10;

        return this.agent.getList(page,psize);
    }
}