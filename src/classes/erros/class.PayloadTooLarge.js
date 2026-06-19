import { ErroBase } from "./class.ErroBase.js";

export class ErroPayloadTooLarge extends ErroBase {
    constructor(message = "Requisição excede o limite de 100KB!") {
        super(message, 413);
    }
};