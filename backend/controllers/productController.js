import asyncHamdler from "express-async-handler"
import Product from "../models/productModel.js"

// @desc   Fetch all product
// @route  GET /api/products
// @access PUBLIC
const getProducts = asyncHamdler(async(req, res) => {
    const product = await Product.find({})
    res.json(product)
})

// @desc   Fetch single product
// @route  GET /api/products
// @access PUBLIC
const getProductById = asyncHamdler(async(req, res) => {
    const product = await Product.findById(req.params.id)

    if (product) {
        res.json(product)
    } else {
        res.status(404)
        throw new Error('Product not found')
    }
})

export { getProducts, getProductById }