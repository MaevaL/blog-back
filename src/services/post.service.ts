import { Injectable } from '@nestjs/common';
import { Post } from 'src/entities/post';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class PostService {
private postRepository: Repository<Post>;
  constructor(private dataSource: DataSource) {
    this.postRepository = this.dataSource.getRepository(Post);
  }
  get(): Promise<Post[]> {
    return this.postRepository.find();
  }
}
