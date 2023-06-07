/* eslint-disable max-len */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { ApiProperty } from '@nestjs/swagger'
import { Document } from 'mongoose'

export type UserDocument = User & Document

@Schema({ timestamps: true })
export class User {
  @Prop()
  @ApiProperty({
    type: 'string',
    name: 'id',
    description: 'id of User',
    example: '0b44c4e8-bb56-4ad5-aebe-7f427886eca4'
  })
  _id: string

  @Prop()
  @ApiProperty({
    type: 'string',
    name: 'name',
    description: 'complete name of user',
    example: 'Hélio Endrio Cardoso Rodrigues'
  })
  name: string

  @Prop()
  @ApiProperty({
    type: 'string',
    name: 'firstName',
    description: 'first name of user',
    example: 'Hélio Endrio'
  })
  firstName: string

  @Prop({ unique: true })
  @ApiProperty({
    type: 'string',
    name: 'email',
    description: 'email of user',
    example: 'helioendrio@gmail.com'
  })
  email: string

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

  constructor(name: string, email: string, firstName: string, _id?: string) {
    this.name = name
    this.firstName = firstName
    this.email = email
    this._id = _id
  }
}

export const UserSchema = SchemaFactory.createForClass(User)
