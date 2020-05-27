import mongoose, { Schema } from 'mongoose';

Schema = mongoose.Schema;

const ExamesSchema = new Schema({
    date: String,
    local: String,
    hrExame: String
})

export default mongoose.model('Exames', ExamesSchema);