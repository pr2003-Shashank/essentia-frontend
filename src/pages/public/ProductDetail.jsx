import React from "react";
import { useParams } from "react-router-dom";
import { Typography, Button, CardMedia, Box, Rating } from "@mui/material";
import { useProductById } from '../../hooks/useProducts';

function ProductDetail() {
  const { productId } = useParams(); 

  const { data: product, isLoading, error } = useProductById(productId);

  if (!product) {
    return (<Typography
      component='div'
      className="flex h-screen justify-center items-center text-red-500"
      sx={{
        fontFamily: "Poppins, sans-serif",
        fontSize: { xs: "16px", sm: "16px", md: "16px", lg: "18px" },
      }}
    >
      Product Not Found
    </Typography>);
  }

  return (
    <div className="flex flex-col sm:flex-row">
      <div className="flex w-full sm:w-1/2 pt-10 pb-2 sm:pt-10 sm:pb-10">
        <CardMedia
          className="flex"
          component="img"
          height="auto"
          image={product.image}
          alt={product.name}
          sx={{
            display: 'block',
            width: '100%',
            height: 'auto',
            objectFit: 'contain',
            maxWidth: '100%',
            maxHeight: { xs: '350px', sm: '500px' },
          }}
        />
      </div>
      <div className="flex w-full sm:w-1/2 pt-5 p-5 sm:pt-10 sm:p-2 flex-col">
        <Typography
          component='div'
          sx={{
            fontFamily: "Poppins, sans-serif",
            fontSize: { xs: "18px", sm: "20px", md: "22px", lg: "24px" },
          }}
        >
          {product.name}
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
          <Rating name="read-only" value={product.ratings} precision={0.1} readOnly size="small" />
          <Typography className="text-gray-900"
            sx={{
              fontSize: { xs: "12px", sm: "14px", md: "16px", lg: "16px" },
            }}>
            ({product.ratings})
          </Typography>
        </Box>
        <Typography
          component='div'
          sx={{
            fontFamily: "Poppins, sans-serif",
            fontSize: { xs: "16px", sm: "16px", md: "18px", lg: "20px" },
          }}
        >
          ₹{product.price}
        </Typography>
        <Typography
          component='div'
          sx={{
            fontFamily: "Poppins, sans-serif",
            fontSize: { xs: "16px", sm: "16px", md: "18px", lg: "20px" },
          }}
        >
          Product Details :
        </Typography>
        <Typography
          component='div'
          sx={{
            fontFamily: "Poppins, sans-serif",
            fontSize: { xs: "12px", sm: "14px", md: "16px", lg: "16px" },
          }}
        >
          <span><br/><b>Description:</b><br/></span>
          {product.description}
        </Typography>
        <Button
          variant="contained"
          className="mt-2 !bg-blue-200 !text-blue-900 w-fit"
          sx={{
            display: 'flex',
            fontSize: { xs: "12px", sm: "14px", md: "16px", lg: "16px" },
            textTransform: 'none'
          }}
          onClick={(event) => {
            console.log("Added to cart!");
          }}
        >
          Add to Cart
        </Button>
      </div>
    </div>
  );
}

export default ProductDetail;
