import { Injectable } from "@nestjs/common";
import { Comment } from "src/entities/comment";
import { DataSource, Repository } from "typeorm";

@Injectable()
export class CommentService {
    private commentRepository: Repository<Comment>;

    constructor(dataSource: DataSource) {
        this.commentRepository = dataSource.getRepository(Comment);
    }

    get(): Promise<Comment[]> {
        return this.commentRepository.find();
    }

}