import { Module } from '@nestjs/common';

import {
    PoisCtrl,
    CitiesCtrl,
    MenuCtrl,
    AgentCtrl,
    AgentsCtrl,
    CloudCtrl
} from './v1.0';

import { TablesModule } from '../tables';

@Module({
    controllers: [
        PoisCtrl,
        CitiesCtrl,
        MenuCtrl,
        AgentCtrl,
        AgentsCtrl,
        CloudCtrl
    ],
    modules: [
        TablesModule
    ]
})
export class ControllersModule { }
