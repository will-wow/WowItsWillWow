import { Box, Center, Link } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Layout } from "~/components/Layout";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <Layout>
      <Center height="100%">
        I&apos;m&nbsp;
        <Link href="https://twitter.com/WowItsWillWow"
				color="pink"
				
				>me</Link>. Are you you?
      </Center>
    </Layout>
  );
};

export default Home;
