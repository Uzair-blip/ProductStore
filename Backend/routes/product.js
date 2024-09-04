import express from "express"
import Product from '../models/product_model.js'; // Use 'Product' to avoid confusion
import mongoose from 'mongoose'
import { createProduct, deleteProduct, getProducts, updateProduct } from "../controller/product.controller.js";
const router=express.Router()
router.post('/', createProduct);
router.get('/', getProducts);
router.put('/:id',updateProduct);
router.delete('/:id',deleteProduct );
export default router