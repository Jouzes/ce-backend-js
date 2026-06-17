export function listarLivros(req, res) {
    try {
        res.status(200).json({message: "Livros listaoos com sucesso!"});
    } catch (erro) {
        res.status(500).json({message: "deu erro ai man"});
    }
};