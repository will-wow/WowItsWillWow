import React, { FunctionComponent, ReactNode } from "react";
import { Container, Flex, Button, Text, Heading, Box } from "@chakra-ui/react";
import Link from "next/link";

const year = new Date().getFullYear();

export const Layout: FunctionComponent = ({ children }) => {
  return (
    <Container
      pt={3}
      maxW="container.lg"
      height="100%"
      className="layout"
      display="flex"
      flexDirection="column"
    >
      <Flex
        className="nav"
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        py="3"
      >
        <Link href="/" passHref>
          <Heading as="a" size="md">
            WowItsWillWow
          </Heading>
        </Link>
      </Flex>

      <Box flex={1}>{children}</Box>

      <Box textAlign="center" mb={3}>
        <Text pt={6} fontSize="sm">
          ❤ Will️ {year}
        </Text>
      </Box>
    </Container>
  );
};
