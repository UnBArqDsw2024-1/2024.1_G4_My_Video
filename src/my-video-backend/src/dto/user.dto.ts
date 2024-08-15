import { IsEmail, IsBoolean, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
    @ApiProperty({
      description: 'Email of the user',
      example: 'user@example.com',
    })
    
    @IsEmail()
    email: string;
  
    @ApiProperty({
      description: 'Password of the user',
      example: 'securePassword123',
    })
    @IsString()
    password: string;
  
    @ApiProperty({
      description: 'Name of the user',
      example: 'John Doe',
    })
    @IsString()
    name: string;
  
    @ApiProperty({
      description: 'Whether the user is active',
      example: true,
    })
    @IsBoolean()
    isActive: boolean;
  }