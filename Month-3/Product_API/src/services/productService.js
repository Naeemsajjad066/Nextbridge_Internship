import { addProductFromModel, deleteProductByID, getProductByID, getProducts, patchProductByID, updateProductByID } from "../models/productModel.js"

const getAll = async (page, limit, search, sortBy, order = 'asc') => {
    const products = await getProducts()

    const startIndex = (page - 1) * limit
    const endIndex = page * limit
    let filteredProducts=products
    
if (search) {
    const searchTerm = search.toLowerCase()
    filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm) ||
        product.description.toLowerCase().includes(searchTerm)
    )
}

    if (sortBy) {
        filteredProducts = [...filteredProducts].sort((firstProduct, secondProduct) => {
            const firstValue = firstProduct[sortBy]
            const secondValue = secondProduct[sortBy]
            const comparison = typeof firstValue === 'string'
                ? firstValue.localeCompare(secondValue ?? '')
                : firstValue - secondValue

            return order === 'desc' ? -comparison : comparison
        })
    }

    const paginatedProducts = filteredProducts.slice(startIndex, endIndex)
    const total = filteredProducts.length

    return {
        products:paginatedProducts,
        pagination:{
            page,
            limit,
            total,
            totalPages:Math.ceil(total/limit)
        }
    }
}

const getById = async (id) => {
    const product = await getProductByID(id)
    return product
}

const deleteById = async (id) => {
    const products = await deleteProductByID(id)
    return products
}

const create = async (name, description, price) => {
    const products = await addProductFromModel(name, description, price)
    return products
}

const update = async (id, name, description, price) => {
    return await updateProductByID(id, { name, description, price })
}

const patch = async (id, updatedProduct) => {
    return await patchProductByID(id, updatedProduct)
}

const productService = {
    getAll,
    getById,
    deleteById,
    create,
    update,
    patch
}

export default productService