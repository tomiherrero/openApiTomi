module.exports = {
    '/api/country': {
        get: {
            security: [],
            summary: 'List Countries',
            parameters: [
                {
                    in: 'query',
                    name: 'code',
                    schema: {
                        type: 'string',
                        pattern: '^[A-Z]{2}$'
                    },
                    description: 'Código de país solicitado'
                }
            ],
            responses: {
                200: {
                    description: 'list of Countries',
                    content: {
                        'application/json': {
                            schema: {
                                type: 'array',
                                items: {$ref: '#/components/schemas/Country'}
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
                content: {'application/json': {schema: {$ref: '#/components/schemas/Country'}}}
            },
            responses: {
                200: {
                    description: 'list of Country',
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
    '/api/country/{id}': {
        get: {
            security: [],
            parameters: [
                {
                    in: 'path',
                    name: 'code',
                    schema: {
                        type: 'string',
                        format: 'uuid'
                    },
                    required: true,
                    description: 'Id del pais solicitado'
                }
            ],
            responses: {
                200: {
                    description: 'list of Countries',
                    content: {'application/json': {schema: {$ref: '#/components/schemas/Country'}}}
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
                    name: 'code',
                    schema: {
                        type: 'string',
                        format: 'uuid'
                    },
                    required: true,
                    description: 'Id del pais solicitado'
                }
            ],
            requestBody: {
                description: 'Optional description in *Markdown*',
                required: true,
                content: {'application/json': {schema: {$ref: '#/components/schemas/Country'}}}
            },
            responses: {
                200: {
                    description: 'list of Countries',
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
                    name: 'code',
                    schema: {
                        type: 'string',
                        format: 'uuid'
                    },
                    required: true,
                    description: 'Id de la persona solicitada'
                }
            ],
            responses: {
                200: {
                    description: 'list of Countries',
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
