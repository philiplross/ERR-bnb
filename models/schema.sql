DROP DATABASE IF EXISTS project_db1;

CREATE DATABASE project_db1;

use project_db1;

CREATE TABLE IF NOT EXISTS sandiego (
 id INT (100) NOT NULL,
 name VARCHAR(255) NULL,
 host_id INT (100) NOT NULL,
 host_name VARCHAR (255) NULL,
 neighbourhood VARCHAR (255) NOT NULL,
 latitude FLOAT( 10, 6 ) NOT NULL,
 longitude FLOAT( 10, 6 ) NOT NULL,
 room_type VARCHAR (255) NOT NULL,
 price INT (100) NOT NULL,
 minimum_nights INT (100) NULL,
 number_of_reviews INT (100) NULL,
 availability_365 INT (100),

 PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS questions (
 id INT (100) NOT NULL AUTO_INCREMENT,
 text VARCHAR(255) NULL,
 createdAt DATETIME,
 updatedAt DATETIME,
 PRIMARY KEY (id)
);
/*below the options for dwelling type are: shared room, private room, or entire home/apt*/
INSERT INTO questions (text) VALUES ("please choose the type of dwelling you'd like to stay in");
/*below choose the price point; box plot to figure averages to come*/
INSERT INTO questions (text) VALUES ("what is your price range?");
/*below questions based on neighborhood type... 95 neighborhoods in db*/ 
INSERT INTO questions (text) VALUES ("what would you like to do while you're in town?");
INSERT INTO questions (text) VALUES ("where would you like to eat?");
INSERT INTO questions (text) VALUES ("would you like to be by the beach?");
INSERT INTO questions (text) VALUES ("would you like to go for fun?");
INSERT INTO questions (text) VALUES ("another question?");
INSERT INTO questions (text) VALUES ("another question?");
INSERT INTO questions (text) VALUES ("another question?");
INSERT INTO questions (text) VALUES ("another question?");
