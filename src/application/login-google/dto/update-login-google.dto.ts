import { PartialType } from '@nestjs/swagger';
import { CreateLoginGoogleDto } from './create-login-google.dto';

export class UpdateLoginGoogleDto extends PartialType(CreateLoginGoogleDto) {}
