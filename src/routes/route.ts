import { Router } from "express";
import AutorController from "../controllers/AutorController";

const route = Router();

const autorControlador = new AutorController();

route.get("/autores", autorControlador.listar);

export default route;
