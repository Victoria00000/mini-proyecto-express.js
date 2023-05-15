// Routers, otra manera de crear rutas, evitando repetir las partes bases o fijas //

import { Router } from "express";
import { infoCursos } from "../data/cursos.js";

const matematicas = infoCursos.matematicas;

// Defino el router matematicas
export const routerMatematicas = Router();

// La uso
routerMatematicas.get("/", (req, res) => {
  res.send(JSON.stringify(matematicas));
});
// La uso con parametro url dinamico
routerMatematicas.get("/:tema", (req, res) => {
  const tema = req.params.tema;
  const resultado = matematicas.filter((curso) => {
    return curso.tema === tema;
  });

  if (resultado.length === 0) {
    return res.status(404).send(`"El curso ${tema} no existe"`);
  }
  res.status(200).send(JSON.stringify(resultado));
});
