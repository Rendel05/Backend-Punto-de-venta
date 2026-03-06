import express from 'express'
import suppliersRoutes from './src/routes/suppliersRoutes.js'
import categoriesRoutes from './src/routes/categoriesRoutes.js'
import authRoutes from './src/routes/authRoutes.js'
import userRoutes from './src/routes/userRoutes.js'
import productsRoutes from './src/routes/productsRoutes.js'
import offersRoutes from './src/routes/offersRoutes.js'
import pagesRoutes from './src/routes/editablePagesRoutes.js'
import customersRoutes from './src/routes/customersRoutes.js'
import cashierRoutes from './src/routes/cashierRoutes.js'




const app = express()

app.use(express.json())
app.use('/api', suppliersRoutes)
app.use('/api', categoriesRoutes)
app.use('/api', authRoutes) 
app.use('/api', userRoutes)
app.use('/api', productsRoutes)
app.use('/api', offersRoutes)
app.use('/api', pagesRoutes)
app.use('/api',customersRoutes)
app.use('/api',cashierRoutes)

app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000')
})