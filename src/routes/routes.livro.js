import express from "express";
import {listarLivros} from "../controllers/livros/get.listarLivros.js";
export const routerLivros = express.Router();

routerLivros.get("/getLivros", listarLivros);