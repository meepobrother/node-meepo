import {Module} from '@nestjs/common';
import { DatabaseModule } from '../database';
@Module({
    modules: [
        DatabaseModule
    ]
})
export class TablesModule {}
