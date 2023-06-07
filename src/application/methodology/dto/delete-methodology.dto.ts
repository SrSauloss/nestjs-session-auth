import { ApiProperty } from '@nestjs/swagger'

export class DeletedMethodologyResponse {
  @ApiProperty({
    example: true
  })
  deleted: boolean
}
