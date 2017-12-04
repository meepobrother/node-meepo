import {Module} from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { PushmsgModule } from './pushMsg';
import { CitiesModule } from './cities/cities.module';
import { AgentModule } from './agent/agent.module';

import { OauthcodeModule } from './oauthCode';
import { OauthmanageModule } from './oauthManage';
import { OauthmoduleModule } from './oauthModule';
import { OauthtableModule } from './oauthTable';

@Module({
    modules: [
        DatabaseModule,
        CitiesModule,
        PushmsgModule,
        AgentModule,

        OauthcodeModule,
        OauthmanageModule,
        OauthmoduleModule,
        OauthtableModule
    ],
    components: [],
    exports: [
        CitiesModule,
        PushmsgModule,
        AgentModule,

        OauthcodeModule,
        OauthmanageModule,
        OauthmoduleModule,
        OauthtableModule
    ]
})
export class TablesModule {}
