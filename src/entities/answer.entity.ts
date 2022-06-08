import { Column, Entity, ManyToOne } from "typeorm";
import { QuestionEntity } from "./question.entity";
import { UserEntity } from "./user.entity";
import { BaseEntity } from "./_base.entity";

@Entity()
export class AnswerEntity extends BaseEntity{
    @Column()
    answer: string

    @ManyToOne(() => QuestionEntity, question => question.answers)
    question: QuestionEntity

    @ManyToOne(() => UserEntity, user => user.answers)
    user: UserEntity
}