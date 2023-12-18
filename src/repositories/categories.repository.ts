import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CategoryEntity } from '../services/categories/entities/category.entity';

export class CategoriesRepository {
  constructor(
    @InjectRepository(CategoryEntity)
    private readonly repo: Repository<CategoryEntity>,
  ) {}

  public async getById(id: string): Promise<CategoryEntity> {
    return await this.repo
      .createQueryBuilder('category')
      .where('category.id = :id', { id })
      .getOne();
  }

  public async save(category: CategoryEntity): Promise<CategoryEntity> {
    return await this.repo.save(category);
  }
}
