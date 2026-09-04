import fs from 'fs/promises'

const path = "./src/data/products.json";
export const getProducts=async()=>{
    const data=await fs.readFile(path,"utf-8")
    return JSON.parse(data)
}

export const getProductByID=async(id)=>{
    const products=await getProducts()
    const product=products.find((prod)=>prod.id===Number(id))
    return product
}
export const deleteProductByID=async(id)=>{
    const products=await getProducts()
    const productExists=products.some((prod)=>prod.id===Number(id))
    if (!productExists) {
        return null
    }
    const updatedProducts=products.filter((prod)=>prod.id!==Number(id))
    const newProducts=JSON.stringify(updatedProducts)
    await fs.writeFile(path,newProducts)
    return updatedProducts
}

export const addProductFromModel=async(name,price)=>{
    const products=await getProducts()
    const product={
        id:Date.now(),
        name:name,
        price:price
    }
    products.push(product)
    const newProducts=JSON.stringify(products)
    await fs.writeFile(path,newProducts)
    return products

}