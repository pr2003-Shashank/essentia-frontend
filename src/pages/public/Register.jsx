import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, TextField, Typography, Divider, IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import Logo from '../../assets/logo.png';

function Register() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    console.log('Registration form submitted:', formData);
    // Add your registration logic here
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
            Create your account
          </Typography>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6">
          <TextField
            fullWidth
            label="Full Name"
            name="name"
            variant="outlined"
            margin="normal"
            value={formData.name}
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

          <TextField
            fullWidth
            label="Confirm Password"
            name="confirmPassword"
            type={showConfirmPassword ? 'text' : 'password'}
            variant="outlined"
            margin="normal"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    edge="end"
                    sx={{ color: 'rgb(30, 58, 138)' }}
                  >
                    {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
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

          <Button
            fullWidth
            variant="contained"
            type="submit"
            sx={{
              backgroundColor: 'rgb(30, 58, 138)',
              color: 'white',
              fontFamily: 'Poppins, sans-serif',
              padding: '10px',
              marginTop: '16px',
              '&:hover': {
                backgroundColor: 'rgb(59, 130, 246)',
              }
            }}
          >
            Register
          </Button>

          <Divider sx={{ my: 3, borderColor: 'rgba(30, 58, 138, 0.3)' }}>
            <Typography 
              variant="body2" 
              sx={{
                color: 'rgb(30, 58, 138)',
                fontFamily: 'Poppins, sans-serif'
              }}
            >
              ALREADY HAVE AN ACCOUNT?
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
            onClick={() => navigate('/login')}
          >
            Login Instead
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Register;