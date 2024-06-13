import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreatePredictionsDto {
  @IsNumber({ allowNaN: false, allowInfinity: false, maxDecimalPlaces: 0 })
  @IsNotEmpty({ message: 'Este campo no puede estar vacío' })
  score_local: number;

  @IsNumber({ allowNaN: false, allowInfinity: false, maxDecimalPlaces: 0 })
  @IsNotEmpty({ message: 'Este campo no puede estar vacío' })
  score_visitor: number;
}
