import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { MongooseModule } from '@nestjs/mongoose'
import { ExperienceModule } from '../experience/experience.module'
import { LoginGoogleModule } from '../login-google/login-google.module'
import { MethodologyModule } from '../methodology/methodology.module'
import { UserModule } from '../user/user.module'

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env'
    }),
    MongooseModule.forRoot(process.env.DATABASE_URL, {
      retryWrites: true,
      w: 'majority',
      dbName: process.env.DATABASE_NAME
    }),
    LoginGoogleModule,
    UserModule,
    MethodologyModule,
    ExperienceModule
  ]
})
export class AppModule {}
