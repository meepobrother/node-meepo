
import { Component, Inject } from '@nestjs/common';
import { TasksEntry } from './tasks.entry';
import { Repository } from 'typeorm';

@Component()
export class TasksService {
    constructor(
        @Inject('TasksRepositoryToken') private readonly repository: Repository<TasksEntry>
    ) { }
}
