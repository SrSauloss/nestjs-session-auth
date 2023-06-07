import { Injectable } from '@nestjs/common'
import { CreateLoginGoogleDto } from './dto/create-login-google.dto'
import { UpdateLoginGoogleDto } from './dto/update-login-google.dto'

@Injectable()
export class LoginGoogleService {
  googleLogin(req) {
    if (!req.user) {
      return 'No user from google'
    }

    return {
      message: 'User information from google',
      user: req.user
    }
  }

  create(createLoginGoogleDto: CreateLoginGoogleDto) {
    return 'This action adds a new loginGoogle'
  }

  findAll() {
    return `This action returns all loginGoogle`
  }

  findOne(id: number) {
    return `This action returns a #${id} loginGoogle`
  }

  update(id: number, updateLoginGoogleDto: UpdateLoginGoogleDto) {
    return `This action updates a #${id} loginGoogle`
  }

  remove(id: number) {
    return `This action removes a #${id} loginGoogle`
  }
}
