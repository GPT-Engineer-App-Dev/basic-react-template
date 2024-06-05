import { Container, Text, VStack, Box, Flex, Spacer, Button, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";

const Index = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("gray.100", "gray.900");
  const color = useColorModeValue("black", "white");

  return (
    <Box bg={bg} color={color} minHeight="100vh">
      <Flex as="nav" bg={useColorModeValue("white", "gray.800")} p={4} boxShadow="md">
        <Box fontWeight="bold">MyApp</Box>
        <Spacer />
        <Button onClick={toggleColorMode} leftIcon={colorMode === "light" ? <FaMoon /> : <FaSun />}>
          {colorMode === "light" ? "Dark" : "Light"} Mode
        </Button>
      </Flex>
      <Container centerContent maxW="container.md" py={10}>
        <VStack spacing={4}>
          <Text fontSize="2xl">Welcome to MyApp</Text>
          <Text>This is a basic structure of a React app with Chakra UI.</Text>
        </VStack>
      </Container>
    </Box>
  );
};

export default Index;