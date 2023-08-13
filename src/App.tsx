import { Flex, Box } from "@chakra-ui/react";
import QRCard from "./components/QRCard";

const App = () => {
  return (
    <Flex
      direction="column"
      h="100vh"
      alignItems="center"
      backgroundColor="blue.100"
    >
      <Box m="0.2">
        <QRCard />
      </Box>
    </Flex>
  );
};

export default App;
