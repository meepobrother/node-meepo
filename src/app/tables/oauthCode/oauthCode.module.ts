
import {Module} from '@nestjs/common';
import { DatabaseModule } from '../../database';
import { oauthCodeProviders } from './oauthCode.providers';
import { OauthcodeService } from './oauthCode.service';

@Module({
    modules: [
        DatabaseModule
    ],
    components: [
        ...oauthCodeProviders,
        OauthcodeService
    ],
    exports: [
        OauthcodeService
    ]
})
export class OauthcodeModule {}
