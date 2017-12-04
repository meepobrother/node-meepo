import { NestFactory } from '@nestjs/core';
import * as express from 'express';
const instance = express();

instance.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  if (req.method == 'OPTIONS') {
    res.sendStatus(200);
  } else {
    next();
  }
});


import { ApplicationModule } from './app/app.module';
import { INestApplication } from '@nestjs/common/interfaces/nest-application.interface';
import { inspect } from 'util';

const app: Promise<INestApplication> = NestFactory.create(ApplicationModule, instance);

app.then(instance =>
  instance.listen(8003, () => console.log('Application is listening on port 8003'))
);

