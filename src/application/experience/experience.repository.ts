import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { EntityRepository } from '../repository/entity.repository'

import { Experience, ExperienceDocument } from './schemas/experience.schema'

@Injectable()
export class ExperienceRepository extends EntityRepository<ExperienceDocument> {
  constructor(
    @InjectModel(Experience.name)
    private readonly experienceModel: Model<ExperienceDocument>
  ) {
    super(experienceModel)
  }
}
