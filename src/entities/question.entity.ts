import { Column, Entity, ManyToOne, OneToMany } from "typeorm";
import { AnswerEntity } from "./answer.entity";
import { LessonEntity } from "./lesson.entity";
import { BaseEntity } from "./_base.entity";

@Entity()
export class QuestionEntity extends BaseEntity {
    @Column({
        type: 'varchar',
        length: 500
    })
    question: string

    @OneToMany(() => AnswerEntity, answer => answer.question)
    answers: AnswerEntity[]

    @ManyToOne(() => LessonEntity, lesson => lesson.questions)
    lesson: LessonEntity
}