import { Box, Image, Badge, SimpleGrid, Button, Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { isEmpty } from "lodash";
import { sentenceCase } from "change-case";
import { Link } from "react-router-dom";

import HomeLayout from "../components/HomeLayout";
import Loading from "../components/Loading";
import KText from "../components/KText";

export default function Projects(props) {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // useEffect get projects from window.contractIdo
  useEffect(() => {
    if (!!window?.contractIdo) getProjects();
  }, []);

  const getProjects = async () => {
    await window?.contractIdo?.get_projects().then((_projects) => {
      setProjects(_projects);
    });
    setIsLoading(false);
  };

  const upcomingProjects = projects.filter((project) => {
    return project?.status === "Preparation";
  });
  const runningProjects = [
    ...projects.filter((project) => {
      return ["Whitelist"].includes(project?.status);
    }),
    ...projects.filter((project) => {
      return ["Sales"].includes(project?.status);
    }),
  ];

  const finishedProjects = [
    ...projects.filter((project) => {
      return ["Distribution"].includes(project?.status);
    }),
    ...projects.filter((project) => {
      return ["Rejected"].includes(project?.status);
    }),
  ];

  console.log(
    "Projects::",
    upcomingProjects,
    runningProjects,
    finishedProjects
  );

  return (
    <HomeLayout>
      {isLoading && <Loading />}
      {!isLoading && (
        <Box>
          <KText mt={4} type="semi-head" textAlign="left">
            Comming Projects
          </KText>
          <KText ml={0.5} type="normal" textAlign="left">
            Upcoming and active top tier IDOs & crypto launchpad offerings.
          </KText>
          <Project projects={upcomingProjects} />

          <KText mt={4} type="semi-head" textAlign="left">
            Running Projects
          </KText>
          <KText ml={0.5} type="normal" textAlign="left">
            Discover ongoing crypto launchpad offerings & IDOs.
          </KText>
          <Project projects={runningProjects} />

          <KText mt={4} type="semi-head" textAlign="left">
            Finished Projects
          </KText>
          <KText ml={0.5} type="normal" textAlign="left">
            All past IDOs/SHO offerings that were hosted on DAO Maker crypto
            launchpad.
          </KText>
          <Project projects={finishedProjects} />
        </Box>
      )}
    </HomeLayout>
  );
}

export const getColorByStatus = (status) => {
  let color = "blue";
  if (status === "Preparation") color = "yellow";
  if (status === "Whitelist") color = "cyan";
  if (status === "Sales") color = "pink";
  if (status === "Distribution") color = "green";
  if (status === "Rejected") color = "gray";
  return color;
};

export const Project = ({ projects }) => {
  return (
    <SimpleGrid columns={{ base: 1, md: 3 }} mt={4} mb={6} spacing={8}>
      {isEmpty(projects) && "No projects"}
      {!isEmpty(projects) &&
        projects?.map((project, index) => (
          <Link
            to={`/projects/${project.id}`}
            id={`project-${project.id}-${index}`}
          >
            <Flex
              direction="column"
              maxW="sm"
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              h="100%"
            >
              <Image
                fallbackSrc="/mstatic/project_loading.png"
                src={project.logo_url}
                height="calc((100vw - 68px - 88px ) / 3 / 2)"
                minH="150px"
                w="100%"
                objectFit="cover"
                alt={project.name}
                borderBottom="1px solid #e2e8f0"
              />

              <Flex direction="column" flex={1} p="6" pb={4}>
                <Box display="flex" alignItems="baseline">
                  <Badge
                    ml="-4px"
                    borderRadius="full"
                    px="2"
                    textTransform="unset"
                    colorScheme={getColorByStatus(project.status) || "teal"}
                  >
                    {sentenceCase(project.status)}
                  </Badge>
                  <Box
                    color="gray.500"
                    fontWeight="semibold"
                    letterSpacing="wide"
                    fontSize="xs"
                    ml="2"
                  >
                    &bull; {sentenceCase(project.sale_type)}
                  </Box>
                </Box>

                <KText
                  mt="2"
                  fontWeight="semibold"
                  type="title"
                  lineHeight="tight"
                >
                  {project.name}
                </KText>
                <Box mt="0" color="gray.800" fontWeight="semibold">
                  <KText as="span" type="text" color="gray.600">
                    Total raise:
                  </KText>{" "}
                  {project.token_raised_amount} {project.fund_symbol}
                </Box>
                <KText mt="1" color="#6655c3cc">
                  {project.introduction}
                </KText>
                <Box flex={1} />
                <Button w="100%" size="sm" variant="outline" mt="2">
                  Detail
                </Button>
              </Flex>
            </Flex>
          </Link>
        ))}
    </SimpleGrid>
  );
};
