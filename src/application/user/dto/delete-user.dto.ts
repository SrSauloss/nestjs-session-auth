import { ApiProperty } from '@nestjs/swagger'

export class DeletedUserResponse {
  @ApiProperty({
    example: true
  })
  deleted: boolean
}
