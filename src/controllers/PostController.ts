import { Request, Response } from "express";
import { autores, posts } from "../database/data";
import Post from "../models/Post";

export default class PostController {
  listar = (req: Request, res: Response) => {
    return res.status(200).json(posts);
  };

  detalhar = (req: Request, res: Response) => {
    const { id } = req.params;

    const post = posts.find((post) => {
      return post.id === id;
    });

    if (post) {
      return res.status(200).json(post);
    }
    return res.status(404).json({ message: "Post não encontrado" });
  };

  cadastrar = (req: Request, res: Response) => {
    const { titulo, descricao, autor_id } = req.body;

    if (!titulo || !descricao || !autor_id) {
      return res
        .status(400)
        .json({ message: "Titulo, descricao e autor_id são obrigatórios" });
    }

    const autor = autores.find((autor) => {
      return autor.id === autor_id;
    });

    if (!autor) {
      return res.status(404).json({ message: "Autor não encontrado" });
    }
    const post = new Post({
      titulo: titulo,
      descricao: descricao,
      autor: autor,
    });
    posts.push(post);
    return res.status(201).json(post);
  };
}
