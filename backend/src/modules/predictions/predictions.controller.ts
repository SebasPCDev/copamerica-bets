import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  Req,
  UseGuards,
  Put,
} from '@nestjs/common';
import { PredictionsService } from './predictions.service';
import { CreatePredictionsDto, UpdatePredictionDto } from './predictions.dto';
import { UUID } from 'crypto';
import { AuthGuard } from 'src/guards/auth.guard';

@UseGuards(AuthGuard)
@Controller('predictions')
export class PredictionsController {
  constructor(private readonly predictionsService: PredictionsService) {}

  @Post('new/:id')
  create(
    @Req() request,
    @Param('id', ParseUUIDPipe) id_game: UUID,
    @Body() createPredictionDto: CreatePredictionsDto,
  ) {
    const user = request.user;
    console.log(user);
    return this.predictionsService.create(
      user.id,
      id_game,
      createPredictionDto,
    );
  }

  @Get()
  findAll() {
    return this.predictionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') prediction_id: UUID) {
    return this.predictionsService.findOne(prediction_id);
  }

  @Put('update/:id')
  update(
    @Req() request,
    @Param('id') prediction_id: UUID,
    @Body() updatePredictionDto: UpdatePredictionDto,
  ) {
    const user = request.user;
    return this.predictionsService.update(
      user.id,
      prediction_id,
      updatePredictionDto,
    );
  }

  /*  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.predictionsService.remove(+id);
  } */
}
