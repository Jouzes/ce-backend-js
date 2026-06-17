import {ErroBase} from "./class.ErroBase.js";

export class ErroNotFound extends ErroBase {
    constructor(message = "Recurso não encontrado!") {
        super(message, 404);
    }
};