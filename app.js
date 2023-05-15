// App con Express // Con { Router } //
// Importamos express ES6 // seria igual  a: const express = require("express"); en common js; //
import express from "express";
// Importamos el array de cursos (ES6) //
import { infoCursos } from "./data/cursos.js";
// Importamos router // En common js sería: const router = require("express").Router(); || const router = express.Router(); //
import { Router } from "express";
import { routerMatematicas } from "./routers/matematicas.js";
import { routerProgramacion } from "./routers/programacion.js";

// Inicializamos express //
const app = express();

// Definimos la ruta raiz //
app.get("/", (req, res) => {
  res.send("Hola Mundo con express");
});

// Definimos la ruta de todos los cursos //
app.get("/api/cursos", (req, res) => {
  res.send(JSON.stringify(infoCursos));
});

// Routers, otra manera de crear rutas, evitando repetir las partes bases o fijas //

// Definimos la url base para el tema programacion
app.use("/api/cursos/programacion", routerProgramacion);

// Defino la url base para el tema matematicas
app.use("/api/cursos/matematicas", routerMatematicas);

// Definimos el puerto //
const PORT = process.env.PORT || 3000;

// Iniciamos el servidor //
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
