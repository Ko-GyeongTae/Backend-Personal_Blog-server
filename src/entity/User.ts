import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class User { //User Entity

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column({type:"timestamp", default: () => "CURRENT_TIMESTAMP"})
    createdAt: string;
}
