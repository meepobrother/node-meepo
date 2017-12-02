
import { TasksEntry } from './tasks.entry';
import { Connection, Repository } from 'typeorm';
export const tasksProviders = [
    {
        provide: 'TasksRepositoryToken',
        useFactory: (connection: Connection) => connection.getRepository(TasksEntry),
        inject: ['DbConnectionToken'],
    },
];
