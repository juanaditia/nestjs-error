import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class FileKita {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id: number;

  @Column({ length: 500 })
  @Field()
  name: string;

  @Column('text')
  @Field()
  description: string;

  @Column()
  @Field()
  isPublished: boolean;

  @Column()
  @Field()
  filename: string;

  @Column('int')
  @Field(() => Int)
  views: number;
}
