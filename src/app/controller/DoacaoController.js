import Doacao from '../models/doacao';

class DoacaoController {
    
    async get(req, res){
        Doacao.find()
        .then((doc)=>{
            return res.json(doc);
        })
        .catch((err)=>{
            console.log(err);
        });
    }

    async getId(req, res){
        const {id} = req.params;

        Doacao.findById({_id: id})
        .then((doc)=>{
            return res.json(doc);
        })
        .catch((err)=>{
            console.log(err);
        });
    }
    
    async post(req, res){
        
        const {date} = req.body;
        const {local} = req.body;
        const {qntBolsas} = req.body;

        const doacao = await Doacao.create({
            date: date,
            local: local,
            qntBolsas: qntBolsas
        })
        
        return res.json();
    }

    
}

export default new DoacaoController();