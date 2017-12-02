
import {Module} from '@nestjs/common';
import { DatabaseModule } from '../../database';
import { shopGoodsProviders } from './shopGoods.providers';
import { ShopgoodsService } from './shopGoods.service';

@Module({
    modules: [
        DatabaseModule
    ],
    components: [
        ...shopGoodsProviders,
        ShopgoodsService
    ],
    exports: [
        ShopgoodsService
    ]
})
export class ShopgoodsModule {}
