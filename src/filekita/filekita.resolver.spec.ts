import { Test, TestingModule } from '@nestjs/testing';
import { FilekitaResolver } from './filekita.resolver';

describe('FilekitaResolver', () => {
  let resolver: FilekitaResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FilekitaResolver],
    }).compile();

    resolver = module.get<FilekitaResolver>(FilekitaResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
