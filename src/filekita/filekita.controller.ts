import { Body, Controller, Delete, Get, Param, Post, Put, Render } from '@nestjs/common';
import { FilekitaService } from './filekita.service';
import { FileKitaDTO } from './filekita.dto';

@Controller('filekita')
export class FilekitaController {
  constructor(private FilekitaService:FilekitaService){}


  // show all data table (record table)

  @Get('jsondata')
  async lihatOutput() {
    return { data: await this.FilekitaService.showAll() };
  }

  @Get()
  @Render('filekita/index')
  root() {
    return { message: 'Hello world!', title: "Index FileKita" };
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

  // add data table

  @Post()
  membuatRecord(@Body() data: FileKitaDTO){
    return this.FilekitaService.create(data)
  }

  // update data table

  @Put(':id')
  updateDetail(@Param('id') id: string, @Body() data: Partial<FileKitaDTO>){
    return this.FilekitaService.update(id,data)
  }

  @Delete(':id')
  deleteRecord(@Param('id') id: string){
    return this.FilekitaService.deleteData(id);
  }

}
