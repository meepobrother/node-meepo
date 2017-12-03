
import { AgentEntry } from './agent.entry';
import { Connection, Repository } from 'typeorm';
export const agentProviders = [
    {
        provide: 'AgentRepositoryToken',
        useFactory: (connection: Connection) => connection.getRepository(AgentEntry),
        inject: ['DbConnectionToken'],
    },
];
