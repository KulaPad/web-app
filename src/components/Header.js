import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import { BiWallet } from "react-icons/bi";
import { FiZap } from "react-icons/fi";
import { RiCopperCoinLine } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";
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
  const location = useLocation();
  console.log("window.location.pathname::", location.pathname);

  return (
    <Box borderBottom="1px solid #f0f0f1" w="100%">
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        w="100%"
        p={0}
        px={8}
        h="70px"
        bg={["primary.500", "primary.500", "transparent", "transparent"]}
        maxW={{ xl: "1200px" }}
        margin="0 auto"
        {...props}
      >
        <Flex align="center">
          <Link to="/">
            <KText ml={1} type="small-title" fontWeight="500">
              🚀 KulaPad
            </KText>
          </Link>
          <Box mx={3} borderLeft="1px solid #e5e5e6" height="16px"></Box>
          <Link to="/projects">
            <Flex align="center" justify="center">
              <Icon
                as={RiCopperCoinLine}
                h="24px"
                w="24px"
                color={
                  location.pathname === "/projects" ? "#0072ce" : "#72727a"
                }
              />
              <KText
                ml={1}
                type="small-title"
                fontWeight="500"
                color={
                  location.pathname === "/projects" ? "#0072ce" : "#72727a"
                }
              >
                Projects
              </KText>
            </Flex>
          </Link>
          <Box mx={3} borderLeft="1px solid #e5e5e6" height="16px"></Box>
          <Link to="/staking">
            <Flex align="center" justify="center">
              <Icon
                as={BiWallet}
                h="24px"
                w="24px"
                color={location.pathname === "/staking" ? "#0072ce" : "#72727a"}
              />
              <KText
                ml={1}
                type="small-title"
                fontWeight="500"
                color={location.pathname === "/staking" ? "#0072ce" : "#72727a"}
              >
                Staking
              </KText>
            </Flex>
          </Link>
        </Flex>

        <Box flexBasis={{ base: "100%", md: "auto" }}>
          <Flex
            align={["center", "center", "center", "center"]}
            justify={["center", "space-between", "flex-end", "flex-end"]}
            direction={["column", "row", "row", "row"]}
            pt={[4, 4, 0, 0]}
          >
            <Link to="/claim">
              <Flex align="center" justify="center">
                <Icon
                  as={FiZap}
                  color={location.pathname === "/claim" ? "#0072ce" : "#72727a"}
                />
                <KText
                  ml={1}
                  type="text"
                  fontWeight="500"
                  color={location.pathname === "/claim" ? "#0072ce" : "#72727a"}
                >
                  Claim (TestNet Token)
                </KText>
              </Flex>
            </Link>
            <Box mx={2} borderLeft="1.5px solid #e5e5e6" height="16px"></Box>
            <SignInBtn size="sm" rounded="md" />
            {/* <MenuItem>
              <ColorModeSwitcher />
            </MenuItem> */}
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default Header;
