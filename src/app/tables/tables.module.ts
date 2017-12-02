import {Module} from '@nestjs/common';
import { DatabaseModule } from '../database';
@Module({
    modules: [
        DatabaseModule
    ],
    components: [],
    exports: []
})
export class TablesModule {}
