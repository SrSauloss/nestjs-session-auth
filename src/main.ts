import { NestFactory } from '@nestjs/core'
import { AppModule } from './application/app/app.module'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import * as dotenv from 'dotenv'
import { resolve } from 'path'
import { SwaggerTheme, SwaggerThemeName } from 'swagger-themes'

dotenv.config({ path: resolve(__dirname, '../.env') })

export const appConfig = {
  port: process.env.PORT || 3000,
  urlDev: process.env.URL_DEV || `http://localhost:${process.env.PORT}`,
  urlProd: process.env.URL_PROD || `http://localhost:${process.env.PORT}`,
  swaggerTheme: process.env.SWAGGER_THEME || 'default',
  databaseURL: process.env.DATABASE_URL || 'mongodb://localhost:27017',
  databaseName: process.env.DATABASE_NAME || 'collabprog'
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  const config = new DocumentBuilder()
    .setTitle('CollabProg API Service')
    .setDescription('CollabProg API Documentation')
    .setVersion('1.0.0')
    .addServer(appConfig.urlDev)
    .addServer(appConfig.urlProd)
    .build()
  const document = SwaggerModule.createDocument(app, config)
  app.enableCors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204
  })
  const theme = new SwaggerTheme('v3')
  const options = {
    explorer: true,
    customCss: theme.getBuffer(appConfig.swaggerTheme as SwaggerThemeName)
  }
  SwaggerModule.setup('api', app, document, options)
  await app.listen(process.env.PORT)
}

bootstrap()
