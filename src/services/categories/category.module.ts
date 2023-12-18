import { Module } from '@nestjs/common';
import { CategoriesRepository } from '../../repositories/categories.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryEntity } from './entities/category.entity';
import { CategoryController } from './category.controller';
import { CategoryService } from './category.service';

@Module({
  imports: [TypeOrmModule.forFeature([CategoryEntity])],
  controllers: [CategoryController],
  providers: [CategoriesRepository, CategoryService],
})
export class CategoryModule {}
