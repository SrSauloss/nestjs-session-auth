import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { EntityRepository } from '../repository/entity.repository'

import { Content, ContentDocument } from './schemas/content.schema'

@Injectable()
export class ContentRepository extends EntityRepository<ContentDocument> {
  constructor(
    @InjectModel(Content.name)
    private readonly contentModel: Model<ContentDocument>
  ) {
    super(contentModel)
  }
}
