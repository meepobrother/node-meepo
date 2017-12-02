import {Module} from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { AddressModule } from './address/address.module';

@Module({
    modules: [
        DatabaseModule,
        AddressModule
    ],
    components: [],
    exports: [
        AddressModule
    ]
})
export class TablesModule {}
