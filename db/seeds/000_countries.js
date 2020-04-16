require('../../src/global');

const {Country} = include('/models');
const countries = require('./countries.json')


exports.seed = async knex => {
    await knex (Country.tableName).del();
    try{
        await Country.startTransaction();
        await Promise.all(countries.map(country => Country.insertOne(country)));
        await Country.commitTransaction();
    }catch (error){
        next (error)
    }
}