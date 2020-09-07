import { Box, Button, Link as _Link, Stack } from "@chakra-ui/core";
import { NextComponentType } from "next";
import Link from "next/link";
import React from "react";

export const Navbar: NextComponentType = () => {
  const linksForAllUsers = [
    {
      id: "home",
      label: "Home",
      href: "/",
    },
  ];

  const linksForAuthenticatedUsers = [
    {
      id: "sites",
      label: "Sites",
      href: "/sites",
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
    <Box bg="white">
      <Box p={4} shadow="lg" pos="relative">
        <Box maxW="6xl" mx="auto" w="full">
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
