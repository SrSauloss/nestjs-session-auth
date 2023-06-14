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
import { ExperienceService } from './experience.service'
import { CreateExperienceDto } from './dto/create-experience.dto'
import { UpdateExperienceDto } from './dto/update-experience.dto'
import { DeletedExperienceResponse } from './dto/delete-experience.dto'
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
import { Experience } from './schemas/experience.schema'
import { Response } from 'express'

@Controller('experience')
@ApiTags('Experience')
export class ExperienceController {
  validPagination: ValidPagination
  constructor(private readonly experienceService: ExperienceService) {
    this.validPagination = new ValidPagination()
  }

  @Post()
  @ApiConsumes('application/json')
  @ApiBody({
    type: CreateExperienceDto
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
  @ApiResponse({ type: Experience, status: 201 })
  async create(
    @Body() createExperienceDto: CreateExperienceDto,
    @Res() res: Response
  ): Promise<Response> {
    try {
      const result = await this.experienceService.create(createExperienceDto)
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
  @ApiResponse({ type: [Experience], status: 200 })
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
      const result = await this.experienceService.list(limit, page)
      return res.status(200).json(result)
    } catch (error) {
      return res.status(error.status).json({ error: error.message })
    }
  }

  @Get(':id')
  @ApiParam({ name: 'id', type: 'string' })
  @ApiResponse({ type: Experience, status: 200 })
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
      const result = await this.experienceService.findOne(id)
      return res.status(200).json(result)
    } catch (error) {
      return res.status(error.status).json({ error: error.message })
    }
  }
  @Patch(':id')
  @ApiParam({ name: 'id', type: 'string' })
  @ApiResponse({ type: Experience, status: 200 })
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
    @Body() updateExperienceDto: UpdateExperienceDto,
    @Res() res: Response
  ): Promise<Response> {
    try {
      const result = await this.experienceService.update(id, updateExperienceDto)
      return res.status(200).json(result)
    } catch (error) {
      return res.status(error.status).json({ error: error.message })
    }
  }

  @Delete(':id')
  @ApiParam({ name: 'id', type: 'string' })
  @ApiResponse({
    type: DeletedExperienceResponse,
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
      const result = await this.experienceService.delete(id)
      return res.status(202).json(result)
    } catch (error) {
      return res.status(error.status).json({ error: error.message })
    }
  }
}
