import express from "express";
import {routerFilmes} from "./routes/routes.filme.js";
import {errosController} from "./controllers/erros/controllers.erros.js";
import {ErroNotFound} from "./classes/erros/class.NotFound.js";
import cors from "cors";

export const app = express();
app.use(express.json({limit: "100kb"}));
app.use(cors({origin: "*"}));
app.use(routerFilmes);
app.use((req, res, next) => next(new ErroNotFound("Rota não encontrada!")));
app.use(errosController);
