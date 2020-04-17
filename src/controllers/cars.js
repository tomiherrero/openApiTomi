const {Cars} = include('models');

class CarsController {
    static async fetch (req, res, next){
        try{
            const cars = await Cars.find(req.query);
            res.send(cars);
        }catch (error){
            next(error);
        }
    }
    static async save(req, res, next) {
        try {
            const cars = await Cars.updateOne({id: req.params.id}, req.body);
            res.send(cars);
        }catch (error){

        }
    }
}


module.exports = CarsController;