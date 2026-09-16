/**
 * @swagger
 * tags:
 *   - name: Products
 *     description: Product catalog operations
 *
 * components:
 *   schemas:
 *     ProductList:
 *       type: object
 *       required: [products, pagination]
 *       properties:
 *         products:
 *           type: array
 *           items: { $ref: '#/components/schemas/Product' }
 *         pagination:
 *           type: object
 *           properties:
 *             page: { type: integer, example: 1 }
 *             limit: { type: integer, example: 5 }
 *             total: { type: integer, example: 10 }
 *             totalPages: { type: integer, example: 2 }
 *
 * /products:
 *   get:
 *     summary: List products
 *     description: Returns a paginated product list with optional text search and sorting.
 *     tags: [Products]
 *     parameters:
 *       - in: query
 *         name: page
 *         description: Page number, starting at 1.
 *         schema: { type: integer, minimum: 1, default: 1 }
 *       - in: query
 *         name: limit
 *         description: Number of products per page.
 *         schema: { type: integer, minimum: 1, default: 5 }
 *       - in: query
 *         name: search
 *         description: Case-insensitive search across product name and description.
 *         schema: { type: string }
 *       - in: query
 *         name: sortBy
 *         description: Product field used for sorting.
 *         schema: { type: string, enum: [id, name, description, price] }
 *       - in: query
 *         name: order
 *         description: Sort direction.
 *         schema: { type: string, enum: [asc, desc], default: asc }
 *     responses:
 *       200:
 *         description: Products returned successfully.
 *         content:
 *           application/json:
 *             schema:
 *               allOf:
 *                 - $ref: '#/components/schemas/SuccessResponse'
 *                 - type: object
 *                   properties:
 *                     data: { $ref: '#/components/schemas/ProductList' }
 *       400:
 *         description: Invalid query parameters.
 *         content:
 *           application/json:
 *             schema: { $ref: '#/components/schemas/ValidationErrorResponse' }
 *       500:
 *         description: Server error.
 *         content:
 *           application/json:
 *             schema: { $ref: '#/components/schemas/ErrorResponse' }
 *   post:
 *     summary: Create a product
 *     tags: [Products]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema: { $ref: '#/components/schemas/ProductInput' }
 *     responses:
 *       201:
 *         description: Product created successfully.
 *         content:
 *           application/json:
 *             schema:
 *               allOf:
 *                 - $ref: '#/components/schemas/SuccessResponse'
 *                 - type: object
 *                   properties:
 *                     data: { $ref: '#/components/schemas/Product' }
 *       400:
 *         description: Invalid product body.
 *         content:
 *           application/json:
 *             schema: { $ref: '#/components/schemas/ValidationErrorResponse' }
 *       500:
 *         description: Server error.
 *         content:
 *           application/json:
 *             schema: { $ref: '#/components/schemas/ErrorResponse' }
 *
 * /products/{id}:
 *   parameters:
 *     - $ref: '#/components/parameters/ProductId'
 *   get:
 *     summary: Get a product by id
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: Product returned successfully.
 *         content:
 *           application/json:
 *             schema:
 *               allOf:
 *                 - $ref: '#/components/schemas/SuccessResponse'
 *                 - type: object
 *                   properties:
 *                     data: { $ref: '#/components/schemas/Product' }
 *       400:
 *         description: Invalid product id.
 *         content:
 *           application/json:
 *             schema: { $ref: '#/components/schemas/ValidationErrorResponse' }
 *       404:
 *         description: Product not found.
 *         content:
 *           application/json:
 *             schema: { $ref: '#/components/schemas/ErrorResponse' }
 *       500:
 *         description: Server error.
 *         content:
 *           application/json:
 *             schema: { $ref: '#/components/schemas/ErrorResponse' }
 *   put:
 *     summary: Replace a product
 *     tags: [Products]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema: { $ref: '#/components/schemas/ProductInput' }
 *     responses:
 *       200:
 *         description: Product updated successfully.
 *         content:
 *           application/json:
 *             schema:
 *               allOf:
 *                 - $ref: '#/components/schemas/SuccessResponse'
 *                 - type: object
 *                   properties:
 *                     data: { $ref: '#/components/schemas/Product' }
 *       400:
 *         description: Invalid id or product body.
 *         content:
 *           application/json:
 *             schema: { $ref: '#/components/schemas/ValidationErrorResponse' }
 *       404:
 *         description: Product not found.
 *         content:
 *           application/json:
 *             schema: { $ref: '#/components/schemas/ErrorResponse' }
 *       500:
 *         description: Server error.
 *         content:
 *           application/json:
 *             schema: { $ref: '#/components/schemas/ErrorResponse' }
 *   patch:
 *     summary: Update selected product fields
 *     tags: [Products]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema: { $ref: '#/components/schemas/ProductPatch' }
 *     responses:
 *       200:
 *         description: Product patched successfully.
 *         content:
 *           application/json:
 *             schema:
 *               allOf:
 *                 - $ref: '#/components/schemas/SuccessResponse'
 *                 - type: object
 *                   properties:
 *                     data: { $ref: '#/components/schemas/Product' }
 *       400:
 *         description: Invalid id or patch body.
 *         content:
 *           application/json:
 *             schema: { $ref: '#/components/schemas/ValidationErrorResponse' }
 *       404:
 *         description: Product not found.
 *         content:
 *           application/json:
 *             schema: { $ref: '#/components/schemas/ErrorResponse' }
 *       500:
 *         description: Server error.
 *         content:
 *           application/json:
 *             schema: { $ref: '#/components/schemas/ErrorResponse' }
 *   delete:
 *     summary: Delete a product
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: Product deleted successfully.
 *         content:
 *           application/json:
 *             schema:
 *               allOf:
 *                 - $ref: '#/components/schemas/SuccessResponse'
 *                 - type: object
 *                   properties:
 *                     data:
 *                       type: array
 *                       items: { $ref: '#/components/schemas/Product' }
 *       400:
 *         description: Invalid product id.
 *         content:
 *           application/json:
 *             schema: { $ref: '#/components/schemas/ValidationErrorResponse' }
 *       404:
 *         description: Product not found.
 *         content:
 *           application/json:
 *             schema: { $ref: '#/components/schemas/ErrorResponse' }
 *       500:
 *         description: Server error.
 *         content:
 *           application/json:
 *             schema: { $ref: '#/components/schemas/ErrorResponse' }
 */
