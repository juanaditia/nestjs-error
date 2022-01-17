import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FileKita } from './entities/filekita.entity';
import { FilekitaController } from './filekita.controller';
import { FilekitaService } from './filekita.service';
import { FilekitaResolver } from './filekita.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([FileKita])],
  controllers: [FilekitaController],
  providers: [FilekitaService, FilekitaResolver],
})
export class FilekitaModule {}
