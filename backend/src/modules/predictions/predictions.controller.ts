import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { PredictionsService } from './predictions.service';
import { PredictionsDto } from './predictions.dto';

@Controller('predictions')
export class PredictionsController {
  constructor(private readonly predictionsService: PredictionsService) {}

  @Post()
  create(@Body() createPredictionDto: PredictionsDto) {
    return this.predictionsService.create(createPredictionDto);
  }

  @Get()
  findAll() {
    return this.predictionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.predictionsService.findOne(+id);
  }

  /*   @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePredictionDto: UpdatePredictionDto,
  ) {
    return this.predictionsService.update(+id, updatePredictionDto);
  } */

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.predictionsService.remove(+id);
  }
}
