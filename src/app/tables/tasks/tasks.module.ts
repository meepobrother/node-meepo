
import {Module} from '@nestjs/common';
import { DatabaseModule } from '../../database';
import { tasksProviders } from './tasks.providers';
import { TasksService } from './tasks.service';

@Module({
    modules: [
        DatabaseModule
    ],
    components: [
        ...tasksProviders,
        TasksService
    ],
    exports: [
        TasksService
    ]
})
export class TasksModule {}
