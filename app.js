// Importamos express ES6 // seria igual  a: const express = require("express"); en common js;
import express from "express";
// Importamos el array de cursos
import { infoCursos } from "./cursos.js";

// Inicializamos express
const app = express();

// Definimos la ruta raiz
app.get("/", (req, res) => {
  res.send("Hola Mundo con express");
});

// Definimos la ruta de cursos
app.get("/cursos", (req, res) => {
  res.send(infoCursos);
});

// Definimos el puerto
const PORT = process.env.PORT || 3000;

// Iniciamos el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
