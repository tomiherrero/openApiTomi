const province = require('./province')
const country = require ('./country')
const cars = require('./cars')
module.exports = {...province, ...country, ...cars};
