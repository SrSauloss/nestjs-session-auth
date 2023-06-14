import { Module } from '@nestjs/common'
import { ExperienceService } from './experience.service'
import { ExperienceController } from './experience.controller'
import { ExperienceRepository } from './experience.repository'
import { Experience, ExperienceSchema } from './schemas/experience.schema'
import { MongooseModule } from '@nestjs/mongoose'

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Experience.name, schema: ExperienceSchema }])
  ],
  controllers: [ExperienceController],
  providers: [ExperienceService, ExperienceRepository]
})
export class ExperienceModule {}
