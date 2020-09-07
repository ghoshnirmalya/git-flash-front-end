import { Box, Grid, Image } from "@chakra-ui/core";
import { PrismaClient } from "@prisma/client";
import { NextPage } from "next";

interface screenshot {
  id: string;
  image: string;
}

interface IProps {
  screenshots: screenshot[];
}

const IndexPage: NextPage<IProps> = ({ screenshots }) => {
  return (
    <>
      <Box p={4}>
        <Box maxW="6xl" mx="auto" w="full">
          <Grid templateColumns="repeat(4, 1fr)" gap={4}>
            {screenshots.map((screenshot) => {
              return (
                <Box key={screenshot.id}>
                  <Image
                    src={`data:image/png;base64,${screenshot.image}`}
                    rounded="md"
                    shadow="lg"
                  />
                </Box>
              );
            })}
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export async function getStaticProps() {
  const prisma = new PrismaClient();

  const screenshots = await prisma.screenshot.findMany();

  return {
    props: {
      screenshots,
    },
  };
}

export default IndexPage;
