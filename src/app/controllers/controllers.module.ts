import { Module } from '@nestjs/common';
import {
    PoisCtrl,
    CitiesCtrl,
    UserCtrl,
    AddressCtrl
} from './v1.0';

import { TablesModule } from '../tables';
import { DatabaseModule } from '../database';

@Module({
    controllers: [
        PoisCtrl,
        CitiesCtrl,
        UserCtrl,
        AddressCtrl
    ],
    modules: [
        TablesModule,
        DatabaseModule
    ]
})
export class ControllersModule { }
