import { Module, NestModule, MiddlewaresConsumer } from '@nestjs/common';
import { ControllersModule } from './controllers';
import { OauthMiddleware } from './oauth.middleware';

@Module({
  modules: [
    ControllersModule
  ],
  components: [],
  controllers: [],
  exports: []
})
export class ApplicationModule implements NestModule {
  configure(consumer: MiddlewaresConsumer): void {
    consumer.apply(OauthMiddleware).forRoutes({
      path: '/v1', method: 'all'
    });
  }
}