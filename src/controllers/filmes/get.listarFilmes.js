import {filmeModels} from "../../models/filmes/models.filme.js";

export async function listarFilmes(req, res, next) {
    try {
        const listaFilmes = await filmeModels.find();
        res.status(200).json({message: "Filmes listados com sucesso!", listaFilmes});
    } catch (erro) {
        next(erro);
    }
}
