import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FileKita } from './entities/filekita.entity';
import { FilekitaController } from './filekita.controller';
import { FilekitaService } from './filekita.service';

@Module({
  imports: [TypeOrmModule.forFeature([FileKita])],
  controllers: [FilekitaController],
  providers: [FilekitaService],
})
export class FilekitaModule {}
