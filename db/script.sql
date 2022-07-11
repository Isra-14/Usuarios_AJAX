CREATE DATABASE ajax_usuarios CHARACTER SET utf8mb4 COLLATE utf8mb4_bin;
USE ajax_usuarios;

CREATE TABLE usuarios (
    id          INT             PRIMARY KEY     AUTO_INCREMENT,
    nombre      VARCHAR(150),
    edad        INT(3),
    pais        VARCHAR(150),
    correo      VARCHAR(150)
);