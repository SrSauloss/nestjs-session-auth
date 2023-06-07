import { Module } from '@nestjs/common'
import { LoginGoogleService } from './login-google.service'
import { LoginGoogleController } from './login-google.controller'
import { GoogleStrategy } from './login-google.strategy'

@Module({
  controllers: [LoginGoogleController],
  providers: [LoginGoogleService, GoogleStrategy]
})
export class LoginGoogleModule {}
