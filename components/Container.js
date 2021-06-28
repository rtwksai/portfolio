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
                {/* <Footer /> */}
                <Stack alignItems="center" mt={10} mb={5}>
                    <Text textAlign="center" fontSize="sm">
                        Built with{' '}
                        <chakra.span fontWeight="semibold">
                            <NextLink href="https://nextjs.org/">
                                <a>Next.js</a>                                
                            </NextLink> 
                        </chakra.span>{' '}
                        &{' '}
                        <chakra.span fontWeight="semibold">
                            <NextLink href="https://chakra-ui.com/">
                                <a>Chakra UI</a>
                            </NextLink>
                        </chakra.span>
                    </Text>
                </Stack>
            </Flex>
        </>
    );
};

export default Container;