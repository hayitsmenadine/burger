DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
	id int NOT NULL AUTO_INCREMENT,
	burger_name VARCHAR (75) NOT NULL,
	devoured BOOLEAN DEFAULT NULL,
	date TIMESTAMP,
	PRIMARY KEY (id)
);