import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { LessonController } from "./lesson.controller";
import { LessonService } from "./lesson.service";
import { LessonEntity } from "src/entities/lesson.entity";
import { QuestionService } from "src/question/question.service";
import { QuestionEntity } from "src/entities/question.entity";
import { UserService } from "src/user/user.service";
import { UserModule } from "src/user/user.module";
import { UserEntity } from "src/entities/user.entity";

@Module({
    imports: [
        TypeOrmModule.forFeature([LessonEntity, QuestionEntity, UserEntity]),
    ],
    controllers: [LessonController],
    providers: [LessonService, QuestionService, UserService],
})

export class LessonModule {};
