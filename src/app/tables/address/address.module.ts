import {Module} from '@nestjs/common';
import { DatabaseModule } from '../../database';
import { addressProviders } from './address.providers';
import { AddressService } from './address.service';

@Module({
    modules: [
        DatabaseModule
    ],
    components: [
        ...addressProviders,
        AddressService
    ],
    exports: [
        AddressService
    ]
})
export class AddressModule {}
