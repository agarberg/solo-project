-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!

CREATE TABLE "user" (
"id" SERIAL PRIMARY KEY,
"password" VARCHAR(500) NOT NULL,
"full_name" VARCHAR(50),
"username" VARCHAR (80) UNIQUE NOT NULL,
"date_created" DATE,
"email" VARCHAR(30)
);

CREATE TABLE "jobs" (
"id" SERIAL PRIMARY KEY,
"user_id" VARCHAR(50),
"description" VARCHAR(250),
"time_actual" VARCHAR(20),
"time_paid" VARCHAR(20),
"notes" VARCHAR(250),
"photo" VARCHAR(40),
"ref_ro_num" VARCHAR(20),
"date" DATE);