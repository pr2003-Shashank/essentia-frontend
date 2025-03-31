import React from "react";
import { Card, CardMedia, CardContent, Typography, Button } from "@mui/material";

function ProductCard({ product }) {
  return (
    <Card className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2 shadow-lg" sx={{ maxWidth: 300 }}>
      {/* Product Image */}
      <CardMedia
        component="img"
        height="200"
        image={product.image}
        alt={product.name}
        className="object-cover"
      />
      
      {/* Product Details */}
      <CardContent>
        <Typography variant="h6" className="font-poppins font-semibold text-blue-900">
          {product.name}
        </Typography>
        <Typography variant="body1" className="text-gray-700">
          ₹{product.price}
        </Typography>
        <Button
          variant="contained"
          className="mt-2 !bg-blue-900 !hover:bg-blue-700 w-full"
        >
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
}

export default ProductCard;
