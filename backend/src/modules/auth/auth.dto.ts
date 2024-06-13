import {
  IsEmail,
  IsNotEmpty,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

export class ForgotPasswordDto {
  @IsEmail()
  @IsNotEmpty({ message: 'El email es obligatorio' })
  email: string;
}

export class RecoveryPassDto {
  @IsString({
    message:
      'La contraseña debe tener entre 8 y 15 caracteres, tener al menos una míscula, una mayúscula y un caracter especial (!@#$%^&*)',
  })
  @MinLength(8)
  @MaxLength(15)
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/)
  @IsNotEmpty()
  password: string;

  @IsString()
  @IsNotEmpty()
  token: string;
}

export class LoginUserDto {
  @IsEmail()
  @IsNotEmpty({ message: 'El email es obligatorio' })
  email: string;

  @IsNotEmpty({ message: 'El password es obligatorio' })
  password: string;
}
