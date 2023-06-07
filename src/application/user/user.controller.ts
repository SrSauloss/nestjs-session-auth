import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Headers,
  Res
} from '@nestjs/common'
import { UserService } from './user.service'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { DeletedUserResponse } from './dto/delete-user.dto'
import { ValidPagination } from '../utils/validPagination'
import {
  ApiBody,
  ApiConsumes,
  ApiHeaders,
  ApiInternalServerErrorResponse,
  ApiNotFoundResponse,
  ApiParam,
  ApiResponse,
  ApiTags
} from '@nestjs/swagger'
import { User } from './schemas/user.schema'
import { Response } from 'express'

@Controller('user')
@ApiTags('User')
export class UserController {
  validPagination: ValidPagination
  constructor(private readonly userService: UserService) {
    this.validPagination = new ValidPagination()
  }

  @Post()
  @ApiConsumes('application/json')
  @ApiBody({
    type: CreateUserDto
  })
  @ApiInternalServerErrorResponse({
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            error: {
              type: 'string',
              example: 'Internal server error'
            }
          }
        }
      }
    }
  })
  @ApiResponse({ type: User, status: 201 })
  async create(
    @Body() createUserDto: CreateUserDto,
    @Res() res: Response
  ): Promise<Response> {
    try {
      const result = await this.userService.create(createUserDto)
      return res.status(201).json(result)
    } catch (error) {
      return res.status(error.status).json({ error: error.message })
    }
  }

  @Get()
  @ApiHeaders([
    {
      name: 'page',
      required: true,
      example: 1,
      description: 'Page number'
    },
    {
      name: 'limit',
      required: true,
      example: 10,
      description: 'Limit of items per page'
    }
  ])
  @ApiResponse({ type: [User], status: 200 })
  @ApiNotFoundResponse({
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            message: {
              type: 'string',
              example: 'Not found'
            }
          }
        }
      }
    }
  })
  @ApiInternalServerErrorResponse({
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            error: {
              type: 'string',
              example: 'Internal server error'
            }
          }
        }
      }
    }
  })
  async list(@Headers() headers, @Res() res: Response): Promise<Response> {
    try {
      let { limit = 10, page = 1 } = this.validPagination.validPagination(headers)

      if (!page || !limit) {
        page = 1
        limit = 10
      } else {
        page = Number(page)
        limit = Number(limit)
      }
      const result = await this.userService.list(limit, page)
      return res.status(200).json(result)
    } catch (error) {
      return res.status(error.status).json({ error: error.message })
    }
  }

  @Get(':id')
  @ApiParam({ name: 'id', type: 'string' })
  @ApiResponse({ type: User, status: 200 })
  @ApiNotFoundResponse({
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            message: {
              type: 'string',
              example: 'Not found'
            }
          }
        }
      }
    }
  })
  @ApiInternalServerErrorResponse({
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            error: {
              type: 'string',
              example: 'Internal server error'
            }
          }
        }
      }
    }
  })
  async findOne(@Param('id') id: string, @Res() res: Response): Promise<Response> {
    try {
      const result = await this.userService.findOne(id)
      return res.status(200).json(result)
    } catch (error) {
      return res.status(error.status).json({ error: error.message })
    }
  }
  @Patch(':id')
  @ApiParam({ name: 'id', type: 'string' })
  @ApiResponse({ type: User, status: 200 })
  @ApiNotFoundResponse({
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            message: {
              type: 'string',
              example: 'Not found'
            }
          }
        }
      }
    }
  })
  @ApiInternalServerErrorResponse({
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            error: {
              type: 'string',
              example: 'Internal server error'
            }
          }
        }
      }
    }
  })
  async update(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
    @Res() res: Response
  ): Promise<Response> {
    try {
      const result = await this.userService.update(id, updateUserDto)
      return res.status(200).json(result)
    } catch (error) {
      return res.status(error.status).json({ error: error.message })
    }
  }

  @Delete(':id')
  @ApiParam({ name: 'id', type: 'string' })
  @ApiResponse({
    type: DeletedUserResponse,
    status: 202
  })
  @ApiNotFoundResponse({
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            message: {
              type: 'string',
              example: 'Not found'
            }
          }
        }
      }
    }
  })
  @ApiInternalServerErrorResponse({
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            error: {
              type: 'string',
              example: 'Internal server error'
            }
          }
        }
      }
    }
  })
  async delete(@Param() param: { id: string }, @Res() res: Response): Promise<Response> {
    const { id } = param
    try {
      const result = await this.userService.delete(id)
      return res.status(202).json(result)
    } catch (error) {
      return res.status(error.status).json({ error: error.message })
    }
  }
}
