import { addProductFromModel, deleteProductByID, getProductByID, getProducts } from "../models/productModel.js"

export const getAllProducts = async (page, limit) => {
    const products = await getProducts()
    const total=products.length

    const startIndex = (page - 1) * limit
    const endIndex = page * limit

    const paginatedProducts = products.slice(startIndex, endIndex)

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
export const getProductById=async(id)=>{
    const product=await getProductByID(id)
    return product
}

export const deleteProductByIdFromServices=async(id)=>{
    const products=await deleteProductByID(id)
    return products
}

export const addProductFromService=async(name,price)=>{
    const products=await addProductFromModel(name,price)
    return products
}