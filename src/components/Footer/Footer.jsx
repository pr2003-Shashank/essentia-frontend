import { Divider, Typography} from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Logo from '../../assets/logo-white.png';
import React from 'react'

function Footer() {
  return (
    <div className='flex flex-col bg-blue-900 text-white font-poppins '>
      <div className='flex flex-row text-white m-2 text-center'>
        <img src={Logo} alt='logo' className='h-10 mr-2'/>
        <div className='flex items-center text-xs sm:text-sm md:text-base lg:text-lg'>        
          Essentia - Fresh. Fast. Essentail
        </div>
        <div className='ml-auto'>
        <InstagramIcon fontSize='large' className='pr-2'/>
        <FacebookIcon fontSize='large' className='pr-2'/>
        <LinkedInIcon fontSize='large' className='pr-2'/>
        </div>
      </div>
      <Divider className='bg-white'/>
      <Typography
      component='div'
      sx={{
        display:'flex',
        justifyContent:'center',
        fontFamily:'Poppins, sans-serif',
        margin: 2,
        fontSize: { xs: "14px", md: "16px", lg: "18px" },
      }}
      >
        © 2025 Essentia. All rights reserved.
      </Typography>
    </div>
  )
}

export default Footer