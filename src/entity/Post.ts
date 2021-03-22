import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Post { //Post Entity

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    context: string;

    @Column()
    writer: string;

    @Column()
    createdAt: Date;

    @Column()
    updatedAt: Date;
}