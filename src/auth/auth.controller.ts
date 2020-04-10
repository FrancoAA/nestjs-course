import {
  Controller,
  Post,
  Body,
  ValidationPipe,
  UseGuards,
  Req,
} from '@nestjs/common';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { User } from './user.entity';
import { GetUser } from './get-user.decorator';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  signUp(@Body(ValidationPipe) credentials: AuthCredentialsDto): Promise<void> {
    return this.authService.signUp(credentials);
  }

  @Post('/signin')
  signIn(
    @Body(ValidationPipe) credentials: AuthCredentialsDto,
  ): Promise<{ accessToken: string }> {
    return this.authService.signIn(credentials);
  }

  // @Post('/test')
  // @UseGuards(AuthGuard())
  // async test(@GetUser() user: User) {
  //   console.log(user);
  // }
}
