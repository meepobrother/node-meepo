
import { Component, Inject } from '@nestjs/common';
import { TopicsEntry } from './topics.entry';
import { Repository } from 'typeorm';

@Component()
export class TopicsService {
    constructor(
        @Inject('TopicsRepositoryToken') private readonly repository: Repository<TopicsEntry>
    ) { }
}
