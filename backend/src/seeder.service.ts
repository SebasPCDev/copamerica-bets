import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Game } from './entities/game.entity';
import { Repository } from 'typeorm';
import { loadGames } from './utils/loadData';

@Injectable()
export class SeederService {
  constructor(
    @InjectRepository(Game) private gamesRepository: Repository<Game>,
  ) {}

  async seed() {
    console.log('Precarga de Datos');

    const games = await this.gamesRepository.find();
    if (games.length > 0) {
      console.log('Ya hay datos cargados');
      return;
    }

    this.preloadGames();
  }

  async preloadGames() {
    const dataGames = loadGames();
    const games = this.gamesRepository.create(dataGames);

    for await (const game of games) {
      await this.gamesRepository.save(game);
      console.log(`Partido ${game.match_number} cargado correctamente`);
    }
  }
}
