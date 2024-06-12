import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { Exclude } from 'class-transformer';
import { Prediction } from './prediction.entity';

@Entity({ name: 'games' })
export class Game {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 100 })
  team_local: string;

  @Column({ type: 'varchar', length: 100 })
  team_visitor: string;

  @Column({ type: 'varchar', length: 100 })
  stadium: string;

  @Column({ type: 'timestamptz' })
  date: Date;

  @Column({ type: 'varchar', length: 100, nullable: true })
  group: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  team_localScore: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  team_visitorScore: string;

  @Column()
  match_number: number;

  @Column()
  round_number: number;

  @Exclude()
  @CreateDateColumn({
    name: 'created_at',
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;

  @Exclude()
  @UpdateDateColumn({
    name: 'updated_at',
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'now()',
  })
  updatedAt: Date;

  @OneToMany(() => Prediction, (prediction) => prediction.game)
  predictions: Prediction[];
}
