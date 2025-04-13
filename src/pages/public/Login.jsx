import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Button,
  TextField,
  Typography,
  IconButton,
  InputAdornment,
  Divider
} from '@mui/material';
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
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://127.0.0.1:5000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (res.ok && data.token) {
        localStorage.setItem("token", data.token); // Store JWT for auth
        alert("Login Successful!");
        navigate("/home");
      } else {
        alert(data.message || "Login failed. Please try again.");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  const inputStyle = {
    '& .MuiOutlinedInput-root': {
      '& fieldset': { borderColor: 'rgb(30, 58, 138)' },
      '&:hover fieldset': { borderColor: 'rgb(30, 58, 138)' },
    },
    '& .MuiInputLabel-root': {
      color: 'rgb(30, 58, 138)',
    },
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
            Welcome back! Log in to continue.
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
            sx={inputStyle}
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
            sx={inputStyle}
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
              DON'T HAVE AN ACCOUNT?
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
            Register Now
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Login;
