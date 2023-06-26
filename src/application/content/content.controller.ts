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
import { ContentService } from './content.service'
import { CreateContentDto } from './dto/create-content.dto'
import { UpdateContentDto } from './dto/update-content.dto'
import { DeletedContentResponse } from './dto/delete-content.dto'
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
import { Content } from './schemas/content.schema'
import { Response } from 'express'

@Controller('content')
@ApiTags('Content')
export class ContentController {
  validPagination: ValidPagination
  constructor(private readonly contentService: ContentService) {
    this.validPagination = new ValidPagination()
  }

  @Post()
  @ApiConsumes('application/json')
  @ApiBody({
    type: CreateContentDto
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
  @ApiResponse({ type: Content, status: 201 })
  async create(
    @Body() createContentDto: CreateContentDto,
    @Res() res: Response
  ): Promise<Response> {
    try {
      const result = await this.contentService.create(createContentDto)
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
  @ApiResponse({ type: [Content], status: 200 })
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
      const result = await this.contentService.list(limit, page)
      return res.status(200).json(result)
    } catch (error) {
      return res.status(error.status).json({ error: error.message })
    }
  }

  @Get('/type/:typeOfContent')
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
  @ApiResponse({ type: [Content], status: 200 })
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
  async listByType(
    @Param('typeOfContent') typeOfContent: string,
    @Headers() headers,
    @Res() res: Response
  ): Promise<Response> {
    try {
      let { limit = 10, page = 1 } = this.validPagination.validPagination(headers)
      if (!page || !limit) {
        page = 1
        limit = 10
      } else {
        page = Number(page)
        limit = Number(limit)
      }
      const result = await this.contentService.findByType(typeOfContent, limit, page)

      return res.status(200).json(result)
    } catch (error) {
      return res.status(error.status).json({ error: error.message })
    }
  }

  @Get(':id')
  @ApiParam({ name: 'id', type: 'string' })
  @ApiResponse({ type: Content, status: 200 })
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
      const result = await this.contentService.findOne(id)
      return res.status(200).json(result)
    } catch (error) {
      return res.status(error.status).json({ error: error.message })
    }
  }
  @Patch(':id')
  @ApiParam({ name: 'id', type: 'string' })
  @ApiResponse({ type: Content, status: 200 })
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
    @Body() updateContentDto: UpdateContentDto,
    @Res() res: Response
  ): Promise<Response> {
    try {
      const result = await this.contentService.update(id, updateContentDto)
      return res.status(200).json(result)
    } catch (error) {
      return res.status(error.status).json({ error: error.message })
    }
  }

  @Delete(':id')
  @ApiParam({ name: 'id', type: 'string' })
  @ApiResponse({
    type: DeletedContentResponse,
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
      const result = await this.contentService.delete(id)
      return res.status(202).json(result)
    } catch (error) {
      return res.status(error.status).json({ error: error.message })
    }
  }
}
