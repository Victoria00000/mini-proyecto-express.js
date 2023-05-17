// Routers, otra manera de crear rutas, evitando repetir las partes bases o fijas //

import { Router } from "express";
import { infoCursos } from "../data/cursos.js";
import express from "express";

const programacion = infoCursos.programacion;

// Defino el router para programacion //
export const routerProgramacion = Router();
// Configuro el router para programacion, para que use el metodo json, aquí se usa un middleware //
routerProgramacion.use(express.json());

// La uso y obtengo los cursos con metodo GET //
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

// Realizo un POST para AGREGAR un nuevo curso //
routerProgramacion.post("/", (req, res) => {
  const cursoNuevo = req.body;
  programacion.push(cursoNuevo);
  res.status(200).send(JSON.stringify(programacion));
});

// Realizo un PUT para REEMPLAZAR un curso x otro //
routerProgramacion.put("/:id", (req, res) => {
  const id = req.params.id;
  const cursoModificado = req.body;
  const resultado = programacion.map((curso) => {
    if (curso.id == id) {
      return cursoModificado;
    }
    return curso;
  });
  res.status(200).send(JSON.stringify(resultado));
});

// Realizo un PATCH para MODIFICAR un curso //
routerProgramacion.patch("/:id", (req, res) => {
  const id = req.params.id;
  const cursoModificado = req.body;
  const resultado = programacion.map((curso) => {
    if (curso.id == id) {
      return { ...curso, ...cursoModificado };
    }
    return curso;
  });
  res.status(200).send(JSON.stringify(resultado));
});

// Realizo un DELETE para ELIMINAR un curso //
routerProgramacion.delete("/:id", (req, res) => {
  const id = req.params.id;
  const resultado = programacion.filter((curso) => {
    return curso.id != id;
  });
  res.status(200).send(JSON.stringify(resultado));
});
