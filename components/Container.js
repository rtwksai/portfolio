import React, { useEffect } from 'react'
import NextLink from 'next/link'
import {
        chakra,
        Stack,
        Text,
        useColorMode,
        Button,
        Flex,
        Box
} from '@chakra-ui/react'
import { primaryTextColor, bgColor } from '../styles/darkMode';
import Navbar from './Navbar';
import Footer from './Footer';

const Container = ({ children }) => {
    const { colorMode } = useColorMode();

    return (
        <>
            <Navbar />
            <Flex
                as="main"
                justifyContent="center"
                flexDirection="column"
                alignItems="center"
                bg={bgColor[colorMode]}
                color={primaryTextColor[colorMode]}
                px={8}
            >
                {children}
            </Flex>
            <Footer />
        </>
    );
};

export default Container;