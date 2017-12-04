
import { Component, Inject } from '@nestjs/common';
import { AgentEntry } from './agent.entry';
import { Repository } from 'typeorm';

@Component()
export class AgentService {
    constructor(
        @Inject('AgentRepositoryToken') private readonly repository: Repository<AgentEntry>
    ) { }

    async getAgentById(id){
        return await this.repository.findOneById(id);
    }

    async getAgentByAreaCode(area_code){
        return await this.repository.findOne({
            where: {
                area_code: area_code
            }
        })
    }

    async getAgentByCodeId(area_id){
        return await this.repository.findOne({
            where: {
                area_id: area_id
            }
        });
    }

    async getList(skip, take){
        // hask 
        return await this.repository.find({
            skip: skip,
            take: take
        });
    }
}


