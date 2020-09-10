import { Box, Grid, Image } from "@chakra-ui/core";
import { PrismaClient } from "@prisma/client";
import { NextPage } from "next";
import React, { useEffect, useState } from "react";
import compareImages from "resemblejs/compareImages";

interface screenshot {
  id: string;
  image: string;
}

interface IProps {
  screenshots: screenshot[];
}

const IndexPage: NextPage<IProps> = ({ screenshots }) => {
  if (!screenshots.length) {
    return <>Hello world</>;
  }

  const [diffImage, setDiffImage] = useState("");

  useEffect(() => {
    const screenshotOne = `data:image/png;base64,${screenshots[0].image}`;
    const screenshotTwo = `data:image/png;base64,${screenshots[1].image}`;

    const options = {
      output: {
        errorColor: {
          red: 255,
          green: 0,
          blue: 255,
        },
        errorType: "movement",
        transparency: 1,
        largeImageThreshold: 1200,
        useCrossOrigin: false,
        outputDiff: true,
      },
      scaleToSameSize: true,
    };

    const performImageComparison = async () => {
      const data = await compareImages(screenshotOne, screenshotTwo, options);
      const image = await data.getImageDataUrl();

      setDiffImage(image);
    };

    performImageComparison();
  }, []);

  return (
    <>
      <Box p={4}>
        <Box maxW="6xl" mx="auto" w="full">
          <Grid templateColumns="repeat(3, 1fr)" gap={4}>
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
            <Box>
              <Image src={diffImage} rounded="md" shadow="lg" />
            </Box>
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
