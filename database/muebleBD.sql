-- Si existe base de datos, borrarla
drop database if exists pruebaMueble;

-- Crear base de datos y setearla a español
create database pruebaMueble character set 'utf8' collate 'utf8_spanish_ci';

-- Seleccionar base de datos grupo2
use pruebaMueble;

-- Crear tablas
-- USUARIOS
create table muebles(
id int PRIMARY KEY NOT NULL AUTO_INCREMENT,
tipoMueble varchar(50),
tipoMadera varchar(50),
color varchar(50)

);

