
import {Module} from '@nestjs/common';
import { DatabaseModule } from '../../database';
import { oauthModuleProviders } from './oauthModule.providers';
import { OauthmoduleService } from './oauthModule.service';

@Module({
    modules: [
        DatabaseModule
    ],
    components: [
        ...oauthModuleProviders,
        OauthmoduleService
    ],
    exports: [
        OauthmoduleService
    ]
})
export class OauthmoduleModule {}
