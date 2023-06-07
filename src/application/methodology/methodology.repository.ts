import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { EntityRepository } from '../repository/entity.repository'

import { Methodology, MethodologyDocument } from './schemas/methodology.schema'

@Injectable()
export class MethodologyRepository extends EntityRepository<MethodologyDocument> {
  constructor(
    @InjectModel(Methodology.name)
    private readonly methodologyModel: Model<MethodologyDocument>
  ) {
    super(methodologyModel)
  }
}
