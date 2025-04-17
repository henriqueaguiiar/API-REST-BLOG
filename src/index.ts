import "dotenv/config";
import express from "express";

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  res.json("OK");
});

const PORT = process.env.PORT || 8000;
server.listen(PORT, () => {
  console.log(`O servidor esta rodando na porta ${PORT}`);
});
