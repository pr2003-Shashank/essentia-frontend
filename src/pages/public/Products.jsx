import React from 'react';
import { Typography, Grid, Pagination, Autocomplete, TextField } from '@mui/material';
import { useState } from 'react';
import ProductCard from '../../components/ProductCard';
import products from '../../services/ProductFetch';
import categories from "../../services/CategoryFetch";


const PRODUCTS_PER_PAGE = 12; //pagination

function Products() {

  const [currentPage, setCurrentPage] = useState(1);

  // Calculate total pages
  const totalPages = Math.ceil(products.length / PRODUCTS_PER_PAGE);

  // Get products for the current page
  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const currentProducts = products.slice(startIndex, startIndex + PRODUCTS_PER_PAGE);

  // Handle page change
  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };
  return (
    <div className='flex flex-col'>
      <div className='flex w-full flex-col sm:flex-row'>
        <Typography
          component='div'
          className='w-1/4'
          sx={{
            fontFamily: "Poppins, sans-serif",
            fontSize: { xs: "16px", sm: "16px", md: "18px", lg: "20px" },
            color: "rgb(30, 58, 138)",
            alignContent: 'center',
            padding: 2
          }}
        >
          Products
        </Typography>
        <div className='flex flex-row w-full sm:w-3/4 justify-start sm:justify-end p-5'>
          <Autocomplete
            multiple
            limitTags={2}
            size="small"
            id="categories-selector"
            options={categories}
            getOptionLabel={(option) => option.name}
            renderInput={(params) => (
              <TextField {...params} label="Category" placeholder="Search by Category" />
            )}
            sx={{
              width: '400px', 
              backgroundColor: 'rgba(96, 165, 250, 0.2)'
            }}
          />
        </div>
      </div>
      <div className='flex w-full p-4'>
        <Grid container spacing={2}>
          {currentProducts.map((product) => (
            <Grid
              size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
              key={product.id}
            >
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      </div>
      {/* Pagination Controls */}
      <div className="flex justify-center m-4">
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
          shape="rounded"
          sx={{
            "& .MuiPaginationItem-root": { color: "rgb(30, 58, 138)" },  
            "& .MuiPaginationItem-page.Mui-selected": {
              backgroundColor: "rgb(30, 58, 138)",
              color: "white"
            }
          }}
        />
      </div>
    </div>
  )
}

export default Products