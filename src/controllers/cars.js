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
}


module.exports = CarsController;