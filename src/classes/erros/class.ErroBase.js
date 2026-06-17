export class ErroBase extends Error {
       constructor(message = "Erro interno do servidor!", statusCode = 500) {
        super(message);
        this.message = message;
        this.statusCode = statusCode;

        Error.captureStackTrace?.(this, this.constructor);
       }

       enviarResposta(res) {
        res.status(this.statusCode).json({message: this.message});
       }
};