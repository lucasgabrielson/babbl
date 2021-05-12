
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE watchlist (
	"id" SERIAL PRIMARY KEY,
	"user_id" INT NOT NULL,
	FOREIGN KEY (user_id) REFERENCES "user"(id),
	"ticker" VARCHAR(6) UNIQUE NOT NULL
);

CREATE TABLE articles (
	"id" SERIAL PRIMARY KEY,
	"user_id" INT NOT NULL,
	FOREIGN KEY (user_id) REFERENCES "user"(id),
	slug VARCHAR(255),
	ticker VARCHAR(6) UNIQUE NOT NULL
);