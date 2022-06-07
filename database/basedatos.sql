-- Si existe base de datos, borrarla
drop database if exists grupo2;

-- Crear base de datos y setearla a español
create database grupo2 character set 'utf8' collate 'utf8_spanish_ci';

-- Seleccionar base de datos grupo2
use grupo2;

-- Crear tablas
-- USUARIOS
create table usuarios(
id int PRIMARY KEY AUTO_INCREMENT,
nombre varchar(50),
correo varchar(80),
passwprd varchar(50),
region_id int
);

-- REGIONES
create table regiones(
id int PRIMARY KEY AUTO_INCREMENT,
nombre varchar(50)
);

-- PLANTAS
create table plantas(
id int PRIMARY KEY AUTO_INCREMENT,
nombre varchar(50),
usuario_id int -- FK usuarios
);

-- REGISTROS
create table registros(
id int PRIMARY KEY AUTO_INCREMENT,
temperatura float,
humedad float,
planta_id int -- FK plantas
);

-- FOREIGN KEYS:
-- USUARIO > REGION
ALTER TABLE usuarios ADD CONSTRAINT FK_region_id FOREIGN KEY (region_id) REFERENCES regiones(id);
-- PLANTA > USUARIO
ALTER TABLE plantas ADD CONSTRAINT FK_usuario_id FOREIGN KEY (usuario_id) REFERENCES usuarios(id);
-- REGISTRO > PlANTA
ALTER TABLE registros ADD CONSTRAINT FK_planta_id FOREIGN KEY (planta_id) REFERENCES plantas(id);

INSERT INTO regiones (nombre) VALUES
('ARICA Y PARINACOTA'),
('TARAPACA'),
('ANTOFAGASTA'),
('ATACAMA'),
('COQUIMBO'),
('VALPARAISO'),
('DEL LIBERTADOR GRAL. BERNARDO OHIGGINS'),
('DEL MAULE'),
('DEL BIOBIO '),
('DE LA ARAUCANIA'),
('DE LOS RIOS'),
('DE LOS LAGOS'),
('AISEN DEL GRAL. CARLOS IBANEZ DEL CAMPO'),
('MAGALLANES Y DE LA ANTARTICA CHILENA'),
('METROPOLITANA DE SANTIAGO');