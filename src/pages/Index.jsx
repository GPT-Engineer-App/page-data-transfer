import React, { useState, useEffect } from "react";
import { Box, Button, Input, Text, VStack, Heading, Container } from "@chakra-ui/react";

const Index = () => {
  const [page, setPage] = useState(1);
  const [inputValue, setInputValue] = useState("");

  // Load saved data from localStorage when the component mounts
  useEffect(() => {
    const savedData = localStorage.getItem("userInput");
    if (savedData) {
      setInputValue(savedData);
    }
  }, []);

  // Save data to localStorage when inputValue changes
  useEffect(() => {
    localStorage.setItem("userInput", inputValue);
  }, [inputValue]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const navigateToPage = (pageNumber) => {
    setPage(pageNumber);
  };

  return (
    <Container centerContent>
      <VStack spacing={4} mt={10}>
        <Heading>{page === 1 ? "Page 1" : "Page 2"}</Heading>
        {page === 1 ? (
          <>
            <Text>Enter your data:</Text>
            <Input placeholder="Type here..." value={inputValue} onChange={handleInputChange} />
            <Button colorScheme="blue" onClick={() => navigateToPage(2)}>
              Go to Page 2
            </Button>
          </>
        ) : (
          <>
            <Text>Your entered data is:</Text>
            <Box p={4} borderWidth="1px" borderRadius="lg">
              {inputValue}
            </Box>
            <Button colorScheme="teal" onClick={() => navigateToPage(1)}>
              Back to Page 1
            </Button>
          </>
        )}
      </VStack>
    </Container>
  );
};

export default Index;
