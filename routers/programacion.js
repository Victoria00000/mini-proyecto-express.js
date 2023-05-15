// Routers, otra manera de crear rutas, evitando repetir las partes bases o fijas //

import { Router } from "express";
import { infoCursos } from "../data/cursos.js";

const programacion = infoCursos.programacion;

// Defino el router para programacion
export const routerProgramacion = Router();

// La uso
routerProgramacion.get("/", (req, res) => {
  res.send(JSON.stringify(programacion));
});
// La uso con parametro url dinamico
routerProgramacion.get("/:lenguaje", (req, res) => {
  const lenguaje = req.params.lenguaje;
  const resultado = programacion.filter((curso) => {
    return curso.lenguaje === lenguaje;
  });

  if (resultado.length === 0) {
    return res.status(404).send(`"El curso ${lenguaje} no existe"`);
  }
  res.status(200).send(JSON.stringify(resultado));
});
