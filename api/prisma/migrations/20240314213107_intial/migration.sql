CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- CreateTable
CREATE TABLE "contact" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "frist_name" VARCHAR(64) NOT NULL,
    "last_name" VARCHAR(64) NOT NULL,
    "category" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "region_id" UUID NOT NULL,
    "region_other" TEXT,
    "created_at" DATE NOT NULL DEFAULT CURRENT_DATE,

    CONSTRAINT "contact_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "region" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "name" VARCHAR(255) NOT NULL,

    CONSTRAINT "region_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "case" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "client_id" UUID NOT NULL,
    "region_id" UUID NOT NULL,
    "issue_type" UUID NOT NULL,
    "notes" TEXT NOT NULL,
    "status_id" UUID NOT NULL,
    "review_date" DATE NOT NULL,
    "closed_date" DATE NOT NULL,
    "created_at" DATE NOT NULL DEFAULT CURRENT_DATE,
    "updated_at" DATE NOT NULL,

    CONSTRAINT "cases_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "status" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "name" TEXT NOT NULL,

    CONSTRAINT "statuses_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "case_caller" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "case_id" UUID NOT NULL,
    "caller_id" UUID NOT NULL,

    CONSTRAINT "case_callers_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "case_attachment" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "case_id" UUID NOT NULL,
    "file_name" TEXT NOT NULL,

    CONSTRAINT "case_attachment_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "user_pk" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "contact_email_key" ON "contact"("email");

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- AddForeignKey
ALTER TABLE "contact" ADD CONSTRAINT "region_id_fk" FOREIGN KEY ("region_id") REFERENCES "region"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "case" ADD CONSTRAINT "status_id_fk" FOREIGN KEY ("status_id") REFERENCES "status"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "case" ADD CONSTRAINT "region_id_fk" FOREIGN KEY ("region_id") REFERENCES "region"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "case" ADD CONSTRAINT "client_id_fk" FOREIGN KEY ("client_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "case_caller" ADD CONSTRAINT "case_id_fk" FOREIGN KEY ("case_id") REFERENCES "case"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "case_caller" ADD CONSTRAINT "caller_id_fk" FOREIGN KEY ("caller_id") REFERENCES "contact"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "case_attachment" ADD CONSTRAINT "status_id_fk" FOREIGN KEY ("case_id") REFERENCES "case"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
