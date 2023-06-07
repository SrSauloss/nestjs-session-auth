/* eslint-disable max-len */
import { Prop } from '@nestjs/mongoose'
import { ApiProperty } from '@nestjs/swagger'

export class CreateUserDto {
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
}
