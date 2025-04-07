import axios from "axios";

const BASE_URL = "http://127.0.0.1:5000/products"; 

// Fetch all products
export const fetchProducts = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/`);
        return response.data.products; // Extracting the array of products
    } catch (error) {
        console.error("Error fetching products:", error);
        throw new Error("Failed to fetch products");
    }
};

// Add a new product
export const addProduct = async (productData) => {
    try {
        const response = await axios.post(`${BASE_URL}/add_product`, productData);
        return response.data; // Returns success message
    } catch (error) {
        console.error("Error adding product:", error);
        throw new Error("Failed to add product");
    }
};

// Remove a product by ID
export const removeProduct = async (productId) => {
    try {
        const response = await axios.post(`${BASE_URL}/remove_product`, 
            { productId }, 
            { headers: { "Content-Type": "application/json" } } // Ensure JSON format
        );
        return response.data; // Returns success message
    } catch (error) {
        console.error("Error removing product:", error.response?.data || error.message);
        throw new Error("Failed to remove product");
    }
};

// Fetch a single product by ID
export const fetchProductById = async (productId) => {
    try {
        const response = await axios.get(`${BASE_URL}/${productId}`);
        return response.data.product; // Returns a single product
    } catch (error) {
        console.error("Error fetching product by ID:", error);
        throw new Error("Failed to fetch product details");
    }
};
