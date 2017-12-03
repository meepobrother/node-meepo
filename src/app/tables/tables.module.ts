import {Module} from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { PushmsgModule } from './pushMsg';
import { CitiesModule } from './cities/cities.module';
import { AgentModule } from './agent/agent.module';


@Module({
    modules: [
        DatabaseModule,
        CitiesModule,
        PushmsgModule,
        AgentModule
    ],
    components: [],
    exports: [
        CitiesModule,
        PushmsgModule,
        AgentModule
    ]
})
export class TablesModule {}
