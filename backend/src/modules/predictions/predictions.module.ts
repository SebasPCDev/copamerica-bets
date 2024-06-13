import { Module } from '@nestjs/common';
import { PredictionsService } from './predictions.service';
import { PredictionsController } from './predictions.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Prediction } from 'src/entities/prediction.entity';
import { User } from 'src/entities/user.entity';
import { Game } from 'src/entities/game.entity';

@Module({
  controllers: [PredictionsController],
  providers: [PredictionsService],
  imports: [TypeOrmModule.forFeature([Prediction, User, Game])],
})
export class PredictionsModule {}
