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
        },
        '/api/cars/{id}': {
            put: {
                security: [],
                parameters: [
                    {
                        in: 'path',
                        name: 'id',
                        schema: {
                            type: 'string',
                            format: 'uuid'
                        },
                        required: true,
                        description: 'Id del auto'
                    }
                ],
                requestBody: {
                    description: 'Optional description in Markdown',
                    content: {'application/json': {schema: {$ref: '#/components/schemas/Car'}}}
                },
                responses: {
                    200: {
                        description: 'list of Cars',
                        content: {'application/json': {schema: {$ref: '#/components/schemas/Car'}}}
                    },
                    default: {
                        description: 'Error',
                        content: {'application/json': {schema: {$ref: '#/components/schemas/Error'}}}
                    }
                }
            }
        }    
    }
}
