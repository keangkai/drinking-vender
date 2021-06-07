import express from "express"
import products from "./data/products.js"
import connectDB from "./config/db.js"
import dotenv from "dotenv"
import productsRoutes from "./routes/productRoutes.js"
import usersRoutes from "./routes/userRoutes.js"
import orderRoutes from "./routes/orderRoutes.js"
import { notFound, errorHandler } from "./middleware/errorMiddleware.js"

dotenv.config()

connectDB()

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.send('API is running...')
})

app.use('/products', productsRoutes)
app.use('/users', usersRoutes)
app.use('/orders', orderRoutes)

app.use(notFound)
app.use(errorHandler)

// app.get('/test', (req, res) => {
//     res.send('test')
// })

// app.get('/products/:id', (req,res) => {
//     const product = products.find(p => p._id === req.params.id)
//     res.json(product)
// })


const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running on port ${PORT}`))