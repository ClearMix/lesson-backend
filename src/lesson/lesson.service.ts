import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { LessonEntity } from "src/entities/lesson.entity";
import { QuestionEntity } from "src/entities/question.entity";
import { UserEntity } from "src/entities/user.entity";
import { QuestionService } from "src/question/question.service";
import { UserService } from "src/user/user.service";
import { Repository } from "typeorm";

interface ICreateLesson {
    description: string,
    userId: string,
    questions: QuestionEntity[],
    title: string
}

@Injectable()
export class LessonService {
    constructor(
        @InjectRepository(LessonEntity) private lessonRepo: Repository<LessonEntity>,
        private questionService: QuestionService,
        private userService: UserService
    ){}

    getLessonsByCreatorId(creatorId: string): Promise<LessonEntity[]> {
        return this.lessonRepo.findByIds([creatorId]);
    }

    getLessonsByStudentId(studentId: string): Promise<LessonEntity[]> {
        return this.lessonRepo.findByIds([studentId], {});
    }
    
    async createLesson({ description, userId, questions, title }: ICreateLesson) {
        const user = await this.userService.getUser(userId);
        const result = await this.questionService.createQuestions(questions);
        console.log(result);

        const newLesson = this.lessonRepo.create({
            description,
            creator: user,
            questions: result,
            title
        })
        return await this.lessonRepo.save(newLesson);
    }
}