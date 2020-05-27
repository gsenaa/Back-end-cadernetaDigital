import mongoose, { Schema } from 'mongoose';

Schema = mongoose.Schema;

const CartaoDeVacinaSchema = new Schema({
    nomeVacina: String,
    dataVacinacao: String,
    lote: String,
    validade: String,
    aplicador: String
})

export default mongoose.model('cartaoDeVacina', CartaoDeVacinaSchema);