import { HttpException, Injectable } from '@nestjs/common'
import { UUID } from '../utils/uuid'
import { CreateMethodologyDto } from './dto/create-methodology.dto'
import { UpdateMethodologyDto } from './dto/update-methodology.dto'
import { MethodologyRepository } from './methodology.repository'

@Injectable()
export class MethodologyService {
  private readonly uuid: UUID
  constructor(private readonly methodologyRepository: MethodologyRepository) {
    this.uuid = new UUID()
  }

  async create(createMethodologyDto: CreateMethodologyDto) {
    try {
      const result = await this.methodologyRepository.create({
        ...createMethodologyDto,
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
      const result = await this.methodologyRepository.list({}, limit, page)
      if (result.count === 0) {
        throw new HttpException('No Methodology found', 404)
      }
      return result
    } catch (error) {
      throw new HttpException(error, error.status)
    }
  }

  async findOne(id: string) {
    try {
      const result = await this.methodologyRepository.findOne({ _id: id })
      if (!result) {
        throw new HttpException('Methodology not found', 404)
      } else {
        return result
      }
    } catch (error) {
      throw new HttpException(error, error.status)
    }
  }

  async update(_id: string, updateMethodologyDto: UpdateMethodologyDto) {
    try {
      const result = await this.methodologyRepository.findOneAndUpdate(
        { _id },
        updateMethodologyDto
      )
      if (!result) {
        throw new HttpException('Methodology not found', 404)
      }
      return result
    } catch (error) {
      throw new HttpException(error, error.status)
    }
  }

  async delete(id: string) {
    try {
      const result = await this.methodologyRepository.delete({ _id: id })
      if (result.deleted) {
        return result
      }
      throw new HttpException('Methodology not found', 404)
    } catch (error) {
      throw new HttpException(error, error.status)
    }
  }
}
