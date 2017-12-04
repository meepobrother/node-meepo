
import { Component, Inject } from '@nestjs/common';
import { OauthtableEntry } from './oauthTable.entry';
import { Repository } from 'typeorm';

@Component()
export class OauthtableService {
    constructor(
        @Inject('OauthtableRepositoryToken') private readonly repository: Repository<OauthtableEntry>
    ) { }
}
