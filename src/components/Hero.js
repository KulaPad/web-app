import { Link } from "react-router-dom";
import { Box, Button, Flex, Image, Heading, Stack } from "@chakra-ui/react";

export default function Hero({
  title,
  subtitle,
  image,
  ctaLink,
  ctaOnClick,
  ctaText,
  ...rest
}) {
  return (
    <Flex
      align="center"
      direction={{ base: "column-reverse", md: "row" }}
      minH="calc(100vh - 80px - 88px - 80px)"
      px={8}
      mb={16}
      gap={12}
      {...rest}
    >
      <Stack
        spacing={4}
        w={{ base: "80%", md: "40%" }}
        align={["center", "center", "flex-start", "flex-start"]}
      >
        <Heading
          as="h1"
          size="xl"
          fontWeight="bold"
          color="primary.800"
          textAlign={["center", "center", "left", "left"]}
        >
          {title}
        </Heading>
        <Heading
          as="h2"
          size="md"
          color="primary.800"
          opacity="0.8"
          fontWeight="normal"
          lineHeight={1.5}
          textAlign={["center", "center", "left", "left"]}
        >
          {subtitle}
        </Heading>
        {ctaLink && (
          <Link to={ctaLink}>
            <Button borderRadius="8px" py="4" px="4" lineHeight="1" size="md">
              {ctaText}
            </Button>
          </Link>
        )}
        {ctaOnClick && ctaText && (
          <Button
            borderRadius="8px"
            py="4"
            px="4"
            lineHeight="1"
            size="md"
            onClick={ctaOnClick}
          >
            {ctaText}
          </Button>
        )}
        {ctaLink && ctaText && (
          <Link to={ctaLink}>
            <Button borderRadius="8px" py="4" px="4" lineHeight="1" size="md">
              {ctaText}
            </Button>
          </Link>
        )}
      </Stack>
      <Box w={{ base: "80%", sm: "60%", md: "50%" }} mb={{ base: 12, md: 0 }}>
        <Image
          src={image}
          width="600px"
          height="400px"
          rounded="1rem"
          shadow="2xl"
          // fallback={<Skeleton width="600px" height="400px" />}
        />
      </Box>
    </Flex>
  );
}
