module.exports = {
    '/api/country':{
        get: {
            security: [],
            summary: 'List Countries',
            parameters: [
                {
                    in: 'query',
                    name: 'code',
                    schema: {type: 'string'},
                    description: 'Codigo de Pais Solicitado'    
                }   
            ],
            responses: {
                200: {
                    description: 'List of Countries',
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