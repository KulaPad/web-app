import { Link } from "react-router-dom";
import { Box, Flex, Text, Button, Stack } from "@chakra-ui/react";
import { ColorModeSwitcher } from "../ColorModeSwitcher";
import Logo from "./Logo";
import KText from "./KText";
import SignInBtn from "./SignInBtn";

const MenuItem = (props) => {
  const { children, isLast, to, ...rest } = props;
  return (
    <Text
      mb={{ base: isLast ? 0 : 8, sm: 0 }}
      mr={{ base: 0, sm: isLast ? 0 : 8 }}
      display="block"
      {...rest}
    >
      {to && <Link to={to}>{children}</Link>}
      {!to && children}
    </Text>
  );
};

const Header = (props) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={4}
      p={8}
      bg={["primary.500", "primary.500", "transparent", "transparent"]}
      {...props}
    >
      <Flex align="center">
        <Link to="/">
          <Logo height={44} />
        </Link>
        <Box mx={2} borderLeft="1.5px solid #999" height="16px"></Box>
        <Link to="/claim">
          <KText type="text" color="#0072ce">
            Claim TestNet Token
          </KText>
        </Link>
      </Flex>

      <Box flexBasis={{ base: "100%", md: "auto" }}>
        <Flex
          align={["center", "center", "center", "center"]}
          justify={["center", "space-between", "flex-end", "flex-end"]}
          direction={["column", "row", "row", "row"]}
          pt={[4, 4, 0, 0]}
        >
          <MenuItem>
            <SignInBtn size="sm" rounded="md" />
          </MenuItem>
          <MenuItem>
            <ColorModeSwitcher />
          </MenuItem>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Header;
