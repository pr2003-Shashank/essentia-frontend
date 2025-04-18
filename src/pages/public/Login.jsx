import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, TextField, Typography, Divider, IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import Logo from '../../assets/logo.png';

function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        localStorage.setItem("user", JSON.stringify(data.user));
        alert("Login Successful!");
        setTimeout(() => {
          navigate('/home');
        }, 2000);
      } else {
        alert(data.message || "Login failed!");
      }
  
    } catch (error) {
      console.error("Login error:", error);
      alert("An error occurred. Please try again.");
    }
  };
  
  

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-50 p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md overflow-hidden">
        {/* Header */}
        <div className="bg-blue-900 p-6 text-center">
          <div className="flex justify-center items-center mb-4">
            <img src={Logo} alt="Essentia Logo" className="h-12 mr-3" />
            <Typography 
              variant="h5" 
              sx={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 600,
                color: 'white'
              }}
            >
              ESSENTIA
            </Typography>
          </div>
          <Typography 
            variant="subtitle1"
            sx={{
              fontFamily: 'Poppins, sans-serif',
              color: 'white'
            }}
          >
            Welcome back! Please login to your account
          </Typography>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6">
          <TextField
            fullWidth
            label="Email"
            name="email"
            type="email"
            variant="outlined"
            margin="normal"
            value={formData.email}
            onChange={handleChange}
            required
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: 'rgb(30, 58, 138)',
                },
                '&:hover fieldset': {
                  borderColor: 'rgb(30, 58, 138)',
                },
              },
              '& .MuiInputLabel-root': {
                color: 'rgb(30, 58, 138)',
              },
            }}
          />

          <TextField
            fullWidth
            label="Password"
            name="password"
            type={showPassword ? 'text' : 'password'}
            variant="outlined"
            margin="normal"
            value={formData.password}
            onChange={handleChange}
            required
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowPassword(!showPassword)}
                    edge="end"
                    sx={{ color: 'rgb(30, 58, 138)' }}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              )
            }}
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: 'rgb(30, 58, 138)',
                },
                '&:hover fieldset': {
                  borderColor: 'rgb(30, 58, 138)',
                },
              },
              '& .MuiInputLabel-root': {
                color: 'rgb(30, 58, 138)',
              },
            }}
          />

          <div className="flex justify-end mb-4">
            <Button 
              variant="text" 
              size="small"
              sx={{
                color: 'rgb(30, 58, 138)',
                fontFamily: 'Poppins, sans-serif',
                textTransform: 'none'
              }}
              onClick={() => console.log('Forgot password clicked')}
            >
              Forgot Password?
            </Button>
          </div>

          <Button
            fullWidth
            variant="contained"
            type="submit"
            sx={{
              backgroundColor: 'rgb(30, 58, 138)',
              color: 'white',
              fontFamily: 'Poppins, sans-serif',
              padding: '10px',
              '&:hover': {
                backgroundColor: 'rgb(59, 130, 246)',
              }
            }}
          >
            Login
          </Button>

          <Divider sx={{ my: 3, borderColor: 'rgba(30, 58, 138, 0.3)' }}>
            <Typography 
              variant="body2" 
              sx={{
                color: 'rgb(30, 58, 138)',
                fontFamily: 'Poppins, sans-serif'
              }}
            >
              OR
            </Typography>
          </Divider>

          <Button
            fullWidth
            variant="outlined"
            sx={{
              borderColor: 'rgb(30, 58, 138)',
              color: 'rgb(30, 58, 138)',
              fontFamily: 'Poppins, sans-serif',
              padding: '10px',
              '&:hover': {
                backgroundColor: 'rgba(30, 58, 138, 0.1)',
                borderColor: 'rgb(30, 58, 138)',
              }
            }}
            onClick={() => navigate('/register')}
          >
            Create New Account
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Login;