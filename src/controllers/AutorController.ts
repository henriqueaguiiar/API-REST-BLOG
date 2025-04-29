import { Request, Response } from "express";
import { autores } from "../database/data";

export default class AutorController {
  listar = (req: Request, res: Response) => {
    return res.status(200).json(autores);
  };
}
