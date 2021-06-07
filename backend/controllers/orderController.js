import asyncHandler from "express-async-handler"
import Order from "../models/orderModel.js"
// import sgMail from '@sendgrid/mail'

// sgMail.setApiKey(process.env.MAIL_API_KEY)

// @desc    Create new order
// @route   POST /api/orders
// @access  Private
const addOrderItems = asyncHandler(async(req, res) => {
    const {
        orderItems,
        shippingAddress,
        paymentMethod,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice,
    } = req.body

    if (orderItems && orderItems.length === 0) {
        res.status(400)
        throw new Error('No order items')
    } else {
        const order = new Order({
            orderItems,
            user: req.user._id,
            shippingAddress,
            paymentMethod,
            itemsPrice,
            taxPrice,
            shippingPrice,
            totalPrice,
        })

        const createdOrder = await order.save()

        res.status(201).json(createdOrder)

        // orderItems.map(item => {
        //     if (item.countInStock <= 10) {
        //         sgMail.send({
        //             to: 'm.keangkrai@gmail.com',
        //             from: 'm.keangkai@gmail.com',
        //             subject: 'Test',
        //             text: `product is less than 10`
        //         })
        //     }
        // })

    }
})

// @desc    GET order by ID
// @route   POST /api/orders/:id
// @access  Private
const getOrderById = asyncHandler(async(req, res) => {
    const order = await Order.findById(req.params.id).populate('user', 'name email')

    if (order) {
        res.json(order)
    } else {
        res.status(404)
        throw new Error('Order not found')
    }
})

export {
    addOrderItems,
    getOrderById
}