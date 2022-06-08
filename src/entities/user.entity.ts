import { Column, Entity, JoinTable, ManyToMany, OneToMany } from "typeorm";
import { AnswerEntity } from "./answer.entity";
import { LessonEntity } from "./lesson.entity";
import { BaseEntity } from "./_base.entity";

@Entity()
export class UserEntity extends BaseEntity {
    @Column({type: 'varchar', length: 200, nullable: false})
    password: string

    @Column({ type: 'varchar', length: 200, nullable: false })
    username: string

    @Column({type: 'varchar',length: 200, nullable: false})
    email:string

    @ManyToMany(() => LessonEntity, lesson => lesson.students, { nullable: true })
    @JoinTable()
    lessons: LessonEntity[]

    @OneToMany(() => AnswerEntity, answer => answer.user, { nullable: true })
    answers: AnswerEntity[]

    @OneToMany(() => LessonEntity, lesson => lesson.creator, { nullable: true })
    createdLessons: LessonEntity[]
}