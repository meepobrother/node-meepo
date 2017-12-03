
import {Module} from '@nestjs/common';
import { DatabaseModule } from '../../database';
import { pushMsgProviders } from './pushMsg.providers';
import { PushmsgService } from './pushMsg.service';

@Module({
    modules: [
        DatabaseModule
    ],
    components: [
        ...pushMsgProviders,
        PushmsgService
    ],
    exports: [
        PushmsgService
    ]
})
export class PushmsgModule {}
