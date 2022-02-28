import { Box, Image, Flex, Badge, Text, SimpleGrid } from "@chakra-ui/react";

import HomeLayout from "../components/HomeLayout";
import KText from "../components/KText";

export default function Projects(props) {
  const { currentUser } = props;

  return (
    <HomeLayout>
      <KText mt={4} type="semi-head" textAlign="left">
        Comming Projects
      </KText>
      <KText ml={0.5} type="normal" textAlign="left">
        Upcoming and active top tier IDOs & crypto launchpad offerings.
      </KText>
      <Project />

      <KText mt={4} type="semi-head" textAlign="left">
        Running Projects
      </KText>

      <KText ml={0.5} type="normal" textAlign="left">
        Discover ongoing crypto launchpad offerings & IDOs.
      </KText>

      <Project />

      <KText mt={4} type="semi-head" textAlign="left">
        Finished Projects
      </KText>
      <KText ml={0.5} type="normal" textAlign="left">
        All past IDOs/SHO offerings that were hosted on DAO Maker crypto
        launchpad.
      </KText>

      <Project />
    </HomeLayout>
  );
}

const Project = (props) => {
  const property = {
    imageUrl: "https://storage.googleapis.com/dao-pad-production.appspot.com/5eac16a58854bf3711afae6f41b0ea05_photo.png",
    imageAlt: "Rear view of modern home with pool",
    beds: 3,
    baths: 2,
    title: "Modern home in city center in the heart of historic Los Angeles",
    formattedPrice: "$1,900.00",
    reviewCount: 34,
    rating: 4,
  };

  return (
    <SimpleGrid columns={3} mt={4} mb={6} spacing={8}>
      {[1, 2, 3].map((data) => (
        <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
          <Image src={property.imageUrl} alt={property.imageAlt} />

          <Box p="6">
            <Box display="flex" alignItems="baseline">
              <Badge borderRadius="full" px="2" colorScheme="teal">
                New
              </Badge>
              <Box
                color="gray.500"
                fontWeight="semibold"
                letterSpacing="wide"
                fontSize="xs"
                textTransform="uppercase"
                ml="2"
              >
                {property.beds} beds &bull; {property.baths} baths
              </Box>
            </Box>

            <Box
              mt="1"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated
            >
              {property.title}
            </Box>

            <Box>
              {property.formattedPrice}
              <Box as="span" color="gray.600" fontSize="sm">
                / wk
              </Box>
            </Box>

            <Box display="flex" mt="2" alignItems="center">
              <Box as="span" color="gray.600" fontSize="sm">
                {property.reviewCount} reviews
              </Box>
            </Box>
          </Box>
        </Box>
      ))}
    </SimpleGrid>
  );
};
