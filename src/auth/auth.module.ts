import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersSchema } from 'src/users/schemas/users.schema';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JWTStrategy } from './strategies/jwt.strategy';

@Module({
  imports:[
    MongooseModule.forFeature([
      {
        name:'Users',
        schema: UsersSchema
      }
    ]),
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET, 
      signOptions:{
        expiresIn:process.env.JWT_EXPIRATION,
      }
    })
  ],
  providers: [AuthService, JWTStrategy],
  exports:[AuthService]
})
export class AuthModule {}
