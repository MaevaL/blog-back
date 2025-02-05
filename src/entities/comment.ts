import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user";
import { Post } from "./post";

@Entity()
export class Comment {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    content:string;
    
    @ManyToOne(() => User)
    author: User;
    @ManyToOne(() => Post)
    post: Post;
    
    @Column({type: 'date'})
    date: Date;

}