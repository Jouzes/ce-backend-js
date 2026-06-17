import {app} from "./src/app.js";
import {conectaBD} from "./src/conexaoBD/func.conectaBD.js";

const PORT = process.env.PORT || 8000;

try {
    await conectaBD();

    app.listen(PORT, () => {
        console.log(`Servidor on`);
    });
} catch (erro) {
    console.error("Não foi possível iniciar o servidor:", erro.message);
    process.exitCode = 1;
}
