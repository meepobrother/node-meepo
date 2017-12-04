import {Module} from '@nestjs/common';
import { DatabaseModule } from '../../database';
import { oauthManageProviders } from './oauthManage.providers';
import { OauthmanageService } from './oauthManage.service';

@Module({
    modules: [
        DatabaseModule
    ],
    components: [
        ...oauthManageProviders,
        OauthmanageService
    ],
    exports: [
        OauthmanageService
    ]
})
export class OauthmanageModule {}
