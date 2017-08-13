DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

CREATE TABLE burgers {
	id int NOT NULL AUTO_INCREMENT,
	burger_name VARCHAR (75),
	devoured BOOLEAN,
	date 
};