# GRUPO2

## Descripcion del proyecto 
==========================

**Sera una aplicacion web para controlar en tiempo real, temperatura y humedad de plantas.**

Para esto utilizaremos un microcontrolador NodeMCU el cual usa un modulo ESP8266 para conectarse a internet vía wifi, tambien necesitamos un sensor de temperatura y humedad DTH 11, el cual nos entregara los datos que necesitamos.

Programaremos el NodeMCU con el IDE de Arduino e importaremos las librerias que necesitaremos. (Podras encontrar el codigo dentro de la carpeta Arduino).

Una vez que tengamos el codigo que utilizaremos, sera momento de conectarlo a travez de una api con node.js. Esto nos permitira visualizar los datos realizando peticiones POST a nuestro servidor.

Posteriormente conectaremos nuestra API a la base de datos donde se iran almacenando los datos recolectados, para luego mostrarlos a traves de una pagina web.

Elementos que deberia mostrar nuestra aplicacion web:

* usuarios: nombre, correo, contraseña,
* graficos con informacion de planta
* registros por usuarios
* informacion de plantas registradas
* riegos 

Hasta aqui es lo que deberiamos hacer. (Para agregar o editar contenido de este Readme contactar con los integrantes del grupo2)


## Preguntas Frecuentes
======================

**¿Qué es NodeMCU?**

NodeMCU es una plataforma de desarrollo y un firmware de Código abierto escrito en LUA y con una API de red estilo NodeJS. Todas estas características le permiten una gran flexibilidad.

**¿Qué módulo usa el microcontrolador NodeMCU?**

Usa un módulo ESP8266 para conectarse a Internet vía WiFi.

**¿Que es un modulo ESP8266?**

Se trata de un chip integrado con conexión WiFi y compatible con el protocolo TCP/IP. El objetivo principal es dar acceso a cualquier microcontrolador a una red.

**¿Cómo se puede usar el microcontrolador NodeMCU?**

Algunas de las aplicaciones del microcontrolador NodeMCU son la siguientes

* Microcontrolador del Internet de las Cosas.
* Microcontrolador de propósito general.
* Control y automatización.

