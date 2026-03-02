import { getAllProducts, getProductByCategory, searchProducts, updateProduct } from './src/models/productModel.js'

const probar = async () => {
  try {
    //const rows = await getProductByCategory(1,15,2)
    //const rows = await getAllProducts(1,15)
    const rows = await searchProducts("alcohol",1,15)
    console.log(rows)

  } catch (error) {
    console.error(error)
  }
}

probar()
