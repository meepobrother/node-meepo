
import { Component, Inject } from '@nestjs/common';
import { PushmsgEntry } from './pushMsg.entry';
import { Repository } from 'typeorm';

@Component()
export class PushmsgService {
    constructor(
        @Inject('PushmsgRepositoryToken') private readonly repository: Repository<PushmsgEntry>
    ) { }
}
