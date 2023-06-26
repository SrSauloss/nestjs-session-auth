import { HttpException, Injectable } from '@nestjs/common'
import { UUID } from '../utils/uuid'
import { CreateContentDto } from './dto/create-content.dto'
import { UpdateContentDto } from './dto/update-content.dto'
import { ContentRepository } from './content.repository'

@Injectable()
export class ContentService {
  private readonly uuid: UUID
  constructor(private readonly contentRepository: ContentRepository) {
    this.uuid = new UUID()
  }

  async create(createContentDto: CreateContentDto) {
    try {
      const result = await this.contentRepository.create({
        ...createContentDto,
        _id: this.uuid.v4(),
        createdBy: 'admin',
        updatedBy: 'admin',
        deleted: false
      })
      return result
    } catch (error) {
      return new HttpException(error, error.status)
    }
  }

  async list(limit: number, page: number) {
    try {
      const result = await this.contentRepository.list({}, limit, page)
      if (result.count === 0) {
        throw new HttpException('No Content found', 404)
      }
      return result
    } catch (error) {
      throw new HttpException(error, error.status)
    }
  }

  async findOne(id: string) {
    try {
      const result = await this.contentRepository.findOne({ _id: id })
      if (!result) {
        throw new HttpException('Content not found', 404)
      } else {
        return result
      }
    } catch (error) {
      throw new HttpException(error, error.status)
    }
  }

  async update(_id: string, updateContentDto: UpdateContentDto) {
    try {
      const result = await this.contentRepository.findOneAndUpdate(
        { _id },
        updateContentDto
      )
      if (!result) {
        throw new HttpException('Content not found', 404)
      }
      return result
    } catch (error) {
      throw new HttpException(error, error.status)
    }
  }
  async findByType(typeOfContent: string, limit: number, page: number) {
    try {
      const result = await this.contentRepository.list(
        { typeOfContent: typeOfContent },
        limit,
        page
      )
      if (!result) {
        throw new HttpException('Content of this type not found', 404)
      }
      return result
    } catch (error) {
      throw new HttpException(error, error.status)
    }
  }

  async delete(id: string) {
    try {
      const result = await this.contentRepository.delete({ _id: id })
      if (result.deleted) {
        return result
      }
      throw new HttpException('Content not found', 404)
    } catch (error) {
      throw new HttpException(error, error.status)
    }
  }
}
