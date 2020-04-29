module.exports = {
    '/api/cars': {
        get: {
            security: [],
            summary: 'List Cars',
            parameters: [],
            responses: {
                200: {
                    description: 'list of Cars',
                    content: {
                        'application/json': {
                            schema: {
                                type: 'array',
                                items: {$ref: '#/components/schemas/Car'}
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
        post: {
            security: [],
            requestBody: {
                description: 'Optional description in *Markdown*',
                required: true,
                content: {'application/json': {schema: {$ref: '#/components/schemas/Car'}}}
            },
            responses: {
                200: {
                    description: 'list of Cars',
                    content: {
                        'application/json': {
                            schema: {
                                type: 'object',
                                properties: {}
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
    },
    '/api/cars/{id}': {
        get: {
            security: [],
            parameters: [
                {
                    in: 'path',
                    name: 'id',
                    required: true,
                    description: 'Marca del auto solicitado',
                    schema: {
                        type: 'string',
                        format: 'uuid'
                    }
                }
            ],
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
        },
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
                    description: 'Marca del auto solicitado'
                }
            ],
            requestBody: {
                description: 'Optional description in *Markdown*',
                required: true,
                content: {'application/json': {schema: {$ref: '#/components/schemas/Car'}}}
            },
            responses: {
                200: {
                    description: 'list of Cars',
                    content: {
                        'application/json': {
                            schema: {
                                type: 'object',
                                properties: {}
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
        delete: {
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
                    description: 'Marca del auto solicitado'
                }
            ],
            responses: {
                200: {
                    description: 'list of Cars',
                    content: {
                        'application/json': {
                            schema: {
                                type: 'object',
                                properties: {}
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
};
