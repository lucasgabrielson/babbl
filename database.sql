
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
	"ticker" VARCHAR(6) UNIQUE NOT NULL,
	"mentions" INT
);

-- DUMMY DATA for Watchist

INSERT INTO "watchlist" (user_id, ticker, mentions) 
VALUES 
(2, 'AAPL', 1576),
(2, 'TSLA', 960),
(2, 'AMD', 581),
(2, 'MSFT', 450),
(2, 'NVDA', 284);


CREATE TABLE articles (
	"id" SERIAL PRIMARY KEY,
	"user_id" INT NOT NULL,
	FOREIGN KEY (user_id) REFERENCES "user"(id),
	"date" VARCHAR(50),
	"title" VARCHAR(255),
	"ticker" VARCHAR(50),
	"mentions" VARCHAR(255),
	"score" VARCHAR(50),
	"link" VARCHAR(255)
);

