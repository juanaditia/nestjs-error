import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FileKita } from './filekita.entity'
import { FileKitaDTO } from './filekita.dto';

@Injectable()
export class FilekitaService {

  constructor ( @InjectRepository( FileKita )
  
  private filekitaRepository : Repository< FileKita >

  ){  }

  async showAll () {
    return await this.filekitaRepository.find()
  }

  async lihatSemua () {

    return " ini di service ";

  }

  async create(data: FileKitaDTO){
    const fileKitaNew = await this.filekitaRepository.create(data);
    await this.filekitaRepository.save(fileKitaNew)
    return fileKitaNew
  }

  async showPreRecord(id: string){
    return await this.filekitaRepository.findOne({
      where : {id}
    })
  }

  async update(id: string, data: Partial<FileKitaDTO> ){

    await this.filekitaRepository.update({id},data)
    return await this.filekitaRepository.findOne({
      where : {id}
    })
  }

  async deleteData(id: string){
    await this.filekitaRepository.delete({id})
    return {deleted: true}
  } 

}
