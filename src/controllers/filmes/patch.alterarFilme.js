import {filmeModels} from "../../models/filmes/models.filme.js";
import {ErroNotFound} from "../../classes/erros/class.NotFound.js";
import {ErroBadRequest} from "../../classes/erros/class.BadRequest.js";

export async function alterarFilme(req, res, next) {
    let camposAlterados = {};
    try {
    if (req.body.nome !== undefined) {
        camposAlterados.nome = req.body.nome;
    }

    if (req.body.preco !== undefined) {
        camposAlterados.preco = req.body.preco;
    }

    if (req.body.genero !== undefined) {
        camposAlterados.genero = req.body.genero;
    }

    if (req.body.autor !== undefined) {
        camposAlterados.autor = req.body.autor;
    }

    if (Object.keys(camposAlterados).length === 0) {
        return next(
            new ErroBadRequest("Informe ao menos um campo válido para atualizar!")
        );
    }

        const filmeAlterado = await filmeModels.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        if (!filmeAlterado) {
            return next(new ErroNotFound("Filme não encontrado!"));
        }

        return res.status(200).json({message: "Filme alterado com sucesso!", filmeAlterado});
    } catch (erro) {
        return next(erro);
    }
}
