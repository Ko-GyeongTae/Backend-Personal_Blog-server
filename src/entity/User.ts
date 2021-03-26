import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class User { //User Entity

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    createdAt: Date;
}
