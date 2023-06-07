import { HttpException, Injectable } from '@nestjs/common'
import { UUID } from '../utils/uuid'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { UserRepository } from './user.repository'

@Injectable()
export class UserService {
  private readonly uuid: UUID
  constructor(private readonly userRepository: UserRepository) {
    this.uuid = new UUID()
  }

  async create(createUserDto: CreateUserDto) {
    try {
      const result = await this.userRepository.create({
        ...createUserDto,
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
      const result = await this.userRepository.list({}, limit, page)
      if (result.count === 0) {
        throw new HttpException('No User found', 404)
      }
      return result
    } catch (error) {
      throw new HttpException(error, error.status)
    }
  }

  async findOne(id: string) {
    try {
      const result = await this.userRepository.findOne({ _id: id })
      if (!result) {
        throw new HttpException('User not found', 404)
      } else {
        return result
      }
    } catch (error) {
      throw new HttpException(error, error.status)
    }
  }

  async update(_id: string, updateUserDto: UpdateUserDto) {
    try {
      const result = await this.userRepository.findOneAndUpdate({ _id }, updateUserDto)
      if (!result) {
        throw new HttpException('User not found', 404)
      }
      return result
    } catch (error) {
      throw new HttpException(error, error.status)
    }
  }

  async delete(id: string) {
    try {
      const result = await this.userRepository.delete({ _id: id })
      if (result.deleted) {
        return result
      }
      throw new HttpException('User not found', 404)
    } catch (error) {
      throw new HttpException(error, error.status)
    }
  }
}
