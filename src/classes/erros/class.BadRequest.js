import {ErroBase} from "./class.ErroBase.js";

export class ErroBadRequest extends ErroBase {
    constructor(message = "Requisição incorreta!") {
        super(message, 400);
    }
};