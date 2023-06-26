import { ApiProperty } from '@nestjs/swagger'

export class DeletedContentResponse {
  @ApiProperty({
    example: true
  })
  deleted: boolean
}
