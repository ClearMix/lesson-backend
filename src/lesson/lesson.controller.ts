import { Param, Controller, Get, Res, HttpStatus, Post } from "@nestjs/common";
import { LessonService } from './lesson.service';
@Controller('/lesson')
export class LessonController {
    constructor(public lessonService: LessonService){}

    @Get(':id')
    async getLessons(@Res() res, @Param('id') studentId) {
        const result = await this.lessonService.getLessonsByStudentId(studentId)
        return res.status(HttpStatus.OK).json({
            message: "Successfully retrieves Lessons By StudentId",
            lessons: result
        })
    }

    @Post('')
    async postLesson(@Res() res) {
        try {
            const { description, userId, questions, title } = res;
            const result = await this.lessonService.createLesson({ description, userId, questions, title })
            return res.status(HttpStatus.OK).json({
                message: "Successfully creates a lesson",
                lesson: result
            })
        }
        catch (error) {
            console.error(error)
        }
    }
}