const ModelCreate = include('helpers/modelCreate');
const tableName = 'provinces'; 
const name = "Province";

/*Aca se encuentra los columnas de la tabla? */ 
const selectableProps = [
    'id',
    'name',
    'iso2',
    'code',
    'deleted'
];


class Province extends ModelCreate{
    constructor(props){
        super({
            ...props, 
            tableName,
            name,
            selectableProps
        })
    }
}

module.exports = knex => new Province({knex});