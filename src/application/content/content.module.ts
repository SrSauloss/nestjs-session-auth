import { Module } from '@nestjs/common'
import { ContentService } from './content.service'
import { ContentController } from './content.controller'
import { ContentRepository } from './content.repository'
import { Content, ContentSchema } from './schemas/content.schema'
import { MongooseModule } from '@nestjs/mongoose'

@Module({
  imports: [MongooseModule.forFeature([{ name: Content.name, schema: ContentSchema }])],
  controllers: [ContentController],
  providers: [ContentService, ContentRepository]
})
export class ContentModule {}
