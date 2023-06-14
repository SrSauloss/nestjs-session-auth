import { ApiProperty } from '@nestjs/swagger'

export class DeletedExperienceResponse {
  @ApiProperty({
    example: true
  })
  deleted: boolean
}
