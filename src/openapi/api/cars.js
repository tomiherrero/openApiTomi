module.exports = {
    '/api/cars':{
        get: {
            security: [],
            summary: 'List Cars',
            parameters: [
                {
                    in: 'query',
                    name: 'brand',
                    schema: {type: 'string'},
                    description: 'Marca del Auto'    
                }   
            ],
            responses: {
                200: {
                    description: 'List of Cars',
                    content: {
                        'application/json': {
                            schema: {
                                type: 'array',
                                items: {
                                    type: 'object',
                                    properties: {
                                        id: {
                                            type: 'string',
                                            format: 'uuid'
                                        },
                                        name:{type: 'string'}
                                    }
                                }
   
                            }
                        }
                    }
                },
                default: {
                    description: 'Error',
                    content: {'application/json': {schema: {$ref: '#/components/schemas/Error'}}}
                }
            }
        }
        
    }
}