/* eslint-disable max-len */
import { Prop } from '@nestjs/mongoose'
import { ApiProperty } from '@nestjs/swagger'

export class CreateContentDto {
  @Prop()
  @ApiProperty({
    type: 'string',
    name: 'name',
    description: 'name of content',
    example: 'C++'
  })
  name: string

  @Prop()
  @ApiProperty({
    type: 'string',
    name: 'typeOfContent',
    description: 'type of content',
    example: 'language'
  })
  typeOfContent: string
}
