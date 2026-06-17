import {filmeModels} from "../../models/filmes/models.filme.js";

export async function cadastrarFilme(req, res, next) {
    try {
        const filmeCadastrado = await filmeModels.create(req.body);
        return res.status(201).json({message: "Cadastro realizado com sucesso!", filmeCadastrado});
    } catch (erro) {
        return next(erro);
    }
}
