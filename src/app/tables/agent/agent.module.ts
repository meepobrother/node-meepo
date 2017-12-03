
import {Module} from '@nestjs/common';
import { DatabaseModule } from '../../database';
import { agentProviders } from './agent.providers';
import { AgentService } from './agent.service';

@Module({
    modules: [
        DatabaseModule
    ],
    components: [
        ...agentProviders,
        AgentService
    ],
    exports: [
        AgentService
    ]
})
export class AgentModule {}
