import { MigrationInterface, QueryRunner } from "typeorm";

export class InitMigration1702320348157 implements MigrationInterface {
    name = 'InitMigration1702320348157'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "category" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying NOT NULL, CONSTRAINT "UQ_9f16dbbf263b0af0f03637fa7b5" UNIQUE ("title"), CONSTRAINT "PK_9c4e4a89e3674fc9f382d733f03" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "prompt" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying NOT NULL, "description" character varying NOT NULL, "body" character varying NOT NULL, "categoryId" uuid, CONSTRAINT "UQ_f7fa571c91bee07937b8af45859" UNIQUE ("title"), CONSTRAINT "PK_d8e3aa07a95560a445ad50fb931" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "prompt" ADD CONSTRAINT "FK_69a631026d013e022b8042fb41a" FOREIGN KEY ("categoryId") REFERENCES "category"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "prompt" DROP CONSTRAINT "FK_69a631026d013e022b8042fb41a"`);
        await queryRunner.query(`DROP TABLE "prompt"`);
        await queryRunner.query(`DROP TABLE "category"`);
    }

}
