import { Injectable } from '@nestjs/common';
import { PredictionsDto } from './predictions.dto';

@Injectable()
export class PredictionsService {
  create(createPredictionDto: PredictionsDto) {
    return 'This action adds a new prediction';
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