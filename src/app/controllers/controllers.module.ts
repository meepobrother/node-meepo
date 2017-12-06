import { Module } from '@nestjs/common';

import {
    PoisCtrl,
    CitiesCtrl,
    MenuCtrl,
    AgentCtrl,
    AgentsCtrl,
    CloudCtrl,
    UserCtrl
} from './v1.0';

import {
    V2PoisCtrl,
    V2IndexEntryCtrl,
    V2RatingsCtrl,
    V2OrderCtrl
} from './v2.0';

import {
    RestaurantsCtrl,
    RestaurantCtrl,
    V2MenuCtrl    
} from './shopping';

import {
    V4RestaurantsCtrl
} from './v4.0';
import { TablesModule } from '../tables';

@Module({
    controllers: [
        PoisCtrl,
        CitiesCtrl,
        MenuCtrl,
        AgentCtrl,
        AgentsCtrl,
        CloudCtrl,
        UserCtrl,
        V2PoisCtrl,
        V2IndexEntryCtrl,
        RestaurantsCtrl,
        RestaurantCtrl,
        V2MenuCtrl,
        V2RatingsCtrl,
        V4RestaurantsCtrl,
        V2OrderCtrl
    ],
    modules: [
        TablesModule
    ]
})
export class ControllersModule { }
