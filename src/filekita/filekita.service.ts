import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FileKita } from './filekita.entity'

@Injectable()
export class FilekitaService {

  constructor ( @InjectRepository( FileKita )
  
  private filekitaRepository : Repository< FileKita >

  ){

  }

  async showAll () {
    return await this.filekitaRepository.find()
  }

  async lihatSemua () {

    return " ini di service ";

  }

}
