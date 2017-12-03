import { Module, NestModule, MiddlewaresConsumer } from '@nestjs/common';
import { ControllersModule } from './controllers';

@Module({
  modules: [
    ControllersModule
  ],
  components: [],
  controllers: [],
  exports: []
})
export class ApplicationModule  {
}