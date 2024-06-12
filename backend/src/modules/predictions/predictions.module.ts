import { Module } from '@nestjs/common';
import { PredictionsService } from './predictions.service';
import { PredictionsController } from './predictions.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Prediction } from 'src/entities/prediction.entity';

@Module({
  controllers: [PredictionsController],
  providers: [PredictionsService],
  imports: [TypeOrmModule.forFeature([Prediction])],
})
export class PredictionsModule {}
