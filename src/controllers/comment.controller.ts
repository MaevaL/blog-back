import { Controller, Get } from "@nestjs/common";
import { Comment } from "src/entities/comment";
import { CommentService } from "src/services/comment.service";

@Controller('/comments')
export class CommentController {
    constructor(private readonly commentService: CommentService) {};

    @Get()
    get(): Promise<Comment[]> {
        return this.commentService.get();
    }
}