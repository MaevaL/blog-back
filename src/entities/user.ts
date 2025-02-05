import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
    @Column()
    lastname: string;
    @Column()
    pseudo: string;
    @Column({type:'date'})
    birthdate: Date; 
    @Column()
    email: string;
    @Column()
    password: string;
}