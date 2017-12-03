import { Middleware, NestMiddleware, ExpressMiddleware } from '@nestjs/common';

@Middleware()
export class OauthMiddleware implements NestMiddleware {
  resolve(...args: any[]): ExpressMiddleware {
    return (req, res, next) => {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "X-Requested-With");
      res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
      res.header("X-Powered-By", ' 3.2.1');
      res.header("Content-Type", "application/json;charset=utf-8");
      next();
    };
  }
}
