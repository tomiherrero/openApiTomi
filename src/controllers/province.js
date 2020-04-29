const {Province} = include('models');

class ProvinceController {
    static async fetch (req, res, next) {
        try{
            const provinces = await Province.find(req.query);
            res.send(provinces);
        }catch(error){
            next(error);
        }
    }
    static async fetchOne (req, res, next){
        try{
            const province = await Province.findOne({id: req.params.id});
            res.send(province);
        }catch (error){
            next(error);
        }
    }
    static async create (req, res, next) {
        try {
            const result = await Province.insertOne(req.body);
            res.send({status: 'success', result});
        }catch (error){
            next(error);
        }
    }
    static async save (req, res, next) {
        try {
            const result = await Province.updateOne({id: req.params.id}, req.body);
            res.send(result);
        }catch (error){
            next(error);
        }
    }
    static async delete (req, res, next) {
        try {
            const result = await Province.deleteOne(req.params.id);
            res.send(result);
        }catch (error){
            next(error);
        }
    }
}

module.exports = ProvinceController;
