require('../../src/global');

const {Province} = include('/models');
const provinces = require('./provinces.json');

exports.seed = async knex => {
    await knex(Province.tableName).del(); /*sirve para borrar */
    try {
        await Province.startTransaction();
        await Promise.all(provinces.map(province => Province.insertOne(province))); /*maping de datos*/ 
        return Province.commitTransaction();
    }catch (err){
        console.log('err:', err); 
    }
}