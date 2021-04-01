import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Comment { //Post Entity

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    context: string;

    @Column()
    writer: string;

    @Column()
    createdAt: Date;

    @Column()
    isRemoved: boolean;
}