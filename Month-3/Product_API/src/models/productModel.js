import fs from 'fs/promises'

const path = "./src/data/products.json";
export const getProducts=async()=>{
    const data=await fs.readFile(path,"utf-8")
    return JSON.parse(data)
}

export const getProductByID=async(id)=>{
    const products=await getProducts()
    const product=products.find((prod)=>prod.id===id)
    return product
}
export const updateProductByID=async(id,updatedProduct)=>{
    const products=await getProducts()
    const productIndex=products.findIndex((prod)=>prod.id===id)
    if (productIndex === -1) {
        return null
    }
    products[productIndex] = { id, ...updatedProduct }
    await fs.writeFile(path,JSON.stringify(products,null,2))
    return products[productIndex]
}
export const patchProductByID=async(id,updatedProduct)=>{
    const products=await getProducts()
    const productIndex=products.findIndex((prod)=>prod.id===id)
    if (productIndex === -1) {
        return null
    }
    products[productIndex] = { ...products[productIndex], ...updatedProduct }
    await fs.writeFile(path,JSON.stringify(products,null,2))
    return products[productIndex]
}
export const deleteProductByID=async(id)=>{
    const products=await getProducts()
    const productExists=products.some((prod)=>prod.id===id)
    if (!productExists) {
        return null
    }
    const updatedProducts=products.filter((prod)=>prod.id!==id)
    const newProducts=JSON.stringify(updatedProducts)
    await fs.writeFile(path,newProducts)
    return updatedProducts
}

export const addProductFromModel=async(name,description,price)=>{
    const products=await getProducts()
    const product={
        id:Date.now(),
        name,
        description,
        price
    }
    products.push(product)
    const newProducts=JSON.stringify(products,null,2)
    await fs.writeFile(path,newProducts)
    return products

}