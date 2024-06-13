import { Controller, Post, Body, Put } from '@nestjs/common';
import { AuthService } from './auth.service';

import { ForgotPasswordDto, LoginUserDto, RecoveryPassDto } from './auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signin')
  signin(@Body() credentials: LoginUserDto) {
    return this.authService.signin(credentials);
  }

  /*   @Put('forgot-password')
  forgotPassword(@Body() data: ForgotPasswordDto) {
    return this.authService.forgotPassword(data.email);
  }

  @Put('recovery-password')
  recoveryPass(@Body() data: RecoveryPassDto) {
    return this.authService.recoveryPass(data);
  } */
}
