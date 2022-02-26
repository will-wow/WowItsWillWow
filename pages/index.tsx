import { Box, Center, Link } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import { useState } from "react";
import { Layout } from "~/components/Layout";
import styles from "../styles/Home.module.css";

const getTime = () => {
  return Math.floor(Math.random() * 2000 + 300);
};

const Home: NextPage = () => {
  const [on, setOn] = useState(true);

  useEffect(() => {
    let cancel: NodeJS.Timeout;

    const onInterval = (first = false) => {
      if (!first) {
        setOn((on) => !on);
      }

      cancel = setTimeout(onInterval, getTime());
    };

    onInterval(true);

    return () => {
      clearInterval(cancel);
    };
  }, []);

  return (
    <Layout>
      <Center height="100%">
        I&apos;m&nbsp;
        <Link href="https://twitter.com/WowItsWillWow" color="pink">
          me
        </Link>
        . Are you you
        <Box as="span" opacity={on ? 1 : 0}>
          ?
        </Box>
      </Center>
    </Layout>
  );
};

export default Home;
