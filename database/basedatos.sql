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
clave varchar(50)
);

CREATE table dispositivos(
id int NOT NULL AUTO_INCREMENT,
nombre varchar(30),
temperatura float,
usuario_id int,
primary key(id),
foreign key(usuario_id) references usuarios(id)
);

-- TABLA RELACIONAL DISPOSITIVO PLANTA
CREATE table dispositivo_usuario(
id int NOT NULL AUTO_INCREMENT,
dispositivo_id int,
usuario_id int,PRIMARY KEY(id),
foreign key(dispositivo_id) references dispositivos(id),
foreign key(usuario_id) references usuarios(id)
);

-- PLANTAS
create table plantas(
id int PRIMARY KEY AUTO_INCREMENT,
nombre varchar(50),
dispositivo_id int -- FK usuariosforeign key(dispositivo_id) references dispositivos(id)
);

-- REGISTROS
create table registros(
id int PRIMARY KEY AUTO_INCREMENT,
dispositivo_id int -- FK dispositivosforeign key(dispositivo_id) references dispositivos(id)
);

-- FOREIGN KEYS:
-- DISPOSITIVOS > USUARIO
ALTER TABLE dispositivos ADD CONSTRAINT FK_usuario_id FOREIGN KEY (usuario_id) REFERENCES usuarios(id);
-- DISPOSITIVO_USUARIO > USUARIO
ALTER TABLE dispositivo_usuario ADD CONSTRAINT FK_usuario2_id FOREIGN KEY (usuario_id) REFERENCES usuarios(id);
-- DISPOSITIVO_USUARIO > DISPOSITIVOS
ALTER TABLE dispositivo_usuario ADD CONSTRAINT FK_dispositivo_id FOREIGN KEY (dispositivo_id) REFERENCES dispositivos(id);
-- PLANTAS > DISPOSITIVOS
ALTER TABLE plantas ADD CONSTRAINT FK_dispositivo2_id FOREIGN KEY (dispositivo_id) REFERENCES dispositivos(id);
-- REGISTROS > DISPOSITIVOS
ALTER TABLE REGISTROS ADD CONSTRAINT FK_dispositivo3_id FOREIGN KEY (dispositivo_id) REFERENCES dispositivos(id);