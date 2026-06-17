import mongoose from "mongoose";

const filmeSchema = new mongoose.Schema({
    nome: {type: String, required: [true, "Nome não informado!"], trim: true},
    preco: {
        type: Number,
        required: [true, "Preço não informado!"],
        min: [0, "Preço não pode ser negativo!"]
    },
    genero: {type: String, trim: true},
    autor: {type: String, trim: true}
}, {timestamps: true});

export const filmeModels = mongoose.model("filmes", filmeSchema);
