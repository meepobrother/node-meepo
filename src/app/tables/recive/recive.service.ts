
import { Component, Inject } from '@nestjs/common';
import { ReciveEntry } from './recive.entry';
import { Repository } from 'typeorm';

@Component()
export class ReciveService {
    constructor(
        @Inject('ReciveRepositoryToken') private readonly repository: Repository<ReciveEntry>
    ) { }
}
