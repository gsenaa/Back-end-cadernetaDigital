import Doacao from '../models/doacao';

class DoacaoController {
    
    async get(req, res){
        Doacao.find()
        .then((doc)=>{
            return res.json({doacao: doc});
        })
        .catch((err)=>{
            console.log(err);
        });
    }

    async getId(req, res){
        const {id} = req.params;

        Doacao.findById({_id: id})
        .then((doc)=>{
            return res.json({doacao: doc});
        })
        .catch((err)=>{
            console.log(err);
        });
    }
    
    async post(req, res){
        
        const {id} = req.body;
        const {date} = req.body;
        const {local} = req.body;
        const {qntBolsas} = req.body;

        const doacao = await Doacao.create({
            id: id,
            date: date,
            local: local,
            qntBolsas: qntBolsas
        })
        
        return res.json();
    }

    async put(req, res) {
        const { id } = req.params;

        const { date } = req.body;
        const { local } = req.body;
        const { qntBolsas } = req.body;
    
        const doc = await Doacao.findById({_id: id});

        doc.date = date;
        doc.local = local;
        doc.qntBolsas = qntBolsas;

        await doc.save();
   
        return res.json(doc);
    }

    async delete(req, res) {
        const { id } = req.params;
    
        Doacao.findByIdAndDelete({_id: id}, { useFindAndModify: false }).then((doc)=>{
            return res.json({message: 'Deletado'});
        })
        .catch((err)=>{
            return res.json({message: 'not found'});
        });
    }

    
}

export default new DoacaoController();