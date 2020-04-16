const ModelCreate = include('helpers/modelCreate');
const tableName = "cars";
const name = "Cars";
const selectableProps = [
    'id',
    'brand',
    'iso2',
    'models',
    'deleted'
];

class Cars extends ModelCreate {
    constructor(props){
        super({
            ...props,
            tableName,
            name,
            selectableProps
        })
    }
        
}

module.exports = knex => new Cars({knex});