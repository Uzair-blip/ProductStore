import Product from '../models/product_model.js'; // Use 'Product' to avoid confusion
import mongoose from 'mongoose'

export const getProducts=async (req, res) => {
    try {
       const products =await Product.find() 
        res.status(201).json({ success: true, data: products });
    } catch (error) {
        console.error('Error in finding all product:', error);
        res.status(500).json({ success: false, message: 'Server error' }); 
    }
}
export const createProduct=async (req, res) => {
    const { name, price, image } = req.body;

    if (!name || !price || !image) {
        return res.status(400).send('Please provide all fields');
    }

    const newProduct = new Product({
        name,
        price,
        image
    });

    try {
        await newProduct.save(); 
        res.status(201).json({ success: true, data: newProduct });
    } catch (error) {
        console.error('Error in creating product:', error);
        res.status(500).json({ success: false, message: 'Server error' });e
    }
}
export const updateProduct= async (req, res) => {
    const {id} = req.params;
    const product =req.body
    if(!mongoose.isValidObjectId(id)){
        res.status(500).json({ success: false, message: 'Invalid Id' }); 

    }
    try {
       const updatedProduct= await Product.findByIdAndUpdate(id,product,{new:true})
        res.status(201).json({ success: true, data: updatedProduct });
    } catch (error) {
        console.error('Error in updating product:', error);
        res.status(500).json({ success: false, message: 'Server error' }); 
    }
}
export const deleteProduct=async (req, res) => {
    const {id} = req.params;
    try {
        await Product.findByIdAndDelete(id) // Await the save operation
        res.status(201).json({ success: true, message: "product deleted" });
    } catch (error) {
        console.error('Error in deleting product:', error);
        res.status(500).json({ success: false, message: 'Server error' }); // Correct status code
    }
}