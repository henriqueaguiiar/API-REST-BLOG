import { Request, Response } from "express";
import { posts } from "../database/data";

export default class PostController {
  listar = (req: Request, res: Response) => {
    return res.status(200).json(posts);
  };
}
