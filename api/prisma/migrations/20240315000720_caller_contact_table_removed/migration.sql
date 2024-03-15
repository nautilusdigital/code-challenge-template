/*
  Warnings:

  - You are about to drop the `case_caller` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `caller_id` to the `case` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `case` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "case" DROP CONSTRAINT "client_id_fk";

-- DropForeignKey
ALTER TABLE "case_caller" DROP CONSTRAINT "caller_id_fk";

-- DropForeignKey
ALTER TABLE "case_caller" DROP CONSTRAINT "case_id_fk";

-- AlterTable
ALTER TABLE "case" ADD COLUMN     "caller_id" UUID NOT NULL,
ADD COLUMN     "user_id" UUID NOT NULL;

-- DropTable
DROP TABLE "case_caller";

-- AddForeignKey
ALTER TABLE "case" ADD CONSTRAINT "client_id_fk" FOREIGN KEY ("client_id") REFERENCES "contact"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "case" ADD CONSTRAINT "caller_id_fk" FOREIGN KEY ("caller_id") REFERENCES "contact"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "case" ADD CONSTRAINT "user_id_fk" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
