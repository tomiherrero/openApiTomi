const {Province} = include('models');

class ProvinceController {
    static async fetch (req, res, next) {
        try{
            const provinces = await Province.find(req.query);
            res.send(provinces)
        }catch(error){
            next(error)
        }
    }
};

module.exports = ProvinceController;