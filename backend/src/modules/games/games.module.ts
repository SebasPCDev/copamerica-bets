import { Module } from '@nestjs/common';
import { GamesService } from './games.service';
import { GamesController } from './games.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Game } from 'src/entities/game.entity';

@Module({
  controllers: [GamesController],
  providers: [GamesService],
  imports: [TypeOrmModule.forFeature([Game])],
  exports: [GamesService],
})
export class GamesModule {}
