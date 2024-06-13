import { BadRequestException, Injectable } from '@nestjs/common';
import { CreatePredictionsDto } from './predictions.dto';
import { UUID } from 'crypto';
import { InjectRepository } from '@nestjs/typeorm';
import { Prediction } from 'src/entities/prediction.entity';
import { Repository } from 'typeorm';
import { User } from 'src/entities/user.entity';
import { Game } from 'src/entities/game.entity';

@Injectable()
export class PredictionsService {
  constructor(
    @InjectRepository(Prediction)
    private predictionRepository: Repository<Prediction>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(Game)
    private gameRepository: Repository<Game>,
  ) {}
  async create(
    user_id: UUID,
    id_game: UUID,
    createPredictionDto: CreatePredictionsDto,
  ) {
    //! Validar que el juego no haya comenzado
    const game = await this.gameRepository.findOne({
      where: { id: id_game },
      relations: ['predictions'],
    });
    if (!game) throw new BadRequestException('Juego no encontrado');

    await this.validationDate(game);

    //! Validar que el usuario exista
    const user = await this.userRepository.findOne({
      where: { id: user_id },
      relations: ['predictions'],
    });
    if (!user) throw new BadRequestException('Usuario no encontrado');

    //! Validar que el usuario no haya hecho una predicción para este juego
    const predictionExists = await this.predictionRepository.find({
      where: {
        user: { id: user_id },
        game: { id: id_game },
      },
      relations: ['user', 'game'],
    });

    if (predictionExists.length > 0) {
      throw new BadRequestException('Ya existe una predicción para este juego');
    }

    //! Crear la predicción
    const newPrediction = this.predictionRepository.create({
      ...createPredictionDto,
      user,
      game,
    });

    const prediction = await this.predictionRepository.save(newPrediction);

    return prediction;
  }

  async validationDate(game: Game) {
    const date = new Date();
    const colombiaOffset = -5 * 60;
    const colombiaTime = new Date(date.getTime() + colombiaOffset * 60000);
    const colombiaGameTime = new Date(
      game.date.getTime() + colombiaOffset * 60000,
    );

    if (colombiaGameTime < colombiaTime) {
      throw new BadRequestException('El juego ya ha comenzado');
    } else {
      return true;
    }
  }

  findAll() {
    return `This action returns all predictions`;
  }

  findOne(id: number) {
    return `This action returns a #${id} prediction`;
  }

  /*   update(id: number, updatePredictionDto: UpdatePredictionDto) {
    return `This action updates a #${id} prediction`;
  } */

  remove(id: number) {
    return `This action removes a #${id} prediction`;
  }
}
