import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FilekitaModule } from './filekita/filekita.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PW,
      database: process.env.DB_NAME,
      entities: ['src/**/*.entity.ts', 'dist/**/*.entity.js' ],
      synchronize: true,
      dropSchema: false,
      logging: true,
    }),
    FilekitaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}