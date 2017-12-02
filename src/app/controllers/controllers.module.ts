import { Module } from '@nestjs/common';
import {
    PoisCtrl,
    CitiesCtrl,
    UserCtrl
} from './v1.0';

@Module({
    controllers: [
        PoisCtrl,
        CitiesCtrl,
        UserCtrl
    ]
})
export class ControllersModule { }
