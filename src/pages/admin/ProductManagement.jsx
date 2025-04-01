import React from 'react';
import products from '../../services/ProductFetch';
import { Box, Chip, Paper, TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Button, Stack, IconButton } from '@mui/material';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/EditNoteOutlined';import CloudUploadIcon from '@mui/icons-material/CloudUpload';

function ProductManagement() {

    const [searchQuery, setSearchQuery] = useState('');
    const [addProduct, setAddProduct] = useState(false);
    const [images, setImages] = useState([]);

    const handleFileChange = (event) => {
        const files = Array.from(event.target.files);
        const imagePreviews = files.map((file) => ({
            name: file.name,
            url: URL.createObjectURL(file),
        }));

        setImages((prev) => [...prev, ...imagePreviews]);
    };

    const handleDelete = (imageName) => {
        setImages(images.filter((img) => img.name !== imageName));
    };

    // Filter products based on the search query
    const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const VisuallyHiddenInput = styled('input')({
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: 1,
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0,
        left: 0,
        whiteSpace: 'nowrap',
        width: 1,
    });

    const FormField = ({ label, id, multiline = false, rows = 1, type = 'text' }) => (
        <>
            <Typography
                sx={{
                    fontFamily: "Poppins, sans-serif",
                    fontSize: { xs: "14px", sm: "14px", md: "16px", lg: "16px" },
                }}
            >
                {label}
            </Typography>
            <TextField
                sx={{ backgroundColor: "rgb(255, 255, 255)" }}
                fullWidth
                size="small"
                id={id}
                multiline={multiline}
                rows={rows}
                type={type}
            />
        </>
    );

    return (
        <div className='flex flex-col'>
            <div className='flex w-full flex-row p-4'>
                <Typography
                    component='div'
                    className='w-1/2'
                    sx={{
                        fontFamily: "Poppins, sans-serif",
                        fontSize: { xs: "16px", sm: "16px", md: "18px", lg: "20px" },
                        color: "rgb(30, 58, 138)",
                        alignContent: 'center',
                    }}
                >
                    Product Management
                </Typography>
                <div className='flex w-1/2 justify-end'>
                    <Button
                        variant="contained"
                        sx={{
                            display: 'flex',
                            width: 'fit-content',
                            height: "fit-content",
                            fontFamily: "Poppins, sans-serif",
                            fontSize: { xs: "12px", sm: "12px", md: "14px", lg: "14px" },
                            textTransform: 'none'
                        }}
                        className="!bg-blue-900 hover:!bg-blue-400"
                        onClick={(e) => {
                            setAddProduct(!addProduct)
                        }}
                    >
                        Add product
                    </Button>
                </div>
            </div>
            {addProduct &&
                <div className="flex w-full justify-center p-4">
                    <Stack
                        sx={{
                            width: { xs: "100%", sm: "50%" },
                            padding: 2,
                            backgroundColor: "rgb(96, 165, 250, 0.2)",
                            borderRadius: 2,
                        }}
                        direction={{ xs: "column" }}
                        spacing={1}
                    >
                        <div className="flex">
                            <Button
                                sx={{
                                    color: "white", height: "auto",
                                    backgroundColor: "rgb(215, 38, 38, 0.5)"
                                }}
                                variant="outlined"
                                onClick={(e) => {
                                    setAddProduct(!addProduct)
                                }}>
                                <CloseIcon sx={{ fontSize: "16px" }} />
                            </Button>
                        </div>
                        <Typography
                            component="div"
                            sx={{
                                width: "100%",
                                fontFamily: "Poppins, sans-serif",
                                fontSize: { xs: "14px", sm: "14px", md: "16px", lg: "16px" },
                                color: "rgb(30, 58, 138)",
                                textAlign: "center",
                            }}
                        >
                            Add a new product
                        </Typography>
                        <FormField label="Product name:" id="name" />
                        <FormField label="Product category:" id="category" />
                        <FormField label="Price in (₹):" id="price" type='number' />
                        <FormField label="Product initial stock:" id="stock" type='number' />
                        <FormField label="Product description:" id="description" multiline rows={4} />
                        <Typography
                            sx={{
                                fontFamily: "Poppins, sans-serif",
                                fontSize: { xs: "14px", sm: "14px", md: "16px", lg: "16px" },
                            }}
                        >
                            Product image:
                        </Typography>
                        {/* Display uploaded images as chips */}
                        <Stack direction="row" spacing={1} flexWrap="wrap">
                            {images.map((img) => (
                                <Chip
                                    key={img.name}
                                    label={img.name}
                                    onDelete={() => handleDelete(img.name)}
                                    avatar={<img src={img.url} alt={img.name} style={{ width: 32, height: 32, borderRadius: "50%" }} />}
                                    sx={{ maxWidth: 150 }}
                                />
                            ))}
                        </Stack>
                        <Button
                            component="label"
                            role={undefined}
                            variant="contained"
                            tabIndex={-1}
                            startIcon={<CloudUploadIcon />}
                            sx={{  display: 'flex',
                                width: 'fit-content',
                                height: "fit-content",
                                fontFamily: "Poppins, sans-serif",
                                fontSize: { xs: "12px", sm: "12px", md: "14px", lg: "14px" },
                                textTransform: 'none',
                                 backgroundColor:"rgb(30, 58, 138) "
                                }}
                        >
                            Upload files
                            <VisuallyHiddenInput
                                type="file"
                                onChange={handleFileChange}
                                multiple
                                accept="image/jpeg, image/png, image/jpg"
                            />
                        </Button>
                        <div className='flex justify-end'>
                        <Button
                            type='submit'
                            variant='contained'
                            sx={{ 
                                display: 'flex',
                                height: "fit-content",
                                width: "fit-content",
                                fontFamily: "Poppins, sans-serif",
                                fontSize: { xs: "12px", sm: "12px", md: "14px", lg: "14px" },
                                textTransform: 'none',
                                backgroundColor:"rgb(30, 58, 138)"}}
                        >
                            Submit
                        </Button>
                        </div>
                        
                    </Stack>
                </div>
            }
            <div className='flex w-full justify-start pl-5'>
                <TextField
                    label="Search Products"
                    variant="outlined"
                    onChange={(e) => setSearchQuery(e.target.value)}
                    size="small"
                    sx={{
                        display: 'flex',
                        width: { xs: '80%', sm: '50%' },
                        backgroundColor: 'rgba(96, 165, 250, 0.2)'
                    }}
                />

            </div>
            <div className='flex w-full p-4'>
                <Box sx={{ width: '100%', overflowX: 'scroll' }} className='p-2'>
                    <TableContainer component={Paper} >
                        <Table>
                            <TableHead className='bg-blue-200'>
                                <TableRow>
                                    <TableCell className='!font-poppins !text-[12px] sm:!text-[12px] md:!text-[14px] lg:!text-[14px]'>ID</TableCell>
                                    <TableCell className='!font-poppins !text-[12px] sm:!text-[12px] md:!text-[14px] lg:!text-[14px]' sx={{ minWidth: '100px' }}>Name</TableCell>
                                    <TableCell className='!font-poppins !text-[12px] sm:!text-[12px] md:!text-[14px] lg:!text-[14px]'>Category</TableCell>
                                    <TableCell className='!font-poppins !text-[12px] sm:!text-[12px] md:!text-[14px] lg:!text-[14px]' align='right'>Price</TableCell>
                                    <TableCell className='!font-poppins !text-[12px] sm:!text-[12px] md:!text-[14px] lg:!text-[14px]' align='right'>Stock</TableCell>
                                    <TableCell align='center'  sx={{ minWidth: '100px' }}>Actions</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {filteredProducts.map((product) => (
                                    <TableRow key={product.id}>
                                        <TableCell className='!font-poppins !text-[12px] sm:!text-[12px] md:!text-[14px] lg:!text-[14px]'>{product.id}</TableCell>
                                        <TableCell className='!font-poppins !text-[12px] sm:!text-[12px] md:!text-[14px] lg:!text-[14px]'>{product.name}</TableCell>
                                        <TableCell className='!font-poppins !text-[12px] sm:!text-[12px] md:!text-[14px] lg:!text-[14px]'>{product.category}</TableCell>
                                        <TableCell className='!font-poppins !text-[12px] sm:!text-[12px] md:!text-[14px] lg:!text-[14px]' align='right'>{product.price}</TableCell>
                                        <TableCell className='!font-poppins !text-[12px] sm:!text-[12px] md:!text-[14px] lg:!text-[14px]' align='right'>{product.stock}</TableCell>
                                        <TableCell  sx={{ minWidth: '150px' }} align='center'>
                                            <IconButton
                                                sx={{
                                                    color:'rgb(30, 58, 138)'
                                                }}
                                            >
                                                <EditIcon/>
                                            </IconButton>
                                            <IconButton
                                                sx={{
                                                    color:'rgb(30, 58, 138)'
                                                }}
                                            >
                                                <DeleteIcon />
                                            </IconButton>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            </div>
        </div>
    )
}

export default ProductManagement