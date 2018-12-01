DROP DATABASE IF EXISTS project_db1;

CREATE DATABASE project_db1;

use project_db1;

CREATE TABLE syndicated (
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
