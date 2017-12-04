
import {Module} from '@nestjs/common';
import { DatabaseModule } from '../../database';
import { oauthTableProviders } from './oauthTable.providers';
import { OauthtableService } from './oauthTable.service';

@Module({
    modules: [
        DatabaseModule
    ],
    components: [
        ...oauthTableProviders,
        OauthtableService
    ],
    exports: [
        OauthtableService
    ]
})
export class OauthtableModule {}
