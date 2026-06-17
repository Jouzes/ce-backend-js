import express from "express";
import {listarFilmes} from "../controllers/filmes/get.listarFilmes.js";
import {listarFilme} from "../controllers/filmes/get.listarFilme.js";
import {cadastrarFilme} from "../controllers/filmes/post.cadastrarFilme.js";
import {alterarFilme} from "../controllers/filmes/patch.alterarFilme.js";
import {deletarFilme} from "../controllers/filmes/delete.deletarFilme.js";

export const routerFilmes = express.Router();

// Mantida por compatibilidade com o frontend atual.
routerFilmes.get("/getFilmes", listarFilmes);
routerFilmes.get("/filmes", listarFilmes);
routerFilmes.get("/filmes/:id", listarFilme);
routerFilmes.post("/filmes", cadastrarFilme);
routerFilmes.patch("/filmes/:id", alterarFilme);
routerFilmes.delete("/filmes/:id", deletarFilme);
