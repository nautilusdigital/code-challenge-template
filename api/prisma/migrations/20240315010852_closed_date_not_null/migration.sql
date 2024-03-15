-- AlterTable
ALTER TABLE "case" ALTER COLUMN "issue_type" SET DATA TYPE TEXT,
ALTER COLUMN "closed_date" DROP NOT NULL;
