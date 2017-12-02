import {Module} from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { AddressModule } from './address/address.module';
import { MemberModule } from './member/member.module';

@Module({
    modules: [
        DatabaseModule,
        AddressModule,
        MemberModule
    ],
    components: [],
    exports: [
        AddressModule,
        MemberModule
    ]
})
export class TablesModule {}
