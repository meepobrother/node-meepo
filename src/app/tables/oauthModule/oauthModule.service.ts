
import { Component, Inject } from '@nestjs/common';
import { OauthmoduleEntry } from './oauthModule.entry';
import { Repository } from 'typeorm';

@Component()
export class OauthmoduleService {
    constructor(
        @Inject('OauthmoduleRepositoryToken') private readonly repository: Repository<OauthmoduleEntry>
    ) { }
}
