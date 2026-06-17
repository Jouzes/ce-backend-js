import express from "express";
import {routerLivros} from "./routes/routes.livro.js";

export const app = express();
app.use(routerLivros);

