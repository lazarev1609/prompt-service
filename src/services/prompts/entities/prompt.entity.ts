import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { CategoryEntity } from '../../categories/entities/category.entity';

@Entity('prompt')
export class PromptEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  title: string;

  @Column()
  description: string;

  @Column()
  body: string;

  @ManyToOne(() => CategoryEntity)
  category: CategoryEntity;
}