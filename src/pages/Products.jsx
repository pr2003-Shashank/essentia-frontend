import React from 'react';
import { Typography } from '@mui/material';
import ProductCard from '../components/ProductCard';

function Products() {

  //sample
  const products = [
    {
      id: 1,
      name: "Fresh Apples",
      price: 120,
      image: "https://via.placeholder.com/200",
      category: "Fruits",
      stock: 50,
    },
    {
      id: 2,
      name: "Organic Bananas",
      price: 60,
      image: "https://via.placeholder.com/200",
      category: "Fruits",
      stock: 30,
    },
    {
      id: 3,
      name: "Almonds 250g",
      price: 350,
      image: "https://via.placeholder.com/200",
      category: "Nuts & Dry Fruits",
      stock: 20,
    },
    {
      id: 4,
      name: "Whole Wheat Bread",
      price: 40,
      image: "https://via.placeholder.com/200",
      category: "Bakery",
      stock: 15,
    },
    {
      id: 5,
      name: "Full Cream Milk 1L",
      price: 75,
      image: "https://via.placeholder.com/200",
      category: "Dairy",
      stock: 40,
    },
    {
      id: 6,
      name: "Brown Eggs (Pack of 6)",
      price: 90,
      image: "https://via.placeholder.com/200",
      category: "Dairy",
      stock: 25,
    },
    {
      id: 7,
      name: "Basmati Rice 5kg",
      price: 550,
      image: "https://via.placeholder.com/200",
      category: "Grains & Pulses",
      stock: 10,
    },
    {
      id: 8,
      name: "Olive Oil 1L",
      price: 900,
      image: "https://via.placeholder.com/200",
      category: "Oils",
      stock: 12,
    },
    {
      id: 9,
      name: "Tomato Ketchup 500g",
      price: 110,
      image: "https://via.placeholder.com/200",
      category: "Sauces",
      stock: 18,
    },
    {
      id: 10,
      name: "Green Tea (100 bags)",
      price: 250,
      image: "https://via.placeholder.com/200",
      category: "Beverages",
      stock: 35,
    }
  ];

  return (
    <div className='flex flex-col'>
      <div className='flex w-full flex-row'>
        <Typography
          component='div'
          className='w-1/4'
          sx={{
            fontFamily: "Poppins, sans-serif",
            fontSize: { xs: "14px", sm: "16px", md: "18px", lg: "20px" },
            alignContent: 'center',
            marginLeft: 2
          }}
        >
          Products
        </Typography>
        <div className='flex flex-row w-3/4 justify-center'>
          <Typography
            component='div'
            sx={{
              fontFamily: "Poppins, sans-serif",
              fontSize: { xs: "12px", sm: "14px", md: "16px", lg: "16px" },
              alignContent: 'center'
            }}
          >
            Search by category:
          </Typography>
        </div>
      </div>
      <div className='flex width-full'>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default Products