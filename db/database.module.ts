import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 6432,
      username: 'postgres',
      password: 'postgres',
      database: 'prompt_db',
      entities: [__dirname + '/../**/*.entity.{js,ts}'],
      synchronize: false,
    })
  ],
  providers: [],
  exports: [],
})
export class DatabaseModule {}
