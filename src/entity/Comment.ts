import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Comment { //Post Entity

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    context: string;

    @Column()
    writer: string;

    @Column()
    createdAt: Date;
}