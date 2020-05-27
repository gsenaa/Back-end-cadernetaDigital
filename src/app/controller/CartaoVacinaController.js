import CartaoVacina from '../models/cartaoDeVacina';

class CartaoVacinaController {
    async get(req, res){
        CartaoVacina.find()
        .then((doc)=>{
            return res.json({cartaoVacina: doc});
        })
        .catch((err)=>{
            console.log(err);
        });
    }

    async getId(req, res){
        const {id} = req.params;
        
        CartaoVacina.find({_id: id})
        .then((doc)=>{
            return res.json({cartaoVacina: doc});
        })
        .catch((err)=>{
            console.log(err);
        });
    }
    
    async post(req, res) {
        
        const { nomeVacina } = req.body;
        const { dataVacinacao } = req.body;
        const { lote } = req.body;
        const { validade } = req.body;
        const { aplicador } = req.body;
        
        const user = await CartaoVacina.create({     
            nomeVacina: nomeVacina,
            dataVacinacao: dataVacinacao,
            lote: lote,
            validade: validade,
            aplicador: aplicador,
        });
        return res.json({nomeVacina: nomeVacina,
            dataVacinacao: dataVacinacao,
            lote: lote,
            validade: validade,
            aplicador: aplicador});
    }

    async put(req, res) {
        const { id } = req.params;

        const { nomeVacina } = req.body;
        const { dataVacinacao } = req.body;
        const { lote } = req.body;
        const { validade } = req.body;
        const { aplicador } = req.body;
    
        const doc = await CartaoVacina.findById({_id: id});

        doc.nomeVacina = nomeVacina;
        doc.dataVacinacao = dataVacinacao;
        doc.lote = lote;
        doc.validade = validade;
        doc.aplicador = aplicador;

        await doc.save();
   
        return res.json(doc);
    }

    async delete(req, res) {
        const { id } = req.params;
    
        CartaoVacina.findByIdAndRemove({_id: id}, { useFindAndModify: false }).exec();

        return res.status(200).send();
    }
}

export default new CartaoVacinaController();