// pages/404.js

import React from 'react'
import Container from '../components/Container'
import { NextSeo } from 'next-seo'
import {
    Heading,
    Flex,
    Link as ChakraLink,
    Button
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons'
import NextLink from 'next/link';

const url = 'https://rithwiksai.tech'
const title = '404 - Rithwik'
const description = "Developer and an undergraduate IIIT Bangalore, India."

export default function Custom404() {
	return (
        <>
            <NextSeo
                title={title}
                description={description}
                canonical={url}
                openGraph={{
                url,
                title,
                description
                }}
            />
            <Container>
                <Heading>404 - Page Not Found!!!</Heading>   
                <Flex justify="center" width="100%">
                    <NextLink href="/" passHref>
                        <ChakraLink _hover="none" mt={8}>
                        <Button rightIcon={<ArrowForwardIcon />} colorScheme="gray" variant="outline" aria-label="redirect">
                            TAKE ME HOME!!!
                        </Button>
                        </ChakraLink>
                    </NextLink>
                </Flex>   
            </Container>
        </>
	)
}
