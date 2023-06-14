import { HttpException, Injectable } from '@nestjs/common'
import { UUID } from '../utils/uuid'
import { CreateExperienceDto } from './dto/create-experience.dto'
import { UpdateExperienceDto } from './dto/update-experience.dto'
import { ExperienceRepository } from './experience.repository'

@Injectable()
export class ExperienceService {
  private readonly uuid: UUID
  constructor(private readonly experienceRepository: ExperienceRepository) {
    this.uuid = new UUID()
  }

  async create(createExperienceDto: CreateExperienceDto) {
    try {
      const result = await this.experienceRepository.create({
        ...createExperienceDto,
        _id: this.uuid.v4(),
        createdBy: 'admin',
        updatedBy: 'admin',
        status: 'active',
        deleted: false
      })
      return result
    } catch (error) {
      return new HttpException(error, error.status)
    }
  }

  async list(limit: number, page: number) {
    try {
      const result = await this.experienceRepository.list({}, limit, page)
      if (result.count === 0) {
        throw new HttpException('No Experience found', 404)
      }
      return result
    } catch (error) {
      throw new HttpException(error, error.status)
    }
  }

  async findOne(id: string) {
    try {
      const result = await this.experienceRepository.findOne({ _id: id })
      if (!result) {
        throw new HttpException('Experience not found', 404)
      } else {
        return result
      }
    } catch (error) {
      throw new HttpException(error, error.status)
    }
  }

  async update(_id: string, updateExperienceDto: UpdateExperienceDto) {
    try {
      const result = await this.experienceRepository.findOneAndUpdate(
        { _id },
        updateExperienceDto
      )
      if (!result) {
        throw new HttpException('Experience not found', 404)
      }
      return result
    } catch (error) {
      throw new HttpException(error, error.status)
    }
  }

  async delete(id: string) {
    try {
      const result = await this.experienceRepository.delete({ _id: id })
      if (result.deleted) {
        return result
      }
      throw new HttpException('Experience not found', 404)
    } catch (error) {
      throw new HttpException(error, error.status)
    }
  }
}
