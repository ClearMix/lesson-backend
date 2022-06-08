import {MigrationInterface, QueryRunner} from "typeorm";

export class EntityMigration1641781233973 implements MigrationInterface {
    name = 'EntityMigration1641781233973'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user_entity" ("id" SERIAL NOT NULL, "createdDateTime" TIMESTAMP NOT NULL DEFAULT now(), "lastUpdatedDateTime" TIMESTAMP NOT NULL DEFAULT now(), "password" character varying(200) NOT NULL, "username" character varying(200) NOT NULL, "email" character varying(200) NOT NULL, CONSTRAINT "PK_b54f8ea623b17094db7667d8206" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "lesson_entity" ("id" SERIAL NOT NULL, "createdDateTime" TIMESTAMP NOT NULL DEFAULT now(), "lastUpdatedDateTime" TIMESTAMP NOT NULL DEFAULT now(), "description" character varying(500) NOT NULL, "creatorId" integer, CONSTRAINT "PK_b55495de2aa48f9e1164ebac9a9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "question_entity" ("id" SERIAL NOT NULL, "createdDateTime" TIMESTAMP NOT NULL DEFAULT now(), "lastUpdatedDateTime" TIMESTAMP NOT NULL DEFAULT now(), "question" character varying(500) NOT NULL, "lessonId" integer, CONSTRAINT "PK_14a0a509f33d8cd3a96a448dcd7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "answer_entity" ("id" SERIAL NOT NULL, "createdDateTime" TIMESTAMP NOT NULL DEFAULT now(), "lastUpdatedDateTime" TIMESTAMP NOT NULL DEFAULT now(), "answer" character varying NOT NULL, "questionId" integer, "userId" integer, CONSTRAINT "PK_3158283e703015676d2e7c7d862" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user_entity_lessons_lesson_entity" ("userEntityId" integer NOT NULL, "lessonEntityId" integer NOT NULL, CONSTRAINT "PK_0fb7db088ff48698b81e2a8a076" PRIMARY KEY ("userEntityId", "lessonEntityId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_bcb9a9c92c3f89929cf89b9524" ON "user_entity_lessons_lesson_entity" ("userEntityId") `);
        await queryRunner.query(`CREATE INDEX "IDX_92b0b0d3355d4e27ca5e5fe1ba" ON "user_entity_lessons_lesson_entity" ("lessonEntityId") `);
        await queryRunner.query(`ALTER TABLE "lesson_entity" ADD CONSTRAINT "FK_e8ef23291ebac1c357c3efdb0e7" FOREIGN KEY ("creatorId") REFERENCES "user_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "question_entity" ADD CONSTRAINT "FK_2170e047b3b3d0ee0e2c112c125" FOREIGN KEY ("lessonId") REFERENCES "lesson_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "answer_entity" ADD CONSTRAINT "FK_46f9a8790125a0d72234dda1614" FOREIGN KEY ("questionId") REFERENCES "question_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "answer_entity" ADD CONSTRAINT "FK_02f38cfccc17f6bf353740f0206" FOREIGN KEY ("userId") REFERENCES "user_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_entity_lessons_lesson_entity" ADD CONSTRAINT "FK_bcb9a9c92c3f89929cf89b95243" FOREIGN KEY ("userEntityId") REFERENCES "user_entity"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "user_entity_lessons_lesson_entity" ADD CONSTRAINT "FK_92b0b0d3355d4e27ca5e5fe1ba9" FOREIGN KEY ("lessonEntityId") REFERENCES "lesson_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_entity_lessons_lesson_entity" DROP CONSTRAINT "FK_92b0b0d3355d4e27ca5e5fe1ba9"`);
        await queryRunner.query(`ALTER TABLE "user_entity_lessons_lesson_entity" DROP CONSTRAINT "FK_bcb9a9c92c3f89929cf89b95243"`);
        await queryRunner.query(`ALTER TABLE "answer_entity" DROP CONSTRAINT "FK_02f38cfccc17f6bf353740f0206"`);
        await queryRunner.query(`ALTER TABLE "answer_entity" DROP CONSTRAINT "FK_46f9a8790125a0d72234dda1614"`);
        await queryRunner.query(`ALTER TABLE "question_entity" DROP CONSTRAINT "FK_2170e047b3b3d0ee0e2c112c125"`);
        await queryRunner.query(`ALTER TABLE "lesson_entity" DROP CONSTRAINT "FK_e8ef23291ebac1c357c3efdb0e7"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_92b0b0d3355d4e27ca5e5fe1ba"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_bcb9a9c92c3f89929cf89b9524"`);
        await queryRunner.query(`DROP TABLE "user_entity_lessons_lesson_entity"`);
        await queryRunner.query(`DROP TABLE "answer_entity"`);
        await queryRunner.query(`DROP TABLE "question_entity"`);
        await queryRunner.query(`DROP TABLE "lesson_entity"`);
        await queryRunner.query(`DROP TABLE "user_entity"`);
    }

}
