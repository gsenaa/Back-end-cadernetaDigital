import mongoose, { Schema } from 'mongoose';

Schema = mongoose.Schema;

const UsuarioSchema = new Schema({
    name: String,
    cpf: String,
    date: String,
    phone: String,
    email: String,
    password: String
});

export default mongoose.model('Usuario', UsuarioSchema);

