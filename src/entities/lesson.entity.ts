import { QuestionController } from "src/question/question.controller";
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany } from "typeorm";
import { QuestionEntity } from "./question.entity";
import { UserEntity } from "./user.entity";
import { BaseEntity } from "./_base.entity";

@Entity()
export class LessonEntity extends BaseEntity {
    @Column({
        type: 'varchar',
        length: 500,
        nullable: false
    })
    description: string

    @Column({
        type: 'varchar',
        length: 500,
        nullable: true
    })
    title: string

    @ManyToMany(() => UserEntity, (user) => user.lessons, { nullable: true })
    students: UserEntity[]

    @OneToMany(() => QuestionEntity, question => question.lesson, { nullable: false })
    questions: QuestionEntity[]

    @ManyToOne(() => UserEntity, user => user.createdLessons, { nullable: true })
    creator: UserEntity
}