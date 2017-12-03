
import {Module} from '@nestjs/common';
import { DatabaseModule } from '../../database';
import { citiesProviders } from './cities.providers';
import { CitiesService } from './cities.service';

@Module({
    modules: [
        DatabaseModule
    ],
    components: [
        ...citiesProviders,
        CitiesService
    ],
    exports: [
        CitiesService
    ]
})
export class CitiesModule {}
