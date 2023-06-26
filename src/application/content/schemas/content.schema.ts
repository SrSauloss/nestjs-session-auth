/* eslint-disable max-len */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { ApiProperty } from '@nestjs/swagger'
import { Document } from 'mongoose'

export type ContentDocument = Content & Document

@Schema({ timestamps: true })
export class Content {
  @Prop()
  @ApiProperty({
    type: 'string',
    name: 'id',
    description: 'id of Content',
    example: '0b44c4e8-bb56-4ad5-aebe-7f427886eca4'
  })
  _id: string

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
    example: 'programmingLanguage'
  })
  typeOfContent: string

  @Prop()
  @ApiProperty({
    type: 'string',
    name: 'updatedAt',
    example: '2023-02-10T13:38:25.367Z'
  })
  updatedAt: string

  @Prop()
  @ApiProperty({
    type: 'string',
    name: 'createdAt',
    example: '2023-02-10T13:38:25.367Z'
  })
  createdAt: string

  @Prop()
  @ApiProperty({
    type: 'string',
    name: 'createdBy',
    example: '4c9e9ee5-7aa4-4b27-bfe8-66046fb01ceb'
  })
  createdBy: string

  @Prop()
  @ApiProperty({
    type: 'string',
    name: 'updatedBy',
    example: '5c9e9ee5-7aa4-4b27-bfe8-66046fb01ceb'
  })
  updatedBy: string

  @Prop()
  @ApiProperty({
    type: 'string',
    name: 'deletedAt',
    example: '2023-02-10T13:38:25.367Z'
  })
  deletedAt: string

  @Prop()
  @ApiProperty({
    type: 'string',
    name: 'deletedBy',
    example: '5c9e9ee5-7aa4-4b27-bfe8-66046fb01ceb'
  })
  deletedBy: string

  @Prop()
  @ApiProperty({
    type: 'boolean',
    name: 'deleted',
    example: false
  })
  deleted: boolean

  constructor(name: string, typeOfContent: string, _id?: string) {
    this.name = name
    this.typeOfContent = typeOfContent
    this._id = _id
  }
}

export const ContentSchema = SchemaFactory.createForClass(Content)
