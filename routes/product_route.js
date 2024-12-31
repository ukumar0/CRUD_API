const express = require('express')
const Product = require('../product_model.js')
const router = express.Router();
const {getProducts, getProduct, deleteProduct, createProduct, updateProduct} = require('../controllers/product_controller.js')

router.get('/', getProducts)

router.get("/:id", getProduct)

router.post('/', createProduct)

router.put('/:id',  updateProduct)

router.delete('/:id', deleteProduct)

module.exports = router