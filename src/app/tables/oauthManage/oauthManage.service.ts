
import { Component, Inject } from '@nestjs/common';
import { OauthmanageEntry } from './oauthManage.entry';
import { Repository } from 'typeorm';

@Component()
export class OauthmanageService {
    constructor(
        @Inject('OauthmanageRepositoryToken') private readonly repository: Repository<OauthmanageEntry>
    ) { }

    async list(skip, take) {
        return await this.repository.find({
            relations: ['code', 'module'],
            skip: skip,
            take: take
        });
    }

    async getMy(skip, take, url){
        return await this.repository.find({
            where: {
                url: url
            },
            relations: ['code', 'module'],
            skip: skip,
            take: take
        });
    }
}
