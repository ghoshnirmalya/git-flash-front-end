import {
  Box,
  Button,
  Link as _Link,
  Stack,
  useColorMode,
} from "@chakra-ui/core";
import { NextComponentType } from "next";
import Link from "next/link";
import React from "react";

export const Navbar: NextComponentType = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = { light: "white", dark: "gray.800" };
  const color = { light: "gray.800", dark: "gray.100" };

  const linksForAllUsers = [
    {
      id: "home",
      label: "Home",
      href: "/",
    },
  ];

  const linksForAuthenticatedUsers = [
    {
      id: "feeds",
      label: "Feeds",
      href: "/feeds",
    },
    {
      id: "myAccount",
      label: "My Account",
      href: "/my-account",
    },
  ];

  const signInButtonNode = () => {
    return (
      <Box>
        <Link href="/api/auth/signin">
          <Button
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            Sign In
          </Button>
        </Link>
      </Box>
    );
  };

  const signOutButtonNode = () => {
    return (
      <Box>
        <Link href="/api/auth/signout">
          <Button
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            Sign Out
          </Button>
        </Link>
      </Box>
    );
  };

  return (
    <Box bg={bgColor[colorMode]}>
      <Box p={4} color={color[colorMode]} shadow="lg" pos="relative">
        <Box maxW="xl" mx="auto" w="full">
          <Stack
            isInline
            spacing={4}
            align="center"
            justifyContent="space-between"
            w="full"
          >
            <Box>
              <Stack isInline spacing={4} align="center" fontWeight="semibold">
                {linksForAllUsers.map((link) => {
                  return (
                    <Box key={link.id}>
                      <Link href={link.href}>
                        <_Link>{link.label}</_Link>
                      </Link>
                    </Box>
                  );
                })}
                {linksForAuthenticatedUsers.map((link) => {
                  return (
                    <Box key={link.id}>
                      <Link href={link.href}>
                        <_Link>{link.label}</_Link>
                      </Link>
                    </Box>
                  );
                })}
              </Stack>
            </Box>
            <Box>
              <Stack isInline spacing={4} align="center">
                {signInButtonNode()}
                {signOutButtonNode()}
              </Stack>
            </Box>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};
