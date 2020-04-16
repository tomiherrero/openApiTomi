require('../../src/global');

const {Cars} = include('/models')
const cars = require('./cars.json')

exports.seed = async knex => {
    await knex (Cars.tableName).del();
    try{
        await Cars.startTransaction();
        await Promise.all(cars.map(car => Cars.insertOne(car)));
        await Cars.commitTransaction();
    }catch (error){
        next(error);
    }
}