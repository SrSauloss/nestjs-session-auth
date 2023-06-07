import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Req
} from '@nestjs/common'
import { LoginGoogleService } from './login-google.service'
import { CreateLoginGoogleDto } from './dto/create-login-google.dto'
import { UpdateLoginGoogleDto } from './dto/update-login-google.dto'
import { AuthGuard } from '@nestjs/passport'
import { ApiTags } from '@nestjs/swagger'

@ApiTags('Login Google')
@Controller('login-google')
export class LoginGoogleController {
  constructor(private readonly loginGoogleService: LoginGoogleService) {}

  @Get()
  @UseGuards(AuthGuard('google'))
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  async googleAuth(@Req() req) {}

  @Get('redirect')
  @UseGuards(AuthGuard('google'))
  async googleAuthRedirect(@Req() req) {
    return this.loginGoogleService.googleLogin(req)
  }

  @Post()
  create(@Body() createLoginGoogleDto: CreateLoginGoogleDto) {
    return this.loginGoogleService.create(createLoginGoogleDto)
  }

  @Get()
  findAll() {
    return this.loginGoogleService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.loginGoogleService.findOne(+id)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLoginGoogleDto: UpdateLoginGoogleDto) {
    return this.loginGoogleService.update(+id, updateLoginGoogleDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.loginGoogleService.remove(+id)
  }
}
