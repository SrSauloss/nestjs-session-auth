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
import { MethodologyService } from './methodology.service'
import { CreateMethodologyDto } from './dto/create-methodology.dto'
import { UpdateMethodologyDto } from './dto/update-methodology.dto'
import { DeletedMethodologyResponse } from './dto/delete-methodology.dto'
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
import { Methodology } from './schemas/methodology.schema'
import { Response } from 'express'

@Controller('methodology')
@ApiTags('Methodology')
export class MethodologyController {
  validPagination: ValidPagination
  constructor(private readonly methodologyService: MethodologyService) {
    this.validPagination = new ValidPagination()
  }

  @Post()
  @ApiConsumes('application/json')
  @ApiBody({
    type: CreateMethodologyDto
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
  @ApiResponse({ type: Methodology, status: 201 })
  async create(
    @Body() createMethodologyDto: CreateMethodologyDto,
    @Res() res: Response
  ): Promise<Response> {
    try {
      const result = await this.methodologyService.create(createMethodologyDto)
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
  @ApiResponse({ type: [Methodology], status: 200 })
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
      const result = await this.methodologyService.list(limit, page)
      return res.status(200).json(result)
    } catch (error) {
      return res.status(error.status).json({ error: error.message })
    }
  }

  @Get(':id')
  @ApiParam({ name: 'id', type: 'string' })
  @ApiResponse({ type: Methodology, status: 200 })
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
      const result = await this.methodologyService.findOne(id)
      return res.status(200).json(result)
    } catch (error) {
      return res.status(error.status).json({ error: error.message })
    }
  }
  @Patch(':id')
  @ApiParam({ name: 'id', type: 'string' })
  @ApiResponse({ type: Methodology, status: 200 })
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
    @Body() updateMethodologyDto: UpdateMethodologyDto,
    @Res() res: Response
  ): Promise<Response> {
    try {
      const result = await this.methodologyService.update(id, updateMethodologyDto)
      return res.status(200).json(result)
    } catch (error) {
      return res.status(error.status).json({ error: error.message })
    }
  }

  @Delete(':id')
  @ApiParam({ name: 'id', type: 'string' })
  @ApiResponse({
    type: DeletedMethodologyResponse,
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
      const result = await this.methodologyService.delete(id)
      return res.status(202).json(result)
    } catch (error) {
      return res.status(error.status).json({ error: error.message })
    }
  }
}
