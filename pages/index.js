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
const images = [{
    url: '/images/r.png',
    width: 800,
    height: 600,
    alt: 'Og Image Alt',
}]

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
                description,
                images
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
						    mb={4}
						>
						    I&apos;m a Software Developer at {' '}
						    <ChakraLink href="https://navi.com" target="_blank" color={linkColor[colorMode]}>Navi
						    </ChakraLink>
						    , where I build solutions for Debt Recovery teams. Over the past 2 years we devised ways to improve cash collection efficiency, agent productivity, and customer contactability. I am passionate 
						    about tech, specifically in the fields of Distributed Computing, Digital Forensics and Reverse Engineering. I love solving ambiguous business and product problems by transforming vague problem statements into simple and actionable solutions.
						</chakra.p>
						<Flex justify={["center", "center", "left"]} width="100%">
						    <a href="/files/resume.pdf" target="_blank">
						        <ChakraLink _hover="none">
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
                        Latest Blogs
                    </Heading>
                    <BlogPost
                        title="Unpacking containers: A 101 to building your own isolated environments"
                        publishedAt="2022-12-07"
                        summary="Containers are often confused with VMs. This blog discusses about how isolation works and how constructs work under the hood by building your custom container."
                        slug="building_custom_containers"
                    />
                    <BlogPost
                        title="Causality and clocks in a dynamic distributed setting"
                        publishedAt="2022-02-13"
                        summary="Vector Clocks and Lamport Clocks do not scale well in a dynamic setting as they suffer from actor burst problem. This blog discusses about some issues with vector clocks and how Interval Tree Clocks can be helpful in this scenario."
                        slug="dynamic_clocks"
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
