import { addProductFromModel, deleteProductByID, getProductByID, getProducts } from "../models/productModel.js"

export const getAllProducts=async()=>{
    const products=await getProducts()
    return products
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