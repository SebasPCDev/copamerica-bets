import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './modules/users/users.module';
import { GamesModule } from './modules/games/games.module';
import { PredictionsModule } from './modules/predictions/predictions.module';
import typeOrmConfig from './config/typeorm';
import { SeederService } from './seeder.service';
import { Game } from './entities/game.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [typeOrmConfig],
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) =>
        configService.get('typeorm'),
    }),
    TypeOrmModule.forFeature([Game]),
    UsersModule,
    GamesModule,
    PredictionsModule,
  ],
  controllers: [AppController],
  providers: [AppService, SeederService],
})
export class AppModule {
  constructor(private readonly seederService: SeederService) {
    this.seederService.seed();
  }
}
