import { Controller, Get } from '@nestjs/common';
import { FilekitaService } from './filekita.service';

@Controller('filekita')
export class FilekitaController {
  constructor(private filekitaService: FilekitaService) {}

  // show all data table (record table)

  @Get('jsondata')
  async lihatOutput() {
    return { data: await this.filekitaService.showAll() };
  }

  // @Get()
  // @Render('filekita/index')
  // root() {
  //   return { message: 'Hello world!', title: 'Index FileKita' };
  // }

  // Show data table by id

  // @Get(':id')
  // to show how works with show all data table

  // @Get('table')
  // showTable(){
  //   return this.filekitaService.showAll();
  // }

  // add data table

  // @Post()
  // membuatRecord(@Body() data: FileKitaDTO) {
  //   return this.filekitaService.create(data);
  // }

  // update data table

  // @Put(':id')
  // @Delete(':id')
}
