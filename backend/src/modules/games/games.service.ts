import { Injectable } from '@nestjs/common';
import { GamesDto } from './games.dto';

@Injectable()
export class GamesService {
  create(createGameDto: GamesDto) {
    return 'This action adds a new game';
  }

  findAll() {
    return `This action returns all games`;
  }

  findOne(id: number) {
    return `This action returns a #${id} game`;
  }

  /*   update(id: number, updateGameDto: UpdateGameDto) {
    return `This action updates a #${id} game`;
  } */

  remove(id: number) {
    return `This action removes a #${id} game`;
  }
}
