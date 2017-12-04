
import { Component, Inject } from '@nestjs/common';
import { OauthcodeEntry } from './oauthCode.entry';
import { Repository } from 'typeorm';

@Component()
export class OauthcodeService {
    constructor(
        @Inject('OauthcodeRepositoryToken') private readonly repository: Repository<OauthcodeEntry>
    ) { }
}
