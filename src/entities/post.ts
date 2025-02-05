import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user";
import { Comment } from "./comment";

@Entity()
export class Post {
     @PrimaryGeneratedColumn()
    id: number;
    @Column()
    title: string;
    @Column()
    content: string;
    @ManyToOne(() => User)
    author: User;

    @OneToMany(() => Comment, (comment) => comment.post)
    comments: Comment[];
}