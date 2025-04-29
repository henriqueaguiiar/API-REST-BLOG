import { Request, Response } from "express";
import { autores } from "../database/data";

export default class AutorController {
  listar = (req: Request, res: Response) => {
    return res.status(200).json(autores);
  };

  detalhar = (req: Request, res: Response) => {
    const { id } = req.params;

    const autor = autores.find((autor) => {
      return autor.id === id;
    });

    if (autor) {
      return res.status(200).json(autor);
    }
    return res.status(404).json({ message: "Autor não encontrado" });
  };
}
