import { Controller, Get } from '@nestjs/common';
import { Post } from 'src/entities/post';
import { PostService } from 'src/services/post.service';

@Controller('/post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get()
  get(): Promise<Post[]> {
    return this.postService.get();
  }
}