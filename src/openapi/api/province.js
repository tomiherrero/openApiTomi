module.exports = {
    '/api/province':{
        get: {
            security: [],
            summary: 'List Provinces',
            parameters: [
                {
                    in: 'query',
                    name: 'code',
                    schema: {type: 'string'},
                    description: 'Codigo de Provincia Solicitado'    
                }   
            ],
            responses: {
                200: {
                    description: 'List of Provinces of Argentina',
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