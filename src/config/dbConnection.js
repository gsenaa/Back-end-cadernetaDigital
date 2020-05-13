import mongoose from'mongoose';


class Database {

    constructor() {
        this.conexao();
    }
    
    
    conexao(){   
        this.mongoConnection = mongoose.connect(
            'mongodb://localhost:27017/bancozika',
            { useNewUrlParser: true, useFindAndModify: true, useUnifiedTopology: true }
        )
    }
    
}
   
    
export default new Database();
