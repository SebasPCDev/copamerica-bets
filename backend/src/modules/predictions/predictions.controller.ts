import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  ParseUUIDPipe,
  Req,
  UseGuards,
} from '@nestjs/common';
import { PredictionsService } from './predictions.service';
import { CreatePredictionsDto } from './predictions.dto';
import { UUID } from 'crypto';
import { AuthGuard } from 'src/guards/auth.guard';

@UseGuards(AuthGuard)
@Controller('predictions')
export class PredictionsController {
  constructor(private readonly predictionsService: PredictionsService) {}

  //Pendiente

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
