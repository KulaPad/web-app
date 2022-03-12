import { DownloadIcon } from "@chakra-ui/icons";
import {
  Badge,
  Box,
  Button,
  Center,
  Flex,
  HStack,
  Icon,
  Image,
  SimpleGrid,
} from "@chakra-ui/react";
import { Step, Steps, useSteps } from "chakra-ui-steps";
import { sentenceCase } from "change-case";
import moment from "moment";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { getColorByStatus } from "../../routes/Projects";
import Typography from "../KText";
import FormDistribution from "./FormDistribution";
import FormPreparation from "./FormPreparation";
import FormSales from "./FormSales";
import FormWhitelist from "./FormWhitelist";

const steps = [
  {
    label: "Preparation",
    desc: "This project is in preparation phase. Stay tuned.",
  },
  {
    label: "Whitelist",
    desc: "You can now whitelist yourself for the lottery.",
  },
  { label: "Sale", desc: "Winners can participate in the token sale." },
  {
    label: "Distribution",
    desc: "The tokens get distributed to Sale participants.",
  },
];

const LaunchpadDetail = ({ project }) => {
  const { nextStep, prevStep, reset, activeStep, setStep } = useSteps({
    initialStep: 0,
  });

  useEffect(() => {
    if (!project?.status) return;

    if (project.status === "Preparation") {
      setStep(0);
    }
    if (project.status === "Whitelist") {
      setStep(1);
    }
    if (project.status === "Sales") {
      setStep(2);
    }
    if (project.status === "Distribution") {
      setStep(3);
    }
  }, [project.status, setStep]);

  return (
    <Flex direction="column" maxWidth="1248px" mx="auto" my="24px">
      <Box
        mt={0}
        px={6}
        py={12}
        bg="linear-gradient(180deg,#fbf4fc,#feecff)"
        borderRadius="20px"
      >
        <SimpleGrid
          columns={{ base: 1, sm: 2, md: 4 }}
          spacing={{ base: "4px", sm: "8px", md: "12px", lg: "24px" }}
        >
          <LaunchInfo
            title="Token price"
            image={"/mstatic/icons/near.svg"}
            semiTitle={project?.token_sale_rate}
            semiTitleContent={project?.fund_symbol}
          />
          <LaunchInfo
            title={"Raise Amount"}
            image={project?.logo_url}
            semiTitle={project?.token_raised_amount}
            semiTitleContent={project?.token_symbol}
          />
          <LaunchInfo
            title={"Hard Cap"}
            image={"/mstatic/icons/near.svg"}
            semiTitle={project?.hard_cap}
            semiTitleContent={project?.fund_symbol}
          />
          <LaunchInfo
            title={"Type"}
            image={undefined}
            semiTitle={project?.sale_type}
            semiTitleContent={""}
          />
        </SimpleGrid>

        <SimpleGrid
          templateColumns={{ base: "unset", md: "4fr 3fr" }}
          columns={{ base: 1, md: 3 }}
          mt={8}
          spacing="24px"
          bg="#fff"
          borderRadius="20px"
        >
          <Flex
            direction="column"
            justifyContent="start"
            alignItems="start"
            flex={1}
            py={10}
            px={6}
            pb={{ base: 0, md: 6 }}
          >
            <Image
              loading="lazy"
              borderRadius="20px"
              src={project?.logo_url}
              alt={`image`}
              h="64px"
              w="128px"
              backgroundColor="gray.200"
              boxShadow="xs"
              objectFit={"cover"}
              ml={"-2px"}
            />
            <Badge
              borderRadius="12px"
              px={2.5}
              py={1}
              mt="3"
              ml="-4px"
              colorScheme={getColorByStatus(project.status) || "teal"}
            >
              {sentenceCase(project.status)}
            </Badge>
            <Typography mt={2} color="#170d69" type="semi-title">
              {project?.name}
            </Typography>

            <Typography mt={0} type="small-title">
              {project?.sub_title}
            </Typography>

            <Typography mt={1} type="text">
              {project?.description}
            </Typography>

            {project.status === "Preparation" && (
              <FormPreparation project={project} />
            )}
            {project.status === "Whitelist" && (
              <FormWhitelist project={project} />
            )}
            {project.status === "Sales" && <FormSales project={project} />}
            {project.status === "Distribution" && (
              <FormDistribution project={project} />
            )}

            {project?.type === 4 && (
              <Button colorScheme="blue" mt={6}>
                Buy token
              </Button>
            )}

            {project?.type === 5 && (
              <Button colorScheme="blue" mt={6}>
                Claim token
              </Button>
            )}
          </Flex>
          <Box flex={1} py={10} px={6} pt={{ base: 0, md: 6 }}>
            <Typography mt={1} type="small-title">
              IDO process:
            </Typography>
            <br />

            <Steps
              colorScheme="blue"
              orientation="vertical"
              activeStep={activeStep}
              responsive={true}
            >
              {steps.map(({ label, desc }, index) => (
                <Step
                  width="100%"
                  label={label}
                  key={label}
                  description={desc}
                  isCompletedStep={index === activeStep}
                ></Step>
              ))}
            </Steps>
          </Box>
        </SimpleGrid>
        {project?.process?.length === 5 && (
          <Flex
            direction="column"
            mt={8}
            py={6}
            bg="#fff"
            borderRadius="20px"
            justifyContent="center"
            alignItems="center"
          >
            <Typography
              textAlign="center"
              type="semi-head"
              fontSize={{
                base: "26px",
                xs: "22px",
                sm: "22px",
                md: "26px",
              }}
              bgGradient="linear(to-l, #F34A29, #170d69)"
              bgClip="text"
            >
              DeltaFi public sale has finished!
            </Typography>
            <Box mb={4}></Box>
            <Flex>
              <Button>Trade on etc 1</Button>
              <Box ml={4}></Box>
              <Button>Trade on etc 2</Button>
            </Flex>
          </Flex>
        )}
      </Box>
      <Box
        mt={12}
        px={6}
        py={12}
        bg="linear-gradient(180deg,#fbf4fc,#feecff)"
        borderRadius="20px"
      >
        <SimpleGrid
          columns={{ base: 1, md: 3 }}
          px={4}
          spacing="24px"
          justifyContent="center"
          alignItems="center"
        >
          <Flex
            justifySelf={{ base: "center", md: "flex-start" }}
            cursor="pointer"
            justifyContent="center"
            alignItems="center"
          >
            <Link
              to={project?.whitepaper || "https://kulapad.com/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Flex justify="center" align="center">
                <Typography color="#48c78e" type="small-title" fontWeight="400">
                  Whitepaper
                </Typography>
                <Icon ml={1} color={"#48c78e"} w={4} h={4} as={DownloadIcon} />
              </Flex>
            </Link>
          </Flex>
          <Typography
            textAlign="center"
            color="#48c78e"
            type="small-title"
            fontWeight="400"
          >
            <Link
              to={project?.social?.web || "https://kulapad.com/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Box as="span" color="#170d69">
                web:
              </Box>{" "}
              {project?.social?.web || "https://kulapad.com/"}
            </Link>
          </Typography>
          <Box justifySelf={{ base: "center", md: "flex-end" }}>
            <SocialBlock project={project} />
          </Box>
        </SimpleGrid>
        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          px={4}
          mt={8}
          spacing="56px"
          justifyContent="center"
          alignItems="start"
        >
          <Box flex={1}>
            <Typography type="semi-head" fontWeight="400">
              IDO Information
            </Typography>
            <Box borderBottom="3px solid #6655c3cc" />

            <DataLine
              title={"Hardcap"}
              value={project?.hard_cap + " " + project?.fund_symbol}
            />
            <DataLine
              title={"Sale rate"}
              value={project?.token_sale_rate + " " + project?.fund_symbol}
            />
            <DataLine title={"Sale type"} value={project?.sale_type} />
            <DataLine
              title={"Open Time"}
              value={moment(+project.whitelist_start_date / 1000000)
                .utc()
                .format("hh:mma DD/MM/YYYY")}
            />
            <DataLine
              title={"Close Time"}
              value={moment(+project.whitelist_end_date / 1000000)
                .utc()
                .format("hh:mma DD/MM/YYYY")}
            />
            <DataLine
              title={"Sale end Time"}
              value={moment(+project.sale_end_date / 1000000)
                .utc()
                .format("hh:mma DD/MM/YYYY")}
            />
          </Box>
          <Box flex={1}>
            <Typography type="semi-head" fontWeight="400">
              Token Information
            </Typography>

            <Box borderBottom="3px solid #6655c3cc" />
            <DataLine title={"Symbol"} value={project?.token_symbol} />
            <DataLine
              title={"Category"}
              value={project?.categories?.join(", ")}
            />
            <DataLine
              title={"Token Distribution"}
              value={moment(+project.sale_end_date / 1000000)
                .utc()
                .format("hh:mma DD/MM/YYYY")}
            />
            <DataLine
              title={"Blockchain"}
              value={project?.token?.blockchain ?? "Near"}
            />
          </Box>
        </SimpleGrid>
        <Box mt={12} px={{ base: 0, md: 4 }}>
          <HStack
            direction="row"
            spacing={3}
            justifyContent="start"
            alignItems="stretch"
          >
            <Flex
              display={{ base: "none", md: "block" }}
              direction="column"
              justifyContent="start"
              alignItems="stretch"
              mr={6}
            >
              {["About", "Features", "Roadmap", "Tokenomic", "Team"].map(
                (data) => (
                  <Box>
                    <Typography
                      color="#170d69"
                      type="semi-title"
                      cursor="pointer"
                      fontWeight="500"
                      p={2}
                      pl={0}
                    >
                      {data}
                    </Typography>
                    <Box
                      my={1}
                      w="100%"
                      borderTop="0.1rem solid #6655c3cc"
                    ></Box>
                  </Box>
                )
              )}
              <Typography
                color="#6655c3cc"
                type="text"
                cursor="pointer"
                fontWeight="400"
                mt={6}
              >
                WEBSITE
              </Typography>
              <Typography
                color="#48c78e"
                type="small-title"
                cursor="pointer"
                fontWeight="400"
                mt={1}
              >
                {project?.social?.web || "https://kulapad.com/"}
              </Typography>
              <Typography
                color="#6655c3cc"
                type="text"
                cursor="pointer"
                fontWeight="400"
                mt={4}
                mb={2}
              >
                SOCIAL
              </Typography>
              <SocialBlock showTitle={false} project={project} />
            </Flex>
            <Flex
              direction="column"
              justifyContent="start"
              alignItems="stretch"
              flex={1}
            >
              <Box>
                <Typography
                  type="semi-head"
                  bgGradient="linear(to-l, #F34A29, #170d69)"
                  bgClip="text"
                  fontWeight="500"
                >
                  About
                </Typography>
                <Box
                  dangerouslySetInnerHTML={{
                    __html:
                      project?.info?.about ||
                      '<section id="about"> <p class="my-3"> - Project makes DeFi accessible to Everyone with 1-click Automated Investments &amp; Yield Farming - on Near and Terra. Our Yield-generating Indexes enable users to instantly and simultaneously invest and earn profit-optimized yield on both Near and Terra. Project is backed by Near Ventures &amp; Terraform Labs. </p> <p class="my-3"></p> <p class="my-3"> - Beyond the DeFi app, Project’s has also incubated several highly-demanded projects to boost utility &amp; demand for $KULA tokens and its ecosystem expansion, including 1) AI Crypto Chatbot, 2) Twitter Analytics, and 3) DeFi-utility NFT. </p> <p class="my-3"></p> <p class="my-3"> - $KULA tokens are designed for long-term accrual value, through revenue token burning, protocol-owned-liquidity, unusually long-lockups &amp; vesting, and strong $KULA utility for token holders </p> </section>',
                  }}
                />
              </Box>

              <Box>
                <Typography
                  type="semi-head"
                  bgGradient="linear(to-l, #F34A29, #170d69)"
                  bgClip="text"
                  fontWeight="500"
                >
                  Features
                </Typography>
                <Box
                  dangerouslySetInnerHTML={{
                    __html:
                      project?.info?.features ||
                      `<section id=\"features\"> <br /> <img src=\"https://solanium-prd-backend-space.ams3.digitaloceanspaces.com/media/projects/hawksight-features.png\" class=\"is-sol-image my-5\" /> <br /> <p class=\"my-3\">Easily Invest &amp; Yield Farm in 1-click</p> <p class=\"my-3\"> - Discover top performing vaults that let you instantly invest &amp; yield farm with profit-optimized strategies - on Solana &amp; Terra. Maximize profits from asset gains plus yield. </p> <p class=\"my-3\"></p> <p class=\"my-3\">Low fees, Deposit &amp; Withdraw Anytime</p> <p class=\"my-3\"> - Low fees are key to making DeFi accessible to Everyone. Start with as little as $10 USDC, and join us on a mission to empower and \"mint\" the next 1 Million First-time DeFi users. </p> <p class=\"my-3\"></p> <p class=\"my-3\">Secure &amp; Non-Custodial</p> <p class=\"my-3\"> - Users retain full ownership and control over investments in their own wallets. Hawksight's DeFi app is also battle-tested through internal audits, external audits, and will dedicate an insurance fund to protect users. </p> <p class=\"my-3\"></p> <p class=\"my-3\">Strong $KULA utility for token holders</p> <p class=\"my-3\"> - AI Crypto Chatbot: Access to real-time AI optimized trading signals for $KULA token holders. Get technical and on-chain alerts for cryptocurrencies, DeFi assets, and even NFT floor prices straight from Telegram or Discord </p> <p class=\"my-3\"> - Twitter Analytics: Map NFT, Crypto, DeFi, and Web3 projects with top Twitter accounts by following, mentions, and engagement - and vice versa. Powered by social signals team &amp; engine used by Amazon, Warner Media, BCG, and Bytedance </p> <p class=\"my-3\"> - Long-term accrual value of $KULA tokens through revenue token burning, protocol-owned-liquidity, unusually long lockups &amp; vesting, and strong $KULA utility for token holders </p> </section>`,
                  }}
                />
              </Box>

              <Box>
                <Typography
                  type="semi-head"
                  bgGradient="linear(to-l, #F34A29, #170d69)"
                  bgClip="text"
                  fontWeight="500"
                >
                  Roadmap
                </Typography>
                <Box
                  dangerouslySetInnerHTML={{
                    __html:
                      project?.info?.roadmap ||
                      `<section id=\"roadmap\"> <br /> <img src=\"https://solanium-prd-backend-space.ams3.digitaloceanspaces.com/media/projects/hawksight-roadmap.png\" class=\"is-sol-image my-5\" /> <p class=\"my-3\"></p> <br /> </section>`,
                  }}
                />
              </Box>

              <Box>
                <Typography
                  type="semi-head"
                  bgGradient="linear(to-l, #F34A29, #170d69)"
                  bgClip="text"
                  fontWeight="500"
                >
                  Tokenomic
                </Typography>
                <Box
                  dangerouslySetInnerHTML={{
                    __html:
                      project?.info?.tokenomic ||
                      `<section id=\"tokenomics\"> <br /> <img src=\"https://solanium-prd-backend-space.ams3.digitaloceanspaces.com/media/projects/hawksight-tokenomics.png\" class=\"is-sol-image my-5\" /> <p class=\"my-3\"></p> <br /> </section>`,
                  }}
                />
              </Box>
            </Flex>
          </HStack>
        </Box>
      </Box>
    </Flex>
  );
};

// new table for the public sale
const DataLine = ({ title, value }) => {
  return (
    <Flex mt={4}>
      <Typography type="small-title" fontWeight="400">
        {title}
      </Typography>
      <Box flex={1} />
      <Typography type="small-title" color="#170d69">
        {value}
      </Typography>
    </Flex>
  );
};

// new component
const LaunchInfo = ({ title, image, semiTitle, semiTitleContent }) => {
  return (
    <Box flex={1} p={4} bg="#fff" borderRadius="20px">
      <Typography color="#6655c3cc" type="semi-title">
        {title}
      </Typography>

      <Flex mt={1} justifyContent="start" alignItems="center">
        {image && (
          <Image
            loading="lazy"
            borderRadius="20px"
            src={image}
            alt={`image`}
            h="16px"
            w="16px"
            objectFit={"cover"}
            mr={2}
          />
        )}
        <Typography color="#170d69" type="semi-title" wordBreak="break-word">
          {semiTitle}
          <Typography color="#170d69" ml={1.5} type="text" as="span">
            {semiTitleContent}
          </Typography>
        </Typography>
      </Flex>
    </Box>
  );
};

const SocialBlock = ({ showTitle = true, project }) => {
  return (
    <Flex justifyContent="center" alignItems="center">
      {showTitle && (
        <Typography mr="12px" type="small-title" fontWeight="400">
          Social:
        </Typography>
      )}
      <Center mr="8px">
        <Link
          target="_blank"
          rel="noopener noreferrer"
          to={project?.social?.web || "https://kulapad.com/"}
        >
          <Image
            loading="lazy"
            src={"/mstatic/icons/social-website.svg"}
            p="8px"
            h="36px"
            w="36px"
            borderRadius="50%"
            backgroundColor="rgba(252, 128, 66, 0.1)"
          />
        </Link>
      </Center>
      <Center mr="8px">
        <Link
          target="_blank"
          rel="noopener noreferrer"
          to={project?.social?.twitter || "https://kulapad.com/"}
        >
          <Image
            loading="lazy"
            src={"/mstatic/icons/social-twitter.svg"}
            p="8px"
            h="36px"
            w="36px"
            borderRadius="50%"
            backgroundColor="rgba(3, 169, 244, 0.1)"
          />
        </Link>
      </Center>
      <Center mr="8px">
        <Link
          target="_blank"
          rel="noopener noreferrer"
          to={project?.social?.telegram || "https://kulapad.com/"}
        >
          <Image
            loading="lazy"
            src={"/mstatic/icons/social-telegram.svg"}
            p="8px"
            h="36px"
            w="36px"
            borderRadius="50%"
            backgroundColor="rgba(41,182,246,.1)"
          />
        </Link>
      </Center>
      <Center mr="8px">
        <Link
          target="_blank"
          rel="noopener noreferrer"
          to={project?.social?.medium || "https://kulapad.com/"}
        >
          <Image
            loading="lazy"
            src={"/mstatic/icons/social-medium.svg"}
            p="8px"
            h="36px"
            w="36px"
            borderRadius="50%"
            backgroundColor="rgba(26, 189, 0, 0.1)"
          />
        </Link>
      </Center>
      <Center>
        <Link
          target="_blank"
          rel="noopener noreferrer"
          to={project?.social?.discord || "https://kulapad.com/"}
        >
          <Image
            loading="lazy"
            src={"/mstatic/icons/social-discord.svg"}
            p="8px"
            h="36px"
            w="36px"
            borderRadius="50%"
            backgroundColor="rgba(140, 158, 255, 0.1)"
          />
        </Link>
      </Center>
    </Flex>
  );
};

export default LaunchpadDetail;
