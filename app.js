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
app.get("/api/cursos", (req, res) => {
  res.send(JSON.stringify(infoCursos));
});

// Definimos la ruta de un curso
app.get("/api/cursos/programacion", (req, res) => {
  res.send(JSON.stringify(infoCursos.programacion));
});

app.get("/api/cursos/matematicas", (req, res) => {
  res.send(JSON.stringify(infoCursos.matematicas));
});

// Definimos la ruta de un curso con parametro url
app.get("/api/cursos/programacion/:lenguaje", (req, res) => {
  const lenguaje = req.params.lenguaje;
  const resultado = infoCursos.programacion.filter((curso) => {
    return curso.lenguaje === lenguaje;
  });

  if (resultado.length === 0) {
    return res.status(404).send(`"El curso ${lenguaje} no existe"`);
  }

  // Ordenamos los resultados con parametros Query // tomamos de ej la ruta: http://localhost:3000/api/cursos/programacion/javascript?orden=vistas
  // para ello se requiere de un "?" seguido de un par "clave = valor" (ej: ?orden=vistas)

  if (req.query.orden === "vistas") {
    resultado.sort((a, b) => {
      return a.vistas - b.vistas;
    });
  }

  res.send(JSON.stringify(resultado));
});

// Definimos la ruta de un curso con parametro url y un tema dinamico
app.get("/api/cursos/matematicas/:tema", (req, res) => {
  const tema = req.params.tema;
  const resultado = infoCursos.matematicas.filter((curso) => {
    return curso.tema === tema;
  });

  if (resultado.length === 0) {
    return res.status(404).send(`"El curso ${tema} no existe"`);
  }

  res.send(JSON.stringify(resultado));
});

// Definimos la ruta de un curso con parametro url, un lenguaje y un nivel dinamico
app.get("/api/cursos/programacion/:lenguaje/:nivel", (req, res) => {
  const lenguaje = req.params.lenguaje;
  const nivel = req.params.nivel;
  const resultado = infoCursos.programacion.filter((curso) => {
    return curso.lenguaje === lenguaje && curso.nivel === nivel;
  });

  if (resultado.length === 0) {
    return res
      .status(404)
      .send(`"El curso ${lenguaje} de nivel ${nivel} no existe"`);
  }

  res.send(JSON.stringify(resultado));
});

// Definimos el puerto
const PORT = process.env.PORT || 3000;

// Iniciamos el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
