import { Router } from "express";
import AutorController from "../controllers/AutorController";

const route = Router();

const autorControlador = new AutorController();

route.get("/autores", autorControlador.listar);
route.get("/autores/:id", autorControlador.detalhar);
route.post("/autores/", autorControlador.cadastrar);
route.put("/autores/:id", autorControlador.editar);
route.delete("/autores/:id", autorControlador.deletar);

route.get("/posts", autorControlador.listar);
route.get("/posts/:id", autorControlador.detalhar);
route.post("/posts/", autorControlador.cadastrar);

export default route;
