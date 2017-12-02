
import {Module} from '@nestjs/common';
import { DatabaseModule } from '../../database';
import { topicsProviders } from './topics.providers';
import { TopicsService } from './topics.service';

@Module({
    modules: [
        DatabaseModule
    ],
    components: [
        ...topicsProviders,
        TopicsService
    ],
    exports: [
        TopicsService
    ]
})
export class TopicsModule {}
