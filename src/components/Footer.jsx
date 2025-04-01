import { Divider, Typography } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Logo from '../assets/logo.png';
import React from 'react'

function Footer() {
  return (
    <div className='flex flex-col bg-blue-100 text-white font-poppins '>
      <div className='flex flex-row text-blue-900 m-2 text-center'>
        <img src={Logo} alt='logo' className='h-10 mr-2' />
        <div className='flex items-center text-xs sm:text-sm md:text-base lg:text-lg'>
          Essentia - Fast. Essentail
        </div>
        <div className='ml-auto'>
          <InstagramIcon
            sx={{ fontSize: { xs: '24px', sm: '32px', md: '40px' } }}
            className='pr-1' />
          <FacebookIcon
            sx={{ fontSize: { xs: '24px', sm: '32px', md: '40px' } }}
            className='pr-1' />
          <LinkedInIcon
            sx={{ fontSize: { xs: '24px', sm: '32px', md: '40px' } }}
            className='pr-1' />
        </div>
      </div>
      <Divider className='bg-blue-900' />
      <Typography
        component='div'
        sx={{
          display: 'flex',
          justifyContent: 'center',
          color: 'rgb(30, 58, 138)',
          fontFamily: 'Poppins, sans-serif',
          margin: 1,
          fontSize: { xs: "12px", sm: "14px", md: "16px", lg: "16px" },
        }}
      >
        © 2025 Essentia. All rights reserved.
      </Typography>
    </div>
  )
}

export default Footer