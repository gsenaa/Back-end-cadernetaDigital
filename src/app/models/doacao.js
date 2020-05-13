import mongoose, { Schema } from 'mongoose';

Schema = mongoose.Schema;

const DoacaoSchema = new Schema({
    date: String,
    local: String,
    qntBolsas: String
});

export default mongoose.model('Doacoes', DoacaoSchema);
