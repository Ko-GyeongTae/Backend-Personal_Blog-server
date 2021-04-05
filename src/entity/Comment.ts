import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Comment {

  @PrimaryGeneratedColumn("uuid")
  PostID: string;

  @Column()
  userUid: string;

  @Column()
  content: string;

  @Column()
  order: number;

  @Column({ type: 'boolean', default: false})
  isDel: boolean;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP"})
  date: string;
}