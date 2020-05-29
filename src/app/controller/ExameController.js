import Exame from '../models/exames';

class ExameController {
    async get(req, res){
        Exame.find()
        .then((doc)=>{
            return res.json({exame: doc});
        })
        .catch((err)=>{
            console.log(err);
        });
    }

    async getId(req, res){
        const {id} = req.params;
        
        Exame.find({_id: id})
        .then((doc)=>{
            return res.json({exame: doc});
        })
        .catch((err)=>{
            console.log(err);
        });
    }
    
    async post(req, res){
        
        const {date} = req.body;
        const {local} = req.body;
        const {hrExame} = req.body;

        const exame = await Exame.create({
            date: date,
            local: local,
            hrExame: hrExame
        })
        
        return res.json({date: date,
            local: local,
            hrExame: hrExame});
    }

    async put(req, res) {
        const { id } = req.params;

        const { date } = req.body;
        const { local } = req.body;
        const { hrExame } = req.body;
    
        const doc = await Exame.findById({_id: id});

        doc.date = date;
        doc.local = local;
        doc.hrExame = hrExame;

        await doc.save();
   
        return res.json(doc);
    }

    async delete(req, res) {
        const { id } = req.params;
    
        Exame.findByIdAndRemove({_id: id}, { useFindAndModify: false }).then((doc)=>{
            return res.json({message: 'Deletado'});
        })
        .catch((err)=>{
            console.log(err);
            return res.json({message: 'not found'});
        });
    }
}

export default new ExameController();