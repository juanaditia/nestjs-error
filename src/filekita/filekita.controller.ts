import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { FilekitaService } from './filekita.service';
import { FileKitaDTO } from './filekita.dto';

@Controller('filekita')
export class FilekitaController {
  constructor(private FilekitaService:FilekitaService){}


  // show all data table (record table)

  @Get()
  lihatOutput() {
    return this.FilekitaService.showAll();
  }

  // Show data table by id

  @Get(':id')
  lihatDetail(@Param('id') id: string ) {
    // return ' ini controller file kita by id : ' + id;
    return this.FilekitaService.showPreRecord(id)
  }

  @Get('service')
  lihatSemua(){
    return this.FilekitaService.lihatSemua();
  }

  // to show how works with show all data table

  // @Get('table')
  // showTable(){
  //   return this.FilekitaService.showAll();
  // }

  @Post()
  membuatRecord(@Body() data: FileKitaDTO){
    return this.FilekitaService.create(data)
  }

}
