import {Module} from '@nestjs/common';
import { databaseProviders } from './database.prividers';

@Module({
  components: [
    databaseProviders
  ],
  exports: [
    databaseProviders
  ]
})
export class DatabaseModule {}
