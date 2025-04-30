import "dotenv/config";
import express from "express";
import route from "./routes/route";

const server = express();

server.use(express.json());

server.use(route);

const PORT = process.env.PORT || 8000;
server.listen(PORT, () => {
  console.log(`O servidor esta rodando na porta ${PORT}`);
});
