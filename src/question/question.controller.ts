import { Controller, Get, Param, Post } from "@nestjs/common";
import { QuestionService } from './question.service';

@Controller('question')
export class QuestionController {
    constructor(
        public questionService: QuestionService
    ){}

    @Get(':id')
    async getQuestions(
        @Param('id') lessonId: string
    ) {
      console.log('hit')
        try {
          const questions = await this.questionService.getQuestionsByLessonId(lessonId);  
          console.log(questions)
          return {
            questions
          }
        } catch(err) {
          console.log(err);
        }
    }
}