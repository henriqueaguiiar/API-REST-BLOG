import { Router } from "express";

const route = Router();

route.get("/", (req, res) => {
  res.json("OK");
});

export default route;
