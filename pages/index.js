import React, { useState } from 'react'
import NextLink from 'next/link';
import {
        useColorMode,
        Image,
        Flex,
        Heading,
        chakra,
        Link as ChakraLink,
        Skeleton,
        Button,
        Divider
    } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons'
import { FaRegFileAlt } from 'react-icons/fa'
import { NextSeo } from 'next-seo'
import { linkColor } from '../styles/darkMode'
import Container from '../components/Container'
import ProjectCard from '../components/ProjectCard'
import BlogPost from '../components/BlogPost'

const url = 'https://rithwiksai.tech'
const title = 'Home - Rithwik'
const description = "Developer and an undergraduate IIIT Bangalore, India."

export default function Home() {
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
                <Flex
                    direction={{ base: `column`, lg: `row` }}
                    alignItems='center'
                    mx='auto'
                    my={{ xl: '16' }}
                >
                    <Skeleton isLoaded={imageLoad} boxSize='250px' borderRadius='2xl' m='auto'>
                        <Image
                            borderRadius='2xl'
                            boxSize='260px'
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
                            className='mov-heading'
                            fontSize={{ base: `5xl`, lg: `7xl` }}
                            textAlign={{ base: `center`, lg: `left` }}
                        >
                            Hey, I&apos;m Rithwik!
                        </Heading>
                        <chakra.p
                            maxW='650px'
                            textAlign={{ base: `center`, lg: `left` }}
                            fontSize='l'
                            mt={2}
                        >
                            I&apos;m a Computer Science undergraduate at {' '}
                            <ChakraLink href="https://www.iiitb.ac.in" target="_blank" color={linkColor[colorMode]}>IIIT Bangalore
                            </ChakraLink>
                            , India. I am passionate 
                            about tech; specifically in the fields of Distributed Computing, Blockchain, Forensics and Reverse Engineering.
                            My personal website is where I share my {' '}
                            <ChakraLink href="/projects" color={linkColor[colorMode]}>
                                projects
                            </ChakraLink>,{' '} 
                            <ChakraLink href="/blog" color={linkColor[colorMode]}>
                                articles
                            </ChakraLink>{' '}
                            and many more interesting things. 
                            Feel free to reach out via {' '}
                            <ChakraLink href="mailto:sai.rithwik@iiitb.org" color={linkColor[colorMode]}>
                                email
                            </ChakraLink>{' '}
                            or any social media.
                        </chakra.p>
                        <br/>
                        <Flex justify={["center", "center", "left"]} width="100%">
                            <a href="/files/resume.pdf" target="_blank">
                                <ChakraLink _hover="none" mt={8}>
                                <Button leftIcon={<FaRegFileAlt />} colorScheme="gray" variant="outline" aria-label="view all projects">
                                    My Resume
                                </Button>
                                </ChakraLink>
                            </a>
                        </Flex>
                    </Flex>
                </Flex>
                

                <Flex
                    flexDirection="column"
                    justifyContent="flex-start"
                    alignItems={["center", "center", "flex-start"]}
                    maxWidth="700px"
                >
                    <Divider mb={12} mt={16} w='100%' alignSelf="center" />

                    <Heading 
                        letterSpacing="tight" 
                        size="lg"
                        fontWeight={700} 
                        mb={6}
                    >
                        Featured Projects
                    </Heading>
                    
                    <ProjectCard
                    title="CovIntel"
                    href="https://github.com/DaKeiser/chaos"
                    src="/images/chaos-td.png"
                    alt='Chaos'
                    >
                        CovIntel is a one stop AI solution for vaccine surveillance and monitoring. 
                        New cases are predicted over a duration, for a given geography and given vaccine and generates visualisations.
                    </ProjectCard>

                    <Flex justify="center" width="100%">
                        <NextLink href="/projects" passHref>
                            <ChakraLink _hover="none" mt={8}>
                            <Button rightIcon={<ArrowForwardIcon />} colorScheme="gray" variant="outline" aria-label="view all projects">
                                View All Projects
                            </Button>
                            </ChakraLink>
                        </NextLink>
                    </Flex>   

                    <Divider mb={12} mt={16} w='100%' alignSelf="center" />

                    <Heading 
                        letterSpacing="tight" 
                        size="lg"
                        fontWeight={700} 
                        mb={6}
                    >
                        Featured Blogs
                    </Heading>
                    <BlogPost
                        title="It is a test"
                        publishedAt="2021-07-02"
                        summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fermentum orci ut turpis pulvinar, ac blandit ligula mollis. Aliquam erat volutpat. Cras lobortis, libero at volutpat efficitur, nibh diam sagittis arcu, eget viverra urna felis nec dui."
                        slug="test1"
                    />
                </Flex>
                <Flex justify="center" width="100%">
                    <NextLink href="/blog" passHref>
                        <ChakraLink _hover="none" mt={3}>
                        <Button rightIcon={<ArrowForwardIcon />} colorScheme="gray" variant="outline" aria-label="view all blogs">
                            View All Blogs
                        </Button>
                        </ChakraLink>
                    </NextLink>
                </Flex>                
            </Container>
        </>
	)
}
