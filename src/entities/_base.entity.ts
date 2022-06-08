import { CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export abstract class BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @CreateDateColumn()
    createdDateTime: Date

    @UpdateDateColumn()
    lastUpdatedDateTime: Date

}