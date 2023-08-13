import { Box, Card, CardBody, Center, Image } from "@chakra-ui/react";
import QRImage from "../assets/image-qr-code.png";

const QRCard = () => {
  return (
    <Box>
      <Center>
        <Card maxW="lg" borderRadius="lg">
          <CardBody>
            <Image src={QRImage} />
          </CardBody>
        </Card>
      </Center>
    </Box>
  );
};

export default QRCard;
