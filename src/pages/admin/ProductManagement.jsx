import React from 'react';
import { Box, Chip, Paper, TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Button, Stack, IconButton } from '@mui/material';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/EditNoteOutlined';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useProductContext } from "../../context/ProductContext";
import { useAddProduct, useRemoveProduct } from '../../hooks/useProducts';

function ProductManagement() {
    const { products } = useProductContext();
    const { mutate: addProduct, isLoading, error } = useAddProduct(); // React Query mutation
    const { mutate: removeProduct } = useRemoveProduct();

    const [formData, setFormData] = useState({
        name: "",
        category: "",
        price: "",
        stock: "",
        description: "",
        image_url: "",
    });

    const [searchQuery, setSearchQuery] = useState('');
    const [addingProduct, setAddingProduct] = useState(false);
    const [images, setImages] = useState([]);

    const handleFileChange = async (event) => {
        const file = event.target.files[0];
        if (!file) return;

        try {
            const formData = new FormData();
            formData.append("file", file);

            // Send file to Flask backend
            const response = await fetch("http://127.0.0.1:5000/upload", {
                method: "POST",
                body: formData,
            });

            const data = await response.json();
            if (data.image_url) {
                setImages([{ name: file.name, url: data.image_url }]);
                setFormData((prev) => ({ ...prev, image_url: data.image_url }));
            } else {
                throw new Error("Upload failed");
            }
        } catch (error) {
            console.error("Image upload failed", error);
            alert("Failed to upload image. Please try again.");
        }
    };


    const handleDeleteImage = () => {
        setImages([]);
        setFormData({ ...formData, image: "" });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.name || !formData.category || !formData.price || !formData.image_url || !formData.description || !formData.stock) {
            alert("Please fill in all required fields");
            return;
        }

        addProduct(formData, {
            onSuccess: (newProduct) => {
                alert("Product added successfully!");
                setFormData({
                    name: "",
                    category: "",
                    price: "",
                    image_url: "",
                    stock: "",
                    description: "",
                });
                setImages([]);

                // Close the add product form
                setAddingProduct(false);
            },
        });

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
                            setAddingProduct(!addingProduct)
                        }}
                    >
                        Add product
                    </Button>
                </div>
            </div>
            {addingProduct &&
                <div className="flex w-full justify-center p-4">
                    <Stack
                        sx={{
                            width: { xs: "100%", sm: "50%" },
                            padding: 2,
                            backgroundColor: "rgb(96, 165, 250, 0.2)",
                            borderRadius: 2,
                        }}
                        direction="column"
                        spacing={1}
                        component="form"
                        onSubmit={handleSubmit}
                    >
                        <div className="flex">
                            <Button
                                sx={{
                                    color: "white", height: "auto",
                                    backgroundColor: "rgb(215, 38, 38, 0.5)"
                                }}
                                variant="outlined"
                                onClick={(e) => {
                                    setAddingProduct(!addingProduct)
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
                        {/* Form fields */}
                        <Typography
                            sx={{ fontFamily: "Poppins, sans-serif", fontSize: { xs: "14px", sm: "14px", md: "16px", lg: "16px" } }}>
                            Product name:
                        </Typography>
                        <TextField
                            sx={{ backgroundColor: "rgb(255, 255, 255)" }}
                            fullWidth
                            size="small"
                            id="name"
                            type="text"
                            value={formData.name}
                            onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                        />

                        <Typography
                            sx={{ fontFamily: "Poppins, sans-serif", fontSize: { xs: "14px", sm: "14px", md: "16px", lg: "16px" } }}>
                            Product Category:
                        </Typography>
                        <TextField
                            sx={{ backgroundColor: "rgb(255, 255, 255)" }}
                            fullWidth
                            size="small"
                            id="category"
                            type="text"
                            value={formData.category}
                            onChange={(e) => setFormData((prev) => ({ ...prev, category: e.target.value }))}
                        />

                        <Typography
                            sx={{ fontFamily: "Poppins, sans-serif", fontSize: { xs: "14px", sm: "14px", md: "16px", lg: "16px" } }}>
                            Price in (₹):
                        </Typography>
                        <TextField
                            sx={{ backgroundColor: "rgb(255, 255, 255)" }}
                            fullWidth
                            size="small"
                            id="price"
                            type="number"
                            value={formData.price}
                            onChange={(e) => setFormData((prev) => ({ ...prev, price: e.target.value }))}
                        />

                        <Typography
                            sx={{ fontFamily: "Poppins, sans-serif", fontSize: { xs: "14px", sm: "14px", md: "16px", lg: "16px" } }}>
                            Product initial stock:
                        </Typography>
                        <TextField
                            sx={{ backgroundColor: "rgb(255, 255, 255)" }}
                            fullWidth
                            size="small"
                            id="stock"
                            type="number"
                            value={formData.stock}
                            onChange={(e) => setFormData((prev) => ({ ...prev, stock: e.target.value }))}
                        />

                        <Typography
                            sx={{ fontFamily: "Poppins, sans-serif", fontSize: { xs: "14px", sm: "14px", md: "16px", lg: "16px" } }}>
                            Product Description:
                        </Typography>
                        <TextField
                            sx={{ backgroundColor: "rgb(255, 255, 255)" }}
                            fullWidth
                            size="small"
                            id="description"
                            type="text"
                            multiline
                            rows={4}
                            value={formData.description}
                            onChange={(e) => setFormData((prev) => ({ ...prev, description: e.target.value }))}
                        />
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
                                    onDelete={() => handleDeleteImage(img.name)}
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
                            sx={{
                                display: 'flex',
                                width: 'fit-content',
                                height: "fit-content",
                                fontFamily: "Poppins, sans-serif",
                                fontSize: { xs: "12px", sm: "12px", md: "14px", lg: "14px" },
                                textTransform: 'none',
                                backgroundColor: "rgb(30, 58, 138) "
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
                        {/*If error*/}
                        {error && <Typography color="error">{error.message}</Typography>}
                        <div className='flex justify-end'>
                            <Button
                                type='submit'
                                variant='contained'
                                disabled={isLoading}
                                sx={{
                                    display: 'flex',
                                    height: "fit-content",
                                    width: "fit-content",
                                    fontFamily: "Poppins, sans-serif",
                                    fontSize: { xs: "12px", sm: "12px", md: "14px", lg: "14px" },
                                    textTransform: 'none',
                                    backgroundColor: "rgb(30, 58, 138)"
                                }}
                            >
                                {isLoading ? "Submitting..." : "Submit"}
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
                                    <TableCell align='center' sx={{ minWidth: '100px' }}>Actions</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {filteredProducts.map((product, index) => (
                                    <TableRow key={product.id}>
                                        <TableCell className='!font-poppins !text-[12px] sm:!text-[12px] md:!text-[14px] lg:!text-[14px]'>{index + 1}</TableCell>
                                        <TableCell className='!font-poppins !text-[12px] sm:!text-[12px] md:!text-[14px] lg:!text-[14px]'>{product.name}</TableCell>
                                        <TableCell className='!font-poppins !text-[12px] sm:!text-[12px] md:!text-[14px] lg:!text-[14px]'>{product.category}</TableCell>
                                        <TableCell className='!font-poppins !text-[12px] sm:!text-[12px] md:!text-[14px] lg:!text-[14px]' align='right'>{product.price}</TableCell>
                                        <TableCell className='!font-poppins !text-[12px] sm:!text-[12px] md:!text-[14px] lg:!text-[14px]' align='right'>{product.stock}</TableCell>
                                        <TableCell sx={{ minWidth: '150px' }} align='center'>
                                            <IconButton
                                                sx={{
                                                    color: 'rgb(30, 58, 138)'
                                                }}
                                            >
                                                <EditIcon />
                                            </IconButton>
                                            <IconButton
                                                sx={{
                                                    color: 'rgb(30, 58, 138)'
                                                }}
                                                onClick={() => {
                                                    if (window.confirm("Are you sure you want to delete this product?")) {
                                                        removeProduct(product._id);
                                                    }
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