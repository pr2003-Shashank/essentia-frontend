import React from 'react';
import { Typography } from '@mui/material';

function Products() {
  return (
    <div className='flex flex-row'>
      <div className='flex w-full'>
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
    </div>
  )
}

export default Products