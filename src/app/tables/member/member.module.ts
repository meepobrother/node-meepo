
import {Module} from '@nestjs/common';
import { DatabaseModule } from '../../database';
import { memberProviders } from './member.providers';
import { MemberService } from './member.service';

@Module({
    modules: [
        DatabaseModule
    ],
    components: [
        ...memberProviders,
        MemberService
    ],
    exports: [
        MemberService
    ]
})
export class MemberModule {}
