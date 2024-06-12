import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Exclude } from 'class-transformer';
import { User } from './user.entity';
import { Game } from './game.entity';

@Entity({ name: 'predictions' })
export class Prediction {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 2 })
  score_local: number;

  @Column({ type: 'varchar', length: 2 })
  score_visitor: number;

  @Exclude()
  @CreateDateColumn({
    name: 'created_at',
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;

  @ManyToOne(() => User, (user) => user.predictions)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => Game, (game) => game.predictions)
  @JoinColumn({ name: 'game_id' })
  game: Game;
}
