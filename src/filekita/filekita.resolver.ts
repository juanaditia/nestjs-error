import { Query, Resolver } from '@nestjs/graphql';
import { FileKita } from './entities/filekita.entity';
import { FilekitaService } from './filekita.service';

@Resolver(() => FileKita)
export class FilekitaResolver {
  constructor(private readonly fileKitaService: FilekitaService) {}

  @Query(() => [FileKita])
  async filekita() {
    return await this.fileKitaService.showAll();
  }
}
