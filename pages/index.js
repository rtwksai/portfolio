import Head from 'next/head'
import React, { useState } from 'react';
import Link from 'next/link';
import {
        useColorMode,
        Image,
        Flex,
        Heading,
        chakra,
        Link as ChakraLink,
        Skeleton,
    } from '@chakra-ui/react';

import { linkColor } from '../styles/darkMode';
import Container from '../components/Container'

export default function Home() {
    const [imageLoad, setImageLoad] = useState(false);
    const { colorMode } = useColorMode()
	return (
		<Container>
			<Head>
                <title>Home - Rithwik</title>
                <meta name="title" content="Sai Rithwik M" />
                <meta name="keywords" content="rithwik, rithwik website" />
                <meta
                    name="description"
                    content="Developer and an undergraduate IIIT Bangalore, India."
                />

                <meta property="og:type" content="website" />
                <meta
                    property="og:title"
                    content="Sai Rithwik M"
                />
                <meta
                    property="og:description"
                    content="Developer and an undergraduate IIIT Bangalore, India."
                />
            </Head>

            <Flex
                direction={{ base: `column`, lg: `row` }}
                alignItems='center'
                mx='auto'
                my={{ xl: '16' }}
            >
                <Skeleton isLoaded={imageLoad} boxSize='250px' borderRadius='2xl' m='auto'>
                    <Image
                        borderRadius='2xl'
                        boxSize='250px'
                        src='pp.jpeg'
                        objectFit='cover'
                        alt='Rithwik'
                        onLoad={() => setImageLoad(true)}
                    />
                </Skeleton>
                <Flex
                    alignSelf='center'
                    direction='column'
                    pl={{ base: 0, lg: 10 }}
                    my={{ base: 10, lg: 0 }}
                >
                    <Heading
                        className='moving-grad'
                        fontSize={{ base: `5xl`, lg: `7xl` }}
                        textAlign={{ base: `center`, lg: `left` }}
                    >
                        Hey, I'm Rithwik!
                    </Heading>
                    <chakra.p
                        maxW='650px'
                        textAlign={{ base: `center`, lg: `left` }}
                        fontSize='l'
                        mt={2}
                    >
                        I'm a Computer Science undergraduate at IIIT Bangalore, India. I am passionate 
                        about tech specifically in the fields of Distributed Computing, Blockchain, Forensics and Reverse Engineering.
                        My personal website is where I showcase my {' '}
                        <ChakraLink href="/projects" color={linkColor[colorMode]}>
                            projects
                        </ChakraLink>,{' '} 
                        <ChakraLink href="/blog" color={linkColor[colorMode]}>
                            articles
                        </ChakraLink>{' '}
                        and many more interesting things. 
                        Feel free to reach out via {' '}
                        <ChakraLink href="mailto:sai.rithwik@iiitb.org" color={linkColor[colorMode]}>email
                        </ChakraLink>{' '}
                        or any social media.
                    </chakra.p>
                </Flex>
            </Flex>
		</Container>
	)
}
