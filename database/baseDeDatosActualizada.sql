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
apellido varchar(50),
correo varchar(80),
clave varchar(50)

);

CREATE table dispositivos(
id int NOT NULL AUTO_INCREMENT,
nombre varchar(30),
sensor_temperatura boolean,
sensor_humedad boolean,
<<<<<<< HEAD:database/basedatos.sql
usuario_id int,
=======
>>>>>>> ae9bef2e80191ec42776f875b40a1c3281b64e26:database/baseDeDatosActualizada.sql
primary key(id)
); 

-- TABLA RELACIONAL DISPOSITIVO PLANTA
CREATE table dispositivo_usuario(
id int NOT NULL AUTO_INCREMENT,
dispositivo_id int,
usuario_id int,

PRIMARY KEY(id)
);

-- PLANTAS
CREATE table plantas(
id int NOT NULL AUTO_INCREMENT,
nombre varchar(50),
fecha_plantacion varchar(30),
dispositivo_id int, -- FK usuarios
PRIMARY KEY(id)
);

-- REGISTROS
create table mediciones(
id int PRIMARY KEY AUTO_INCREMENT,
temperatura float,
humedad float,
fecha datetime,
dispositivo_id int -- FK dispositivos
);

-- FOREIGN KEYS:
-- DISPOSITIVO_USUARIO > USUARIO
ALTER TABLE dispositivo_usuario ADD CONSTRAINT FK_usuario2_id FOREIGN KEY (usuario_id) REFERENCES usuarios(id);
-- DISPOSITIVO_USUARIO > DISPOSITIVOS
ALTER TABLE dispositivo_usuario ADD CONSTRAINT FK_dispositivo_id FOREIGN KEY (dispositivo_id) REFERENCES dispositivos(id);
-- PLANTAS > DISPOSITIVOS
ALTER TABLE plantas ADD CONSTRAINT FK_dispositivo2_id FOREIGN KEY (dispositivo_id) REFERENCES dispositivos(id);
-- REGISTROS > DISPOSITIVOS
ALTER TABLE mediciones ADD CONSTRAINT FK_dispositivo3_id FOREIGN KEY (dispositivo_id) REFERENCES dispositivos(id);