import {
  Card,
  CardBody,
  Center,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import QRImage from "../assets/image-qr-code.png";

const QRCard = () => {
  return (
    <Center>
      <Card mt="5" maxW="md" borderRadius="lg">
        <CardBody>
          <Image src={QRImage} borderRadius="lg" />
          <Stack mt="5" spacing="4">
            <Heading fontSize={30} textAlign="center">
              {" "}
              Improve your front-end skills by building projects
            </Heading>
            <Text textAlign="center" fontSize="lg" textColor="gray">
              Scan the QR code to visit Frontend{" "}
              <Text> Mentor and take your coding skills to </Text> the next
              level
            </Text>
          </Stack>
        </CardBody>
      </Card>
    </Center>
  );
};

export default QRCard;
