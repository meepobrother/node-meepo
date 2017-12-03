import { Module } from '@nestjs/common';

import {
    PoisCtrl,
    CitiesCtrl,
    MenuCtrl,
    AgentCtrl
} from './v1.0';

import { TablesModule } from '../tables';

@Module({
    controllers: [
        PoisCtrl,
        CitiesCtrl,
        MenuCtrl,
        AgentCtrl
    ],
    modules: [
        TablesModule
    ]
})
export class ControllersModule { }
