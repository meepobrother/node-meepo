
import {Module} from '@nestjs/common';
import { DatabaseModule } from '../../database';
import { shopExpressProviders } from './shopExpress.providers';
import { ShopexpressService } from './shopExpress.service';

@Module({
    modules: [
        DatabaseModule
    ],
    components: [
        ...shopExpressProviders,
        ShopexpressService
    ],
    exports: [
        ShopexpressService
    ]
})
export class ShopexpressModule {}
