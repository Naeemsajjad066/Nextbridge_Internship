import swaggerJSDoc from 'swagger-jsdoc'

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Product Catalog API',
            version: '1.0.0',
            description: 'API documentation for Product Catalog'
        },
        components: {
            parameters: {
                ProductId: {
                    name: 'id',
                    in: 'path',
                    required: true,
                    description: 'The product id.',
                    schema: {
                        type: 'integer',
                        minimum: 1,
                        example: 1
                    }
                }
            },
            schemas: {
                Product: {
                    type: 'object',
                    required: ['id', 'name', 'description', 'price'],
                    properties: {
                        id: {
                            type: 'integer',
                            format: 'int64',
                            example: 1
                        },
                        name: {
                            type: 'string',
                            minLength: 1,
                            example: 'Laptop'
                        },
                        description: {
                            type: 'string',
                            minLength: 1,
                            example: 'A high-performance laptop for professionals'
                        },
                        price: {
                            type: 'number',
                            format: 'float',
                            exclusiveMinimum: 0,
                            example: 1200
                        }
                    }
                },
                ProductInput: {
                    type: 'object',
                    required: ['name', 'description', 'price'],
                    properties: {
                        name: {
                            type: 'string',
                            minLength: 1,
                            example: 'Laptop'
                        },
                        description: {
                            type: 'string',
                            minLength: 1,
                            example: 'A high-performance laptop for professionals'
                        },
                        price: {
                            type: 'number',
                            format: 'float',
                            exclusiveMinimum: 0,
                            example: 1200
                        }
                    }
                },
                ProductPatch: {
                    type: 'object',
                    minProperties: 1,
                    properties: {
                        name: { type: 'string', minLength: 1, example: 'Updated laptop' },
                        description: { type: 'string', minLength: 1, example: 'Updated description' },
                        price: { type: 'number', format: 'float', exclusiveMinimum: 0, example: 1100 }
                    }
                },
                SuccessResponse: {
                    type: 'object',
                    required: ['success', 'message', 'statusCode', 'data'],
                    properties: {
                        success: { type: 'boolean', example: true },
                        message: { type: 'string', example: 'Product fetched successfully' },
                        statusCode: { type: 'integer', example: 200 },
                        data: {}
                    }
                },
                ErrorResponse: {
                    type: 'object',
                    required: ['success', 'message', 'statusCode'],
                    properties: {
                        success: { type: 'boolean', example: false },
                        message: { type: 'string', example: 'Product not found' },
                        statusCode: { type: 'integer', example: 404 }
                    }
                },
                ValidationErrorResponse: {
                    type: 'object',
                    required: ['message', 'errors'],
                    properties: {
                        message: { type: 'string', example: 'Product validation failed' },
                        errors: {
                            type: 'object',
                            additionalProperties: { type: 'string' },
                            example: { price: 'Price must be greater than 0' }
                        }
                    }
                }
            }
        }
    },
    apis: ['./src/docs/*.js']
}

export const swaggerSpec = swaggerJSDoc(options)