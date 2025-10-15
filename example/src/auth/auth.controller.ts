import { Body, Controller, Post } from '@nestjs/common';
import type { SignInDTO, SignUpDTO } from './dtos/auth';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor( private readonly authService: AuthService) {}

    @Post('signup')
    async signup(@Body() body: SignUpDTO){
       return this.authService.signup(body);
        
    }

    @Post('signin')
    async signin(@Body() body: SignInDTO){
        console.log( {body} )

        return await this.authService.signin(body);

    }
}
