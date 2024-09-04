import React, { useState } from 'react';
import { Container, Heading, VStack, Box, Input, useColorModeValue, Button, Text, useToast } from '@chakra-ui/react'; 
import { useProductStore } from '../store/product';

const Createpage = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: ""
  });
  
  const [error, setError] = useState(""); // State to manage error messages
  const { createProduct } = useProductStore();
const toast=useToast()


const handleAddProduct = async () => {
  setError(""); // Clear any previous error message

  // Basic form validation
  if (!newProduct.name || !newProduct.price || !newProduct.image) {
    setError("Please fill in all fields.");
    return;
  }

  // Additional validation to ensure price is a valid number and greater than 0
  if (isNaN(newProduct.price) || newProduct.price <= 0) {
    setError("Please enter a valid price.");
    return;
  }

  try {
    const result = await createProduct(newProduct);

    // Check the result from createProduct
    if (!result.success) {
      toast({
        title: "Error",
        description: result.message || "An error occurred.",
        status: "error",
        isClosable: true,
      });
    } else {
      toast({
        title: "Success",
        description: result.message || "Product added successfully.",
        status: "success",
        isClosable: true,
      });

      // Clear the input fields after successful product addition
      setNewProduct({ name: "", price: "", image: "" });
    }

    console.log("Success:", result.success);
    console.log("Message:", result.message);
  } catch (error) {
    // Catch and handle errors, including any unexpected issues
    setError(error.message || "An unexpected error occurred.");
    console.error("Error:", error);
  }
};
 

  return (
    <Container maxW={"container.sm"}>
      <VStack spacing={8}>
        <Heading as={"h1"} size={"2xl"} textAlign={"center"} mb={8}>
          Create New Product
        </Heading>
        <Box
          w={"full"}
          bg={useColorModeValue("white", "gray.900")}
          p={6}
          rounded={"lg"}
          shadow={"md"}
        >
          <VStack spacing={4}>
            <Input
              placeholder='Enter Product Name'
              name='name'
              value={newProduct.name}
              onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
            />
            <Input
              placeholder='Enter Product Price'
              name='price'
              type='number'
              value={newProduct.price}
              onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
            />
            <Input
              placeholder='Enter Image Url'
              name='image'
              value={newProduct.image}
              onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
            />
            <Button 
              colorScheme='blue'
              onClick={handleAddProduct}
              w={"full"}
            >
              Add Product
            </Button>
            {error && (
              <Text color="red.500" mt={4}>
                {error}
              </Text>
            )}
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Createpage;
