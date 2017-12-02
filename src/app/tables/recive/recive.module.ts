
import {Module} from '@nestjs/common';
import { DatabaseModule } from '../../database';
import { reciveProviders } from './recive.providers';
import { ReciveService } from './recive.service';

@Module({
    modules: [
        DatabaseModule
    ],
    components: [
        ...reciveProviders,
        ReciveService
    ],
    exports: [
        ReciveService
    ]
})
export class ReciveModule {}
