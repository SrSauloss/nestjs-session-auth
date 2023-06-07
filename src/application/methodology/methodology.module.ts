import { Module } from '@nestjs/common'
import { MethodologyService } from './methodology.service'
import { MethodologyController } from './methodology.controller'
import { MethodologyRepository } from './methodology.repository'
import { Methodology, MethodologySchema } from './schemas/methodology.schema'
import { MongooseModule } from '@nestjs/mongoose'

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Methodology.name, schema: MethodologySchema }])
  ],
  controllers: [MethodologyController],
  providers: [MethodologyService, MethodologyRepository]
})
export class MethodologyModule {}
