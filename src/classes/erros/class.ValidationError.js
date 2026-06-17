import {ErroBadRequest} from "./class.BadRequest.js";

export class ErroValidationError extends ErroBadRequest {
    constructor(erro) {
        const mensagensErro = Object.values(erro.errors).map(erro => erro.message).join("; ");
        super(`Os seguintes erros foram encontrados: ${mensagensErro}`);
    }
};