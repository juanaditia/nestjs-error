import { Controller, Get, Param } from '@nestjs/common';
import { FilekitaService } from './filekita.service';

@Controller('filekita')
export class FilekitaController {
  constructor(private FilekitaService:FilekitaService){}


  @Get()
  lihatOutput(): string{
    return ' ini controller file kita ';
  }

  // delete the ("//") for turn on get by id

  // @Get(':id')
  // lihatDetail(@Param('id') id: string ): string{
  //   return ' ini controller file kita by id : ' + id;
  // }

  @Get('service')
  lihatSemua(){
    return this.FilekitaService.lihatSemua();
  }

  @Get('table')
  showTable(){
    return this.FilekitaService.showAll();
  }

}
