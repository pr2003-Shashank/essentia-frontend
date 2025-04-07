import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchProducts, addProduct, removeProduct, fetchProductById } from "../services/productApi";

export const useProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
    staleTime: 300000,  // Cache for 5 minutes
  });
};

export const useProductById = (productId) => {
  return useQuery({
    queryKey: ["product", productId], 
    queryFn: () => fetchProductById(productId), 
    enabled: !!productId, // Ensures query runs only if productId exists
  });
};

export const useAddProduct = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: addProduct,
    onSuccess: () => {
      queryClient.invalidateQueries(["products"]); // Refresh product list after adding
    },
  });
};

export const useRemoveProduct = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: removeProduct,
    onSuccess: () => {
      queryClient.invalidateQueries(["products"]); // Refresh product list after removing
    },
  });
};
