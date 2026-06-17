import {filmeModels} from "../../models/filmes/models.filme.js";
import {ErroNotFound} from "../../classes/erros/class.NotFound.js";

export async function listarFilme(req, res, next) {
    try {
        const filme = await filmeModels.findById(req.params.id);
        if (!filme) {
            return next(new ErroNotFound("Filme não encontrado!"));
        }

        return res.status(200).json({message: "Filme listado com sucesso!", filme});
    } catch (erro) {
        return next(erro);
    }
}
