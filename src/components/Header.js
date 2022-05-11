import { Box, Flex, Icon, Image } from "@chakra-ui/react";
import { BiWallet } from "react-icons/bi";
import { FiZap } from "react-icons/fi";
import { RiCopperCoinLine } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";
import KText from "./KText";
import SignInBtn from "./Auth/SignInBtn";

const Header = (props) => {
  const location = useLocation();
  console.log("window.location.pathname::", location.pathname);

  return (
    <Box borderBottom="1px solid #f0f0f1" w="100%" bg="white" zIndex={10}>
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
            <Image h={6} src={`/mstatic/banner.png`} />
          </Link>
          <Box mx={3} borderLeft="1px solid #e5e5e6" height="16px"></Box>
          <Link to="/projects">
            <Flex align="center" justify="center">
              <Icon
                as={RiCopperCoinLine}
                h="24px"
                w="24px"
                color={
                  location.pathname.startsWith("/projects")
                    ? "#f56565"
                    : "#72727a"
                }
              />
              <KText
                ml={1}
                type="small-title"
                fontWeight="500"
                color={
                  location.pathname.startsWith("/projects")
                    ? "#f56565"
                    : "#72727a"
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
                color={
                  location.pathname.startsWith("/staking")
                    ? "#f56565"
                    : "#72727a"
                }
              />
              <KText
                ml={1}
                type="small-title"
                fontWeight="500"
                color={
                  location.pathname.startsWith("/staking")
                    ? "#f56565"
                    : "#72727a"
                }
              >
                Staking
              </KText>
            </Flex>
          </Link>
          <Box mx={3} borderLeft="1px solid #e5e5e6" height="16px"></Box>
          <Link to="/pool">
            <Flex align="center" justify="center">
              <Icon
                as={BiWallet}
                h="24px"
                w="24px"
                color={location.pathname.startsWith('/pool') ? '#f56565' : '#72727a'}
              />
              <KText
                ml={1}
                type="small-title"
                fontWeight="500"
                color={location.pathname.startsWith('/pool') ? '#f56565' : '#72727a'}
              >
                Pool
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
                  h="24px"
                  w="24px"
                  color={location.pathname === "/claim" ? "#f56565" : "#72727a"}
                />
                <KText
                  ml={1}
                  type="small-title"
                  fontWeight="500"
                  color={location.pathname === "/claim" ? "#f56565" : "#72727a"}
                >
                  Airdrop
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
