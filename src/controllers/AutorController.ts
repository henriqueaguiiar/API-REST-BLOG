import { Request, Response } from "express";
import { autores } from "../database/data";
import Autor from "../models/Autor";

export default class AutorController {
  listar = (req: Request, res: Response) =>{
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

  cadastrar = (req: Request, res: Response) =>{
    const { nome, idade} = req.body


    if(!nome || !idade){
      return res.status(400).json({ message: "Nome e idade são obrigatórios" });
    }
    const autor = new Autor({ 
      nome: nome, 
      idade: idade 
    });

    autores.push(autor);
    return res.status(201).json(autor);
  }

  editar = (req: Request, res: Response) => {
    const { id } = req.params;
    const { nome, idade } = req.body;

    if(!nome || !idade){
      return res.status(400).json({ message: "Nome e idade são obrigatórios" });
    }

    const autor = autores.find((autor) => {
      return autor.id === id;
    });

    if (autor) {
      autor.nome = nome;
      autor.idade = idade;
      return res.status(204).json();
    }
    return res.status(404).json({ message: "Autor não encontrado" });
  };

}
