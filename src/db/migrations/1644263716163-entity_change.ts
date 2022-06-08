import {MigrationInterface, QueryRunner} from "typeorm";

export class entityChange1644263716163 implements MigrationInterface {
    name = 'entityChange1644263716163'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "lesson_entity" ADD "title" character varying(500)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "lesson_entity" DROP COLUMN "title"`);
    }

}
