import {Module} from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';

import { AddressModule } from './address/address.module';
import { MemberModule } from './member/member.module';

import { TasksModule } from './tasks/tasks.module';
import { ReciveModule } from './recive/recive.module';
import { CategoryModule } from './category/category.module';
import { TopicsModule } from './topics/topics.module';
import { ShopexpressModule } from './shopExpress/shopExpress.module';
import { CitiesModule } from './cities/cities.module';

@Module({
    modules: [
        DatabaseModule,
        AddressModule,
        MemberModule,
        TasksModule,
        ShopexpressModule,
        CitiesModule
    ],
    components: [],
    exports: [
        AddressModule,
        MemberModule,
        TasksModule,
        CitiesModule
    ]
})
export class TablesModule {}
