import { Module } from '@nestjs/common';
import {
    PoisCtrl,
    CitiesCtrl,
    UserCtrl,
    AddressCtrl
} from './v1.0';

import { TablesModule } from '../tables';

@Module({
    controllers: [
        PoisCtrl,
        CitiesCtrl,
        UserCtrl,
        AddressCtrl
    ],
    modules: [
        TablesModule
    ]
})
export class ControllersModule { }
