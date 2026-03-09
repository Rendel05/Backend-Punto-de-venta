import express from 'express'
import cors from "cors"
import dotenv from 'dotenv'

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

dotenv.config()

app.use(express.json())

const allowedOrigins = (process.env.CORS_ORIGINS || "https://pedropruebas.grupoahost.com")
  .split(',')
  .map((origin) => origin.trim())
  .filter(Boolean)

const corsOptions = {
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      return callback(null, true)
    }

    return callback(new Error(`Origen no permitido por CORS: ${origin}`))
  },
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
}

app.use(cors(corsOptions))

app.options('*', cors(corsOptions))

app.use('/api', suppliersRoutes)
app.use('/api', categoriesRoutes)
app.use('/api', authRoutes)
app.use('/api', userRoutes)
app.use('/api', productsRoutes)
app.use('/api', offersRoutes)
app.use('/api', pagesRoutes)
app.use('/api', customersRoutes)
app.use('/api', cashierRoutes)

export default app
