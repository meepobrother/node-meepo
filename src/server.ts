import { NestFactory } from '@nestjs/core';
import * as express from 'express';
const instance = express();
import * as cookieParser from 'cookie-parser'
import * as session from 'express-session';
// import * as config from 'config-lite';
import * as connectMongo from 'connect-mongo';


let config = {
	port: 8001,
    url: 'mongodb://localhost:27017/elm',
    session: {
        name: 'SID',
        secret: 'SID',
        cookie: {
            httpOnly: true,
            secure: false,
            maxAge: 365 * 24 * 60 * 60 * 1000,
        }
    }
}

console.log(config);

instance.all('*', (req, res, next) => {
	let origin = req.headers.origin || 'http://localhost:8000';
	res.header("Access-Control-Allow-Origin", ''+origin);
	res.header("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With");
	res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
	res.header("Access-Control-Allow-Credentials", 'true'); //可以带cookies
	res.header("X-Powered-By", '3.2.1')
	if (req.method == 'OPTIONS') {
		res.send(200);
	} else {
		next();
	}
});
instance.use(cookieParser());
instance.use(session({
	name: config.session.name,
	secret: config.session.secret,
	resave: true,
	saveUninitialized: false,
	cookie: config.session.cookie
}));
import { ApplicationModule } from './app/app.module';
import { INestApplication } from '@nestjs/common/interfaces/nest-application.interface';
import { inspect } from 'util';

const app: Promise<INestApplication> = NestFactory.create(ApplicationModule, instance);

app.then(instance =>
	instance.listen(8003, () => console.log('Application is listening on port 8003'))
);

