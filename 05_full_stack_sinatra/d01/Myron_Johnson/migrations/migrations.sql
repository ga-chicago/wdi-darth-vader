#1 create database
CREATE DATABASE todo-items;

#2 connect to db
\c todo_items

#3 create table
CREATE TABLE todo_list (id SERIAL PRIMARY KEY, name varchar(255), description varchar(255));
