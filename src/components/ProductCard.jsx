import React from "react";
import { Card, CardMedia, CardContent, Typography, Button, IconButton, Rating, Box } from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useNavigate } from "react-router-dom";

function ProductCard({ product }) {
  const navigate = useNavigate();

  return (
    <Card
      className="p-2 shadow-lg flex flex-col"
      sx={{ width: '100%', cursor: 'pointer' }}
      onClick={() => navigate(`/products/${product._id}`)}
    >
      <div className="flex">
        <IconButton
          onClick={(event) => {
            event.stopPropagation(); // Prevents card click event from firing
            console.log("Favorite clicked");
          }}
          className="flex justify-start w-fit"
        >
          <FavoriteBorderIcon />
        </IconButton>
      </div>

      {/* Product Image */}
      <div className="flex flex-row xs:flex-col">
        <CardMedia
          component="img"
          height="200"
          image={product.image}
          alt={product.name}
          sx={{
            display: 'block',
            width: { xs: '40%', sm: '100%' },
            height: 'auto',
            objectFit: 'contain',
            maxWidth: '100%',
            maxHeight: { xs: '150px', sm: '200px' },
          }}
        />

        {/* Product Details */}
        <CardContent>
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            <Rating name="read-only" value={product.ratings} precision={0.1} readOnly size="small" />
            <Typography className="text-gray-900"
              sx={{
                fontSize: { xs: "12px", sm: "14px", md: "16px", lg: "16px" },
              }}>
              ({product.ratings})
            </Typography>
          </Box>
          <Typography className="text-blue-900"
            sx={{
              fontFamily: "Poppins, sans-serif",
              fontSize: { xs: "12px", sm: "14px", md: "16px", lg: "16px" },
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 1, // Limits to 2 lines
              overflow: "hidden",
              textOverflow: "ellipsis"
            }}
          >
            {product.name}
          </Typography>
          <Typography className="text-gray-900"
            sx={{
              fontSize: { xs: "12px", sm: "14px", md: "16px", lg: "16px" },
            }}>
            ₹{product.price}
          </Typography>
          <Button
            variant="contained"
            className="mt-2 !bg-blue-200 !text-blue-900 w-full"
            sx={{
              fontSize: { xs: "12px", sm: "14px", md: "16px", lg: "16px" },
              textTransform: 'none'
            }}
            onClick={(event) => {
              event.stopPropagation(); // Prevents card click event from firing
              console.log("Added to cart!");
              // Add your cart logic here
            }}
          >
            Add to Cart
          </Button>
        </CardContent>
      </div>
    </Card >
  );
}

export default ProductCard;
