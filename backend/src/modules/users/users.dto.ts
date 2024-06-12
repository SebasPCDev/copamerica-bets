import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  Matches,
} from 'class-validator';
import { Role } from 'src/models/roles.enum';

export class UsersDto {
  @IsString({ message: 'El nombre debe ser un valor válido' })
  @IsNotEmpty({ message: 'El nombre es requerido' })
  name: string;

  @IsString({ message: 'El apellido debe ser un valor válido' })
  @IsNotEmpty({ message: 'El apellido es requerido' })
  lastname: string;

  @IsEmail({}, { message: 'email debe ser un correo electrónico válido' })
  @IsNotEmpty({ message: 'email no debe estar vacío' })
  email: string;

  @IsString({ message: 'La contraseña debe ser un valor válido' })
  @IsNotEmpty({ message: 'La contraseña es requerida' })
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/)
  password: string;

  @IsOptional()
  role: Role;
}
