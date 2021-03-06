import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { AppController } from './app.controller';

import { UserModule } from '../user/user.module';
import { LessonModule } from 'src/lesson/lesson.module';
import { QuestionModule } from 'src/question/question.module';

import { TypeOrmModule } from '@nestjs/typeorm';
import config from '../../ormconfig';

@Module({
  imports: [
    TypeOrmModule.forRoot(config),
    UserModule,
    LessonModule,
    QuestionModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
