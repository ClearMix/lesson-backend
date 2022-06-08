import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { QuestionEntity } from "src/entities/question.entity";
import { getRepository, Repository } from "typeorm";


@Injectable()
export class QuestionService {
    constructor(@InjectRepository(QuestionEntity) private questionRepository: Repository<QuestionEntity>){}

    async getQuestionsByLessonId(id: string) {
        console.log(id)
        const result = await getRepository(QuestionEntity)
            .createQueryBuilder("question")
            .leftJoinAndSelect("question.answers", "answer")
            .where("question.lesson = :id", { id: id })
            .getMany();
        return result;
    }

    async createQuestions(questions: QuestionEntity[]) {
        const createdQuestions = this.questionRepository.create(questions);
        const result = await this.questionRepository.save(createdQuestions);
        return result
    }

    inputToQuestionMapper(questions) {
        const resultArray = [];
        questions.forEach(question => {
            resultArray.push({
                question: question.value,
                
            })
        })
    }
}