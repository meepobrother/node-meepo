import {Module} from '@nestjs/common';
import { PoisCtrl, CitiesCtrl } from './v1.0';

@Module({
    controllers: [
        PoisCtrl,
        CitiesCtrl
    ]
})
export class ControllersModule {}
