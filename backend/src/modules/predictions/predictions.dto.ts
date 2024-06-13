import { IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class CreatePredictionsDto {
  @IsNumber({ allowNaN: false, allowInfinity: false, maxDecimalPlaces: 0 })
  @IsNotEmpty({ message: 'Este campo no puede estar vacío' })
  score_local: number;

  @IsNumber({ allowNaN: false, allowInfinity: false, maxDecimalPlaces: 0 })
  @IsNotEmpty({ message: 'Este campo no puede estar vacío' })
  score_visitor: number;
}

export class UpdatePredictionDto {
  @IsNumber({ allowNaN: false, allowInfinity: false, maxDecimalPlaces: 0 })
  @IsOptional()
  score_local: number;

  @IsNumber({ allowNaN: false, allowInfinity: false, maxDecimalPlaces: 0 })
  @IsOptional()
  score_visitor: number;
}
