import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user';
import { Comment } from './entities/comment';
import { Post } from './entities/post';
import { PostController } from './controllers/post.controller';
import { PostService } from './services/post.service';
import { UserService } from './services/user.service';
import { CommentService } from './services/comment.service';
import { UserController } from './controllers/user.controller';
import { CommentController } from './controllers/comment.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'blog',
      entities: [
        User,
        Post,
        Comment,
      ],
      synchronize: true,
    }),
  ],
  controllers: [AppController, PostController, UserController, CommentController],
  providers: [AppService, PostService, UserService, CommentService],
})
export class AppModule {}
