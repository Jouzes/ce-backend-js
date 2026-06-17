import {filmeModels} from "../../models/filmes/models.filme.js";
import {ErroNotFound} from "../../classes/erros/class.NotFound.js";

export async function deletarFilme(req, res, next) {
    try {
        const filmeDeletado = await filmeModels.findByIdAndDelete(req.params.id);
        if (!filmeDeletado) {
            return next(new ErroNotFound("Filme não encontrado!"));
        }

        return res.status(200).json({message: "Filme deletado com sucesso!"});
    } catch (erro) {
        return next(erro);
    }
}
