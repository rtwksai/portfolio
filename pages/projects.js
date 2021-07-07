import React, { useState } from 'react'
import {
        useColorMode,
        Link as ChakraLink,
    } from '@chakra-ui/react';
import { NextSeo } from 'next-seo'
import Container from '../components/Container'

const url = 'https://localhost:3000/'
const title = 'Projects - Rithwik'
const description = "Developer and an undergraduate IIIT Bangalore, India."

export default function Projects() {
    const [imageLoad, setImageLoad] = useState(false);
    const { colorMode } = useColorMode()
	return (
        <>
            {/* TODO add more SEO RELATED STUFF https://www.npmjs.com/package/next-seo */}
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
                Hi i am rithwik.
            </Container>
        </>
	)
}
