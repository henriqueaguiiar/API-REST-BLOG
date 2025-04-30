import { Router } from "express";
import AutorController from "../controllers/AutorController";

const route = Router();

const autorControlador = new AutorController();

route.get("/autores", autorControlador.listar);
route.get("/autores/:id", autorControlador.detalhar);
route.post("/autores/", autorControlador.cadastrar);

export default route;
