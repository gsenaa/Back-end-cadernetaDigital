import User from '../models/User';

class UserController {
    
    async get(req, res){
        User.find()
        .then((doc)=>{
            return res.json(doc);
        })
        .catch((err)=>{
            console.log(err);
        });
    }

    async getUser(req, res){
        const {id} = req.params;
        
        User.find({_id: id})
        .then((doc)=>{
            return res.json(doc);
        })
        .catch((err)=>{
            console.log(err);
        });
    }
    
    async post(req, res) {
        
        const { name } = req.body;
        const { cpf } = req.body;
        const { date } = req.body;
        const { phone } = req.body;
        const { email } = req.body;
        const { password } = req.body;
        
        const user = await User.create({
            name: name,
            cpf: cpf,
            date: date,
            phone: phone,
            email: email,
            password: password,
        });
        return res.json();
    }

    async put(req, res) {
        const { id } = req.params;

        const { name } = req.body;
        const { date } = req.body;
        const { phone } = req.body;
        const { email } = req.body;
        const { password } = req.body;
    
        const doc = await User.findById({_id: id});

        doc.name = name;
        doc.date = date;
        doc.phone = phone;
        doc.email = email;
        doc.password = password;

        await doc.save();
   
        return res.json(doc);
    }

    async delete(req, res) {
        const { id } = req.params;
    
        User.findByIdAndRemove({_id: id}, { useFindAndModify: false }).exec();

        return res.status(200).send();
    }
}


export default new UserController();