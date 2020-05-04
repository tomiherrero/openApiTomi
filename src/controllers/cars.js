const {Cars} = include('models');

class CarsController {
    static async fetch (req, res, next){
        try{
            const cars = await Cars.find({
                ...req.query,
                deleted: null
            });
            res.send(cars);
        }catch (error){
            next(error);
        }
    }
    static async fetchOne (req, res, next){
        try{
            const cars = await Cars.findOne({id: req.params.id});
            res.send(cars);
        }catch (error){
            next(error);
        }
    }
    static async create (req, res, next) {
        try {
            const result = await Cars.insertOne(req.body);
            res.send({status: 'success', result});
        }catch (error){
            next(error);
        }
    }
    static async save (req, res, next) {
        try {
            const result = await Cars.updateOne({id: req.params.id}, req.body);
            res.send(result);
        }catch (error){
            next(error);
        }
    }
    static async delete (req, res, next) {
        try {
            const result = await Cars.deletedOne(req.params.id);
            res.send(result);
        }catch (error){
            next(error);
        }
    }
}

module.exports = CarsController;
