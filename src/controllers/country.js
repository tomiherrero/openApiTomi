const {Country} = include('models');

class CountryController {
    static async fetch(req, res, next) {
        try {
            const countries = await Country.find({
                ...req.query,
                 deleted: null 
            });
            res.send(countries);
        }catch (error){
            next(error);
        }
    }
    static async fetchOne (req, res, next){
        try{
            const country = await Country.findOne({id: req.params.id});
            res.send(country);
        }catch (error){
            next(error);
        }
    }
    static async create (req, res, next) {
        try {
            const result = await Country.insertOne(req.body);
            res.send({status: 'success', result});
        }catch (error){
            next(error);
        }
    }
    static async save (req, res, next) {
        try {
            const result = await Country.updateOne({id: req.params.id}, req.body);
            res.send(result);
        }catch (error){
            next(error);
        }
    }
    static async delete (req, res, next) {
        try {
            const result = await Country.deletedOne(req.params.id);
            res.send(result);
        }catch (error){
            next(error);
        }
    }
}
module.exports = CountryController;
