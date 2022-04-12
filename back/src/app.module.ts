import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthModule } from './tools/auth/auth.module';
import { AccountController } from './controllers/account.controller';
import { UserService } from './services/user.service';
import { AuthenticationController } from './controllers/authentication.controller';
import { TokenRefresherMiddleware } from './middlewares/token-refresher.middleware';
import { AccountService } from './services/account.service';

@Module({
  imports: [AuthModule],
  controllers: [AuthenticationController, AccountController],
  providers: [AppService, UserService, AccountService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(TokenRefresherMiddleware)
      .exclude(
        'api/authentication/(.*)'
      )
      .forRoutes("/");
  }
}
