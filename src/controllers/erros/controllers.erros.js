import mongoose from "mongoose";
import {ErroBase} from "../../classes/erros/class.ErroBase.js";
import {ErroBadRequest} from "../../classes/erros/class.BadRequest.js";
import {ErroValidationError} from "../../classes/erros/class.ValidationError.js";
import {ErroPayloadTooLarge} from "../../classes/erros/class.PayloadTooLarge.js";

export function errosController(erro, req, res, next) {
    if (erro instanceof mongoose.Error.CastError) {
        new ErroBadRequest("ID inválido!").enviarResposta(res);
    } else if (erro instanceof mongoose.Error.ValidationError) {
        new ErroValidationError(erro).enviarResposta(res);
    } else if (erro instanceof SyntaxError && erro.status === 400 && "body" in erro) {
        new ErroBadRequest("JSON inválido!").enviarResposta(res);
    } else if (erro.type === "entity.too.large") {
        new ErroPayloadTooLarge().enviarResposta(res);
    } else if (erro instanceof ErroBase) {
        erro.enviarResposta(res);
    } else {
        console.error(erro);
        new ErroBase().enviarResposta(res);
    }
};
