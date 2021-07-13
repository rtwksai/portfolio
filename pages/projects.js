import React, { useState } from 'react'
import Head from 'next/head'
import {
    Heading,
    Flex,
    Stack,
    SimpleGrid,
    useColorMode
} from '@chakra-ui/react'

import { NextSeo } from 'next-seo'

import ProjectCardBig from '../components/ProjectCardBig'
import Container from '../components/Container'

const url = 'https://rithwiksai.tech/projects'
const title = 'Projects - Rithwik'
const description = "Developer and an undergraduate IIIT Bangalore, India."


export default function Project() {
    const portfolioColor = {
        light: '/images/portfolio.png',
        dark: '/images/portfolio-1.png'
    }
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
            <Head>
                <title>Projects - Rithwik</title>
            </Head>
            <Container>
                <Stack
                    as="main"
                    spacing={8}
                    justifyContent="center"
                    alignItems="flex-start"
                    m="0 auto 4rem auto"
                >
                    <Flex
                        flexDirection="column"
                        justifyContent="flex-start"
                        alignItems="flex-start"
                        maxWidth="800px"
                    >
                        <Heading letterSpacing="tight" mb={8} as="h1" size="2xl">
                            Projects
                        </Heading>
                        <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={8}>
                            <ProjectCardBig
                                key='Covintel'
                                imageURL='/images/CovIntel.png'
                                title='CovIntel'
                                desc="CovIntel is a one stop AI solution for vaccine surveillance and monitoring. 
                                    New cases and time taken to reach herd immunity are predicted over a duration, 
                                    for a given geography and given vaccine and generates visualisations."
                                githubLink='https://github.com/DaKeiser/chaos'
                                deployLink='http://covintel.centralindia.cloudapp.azure.com:8000/'
                                tag={["Python", "ML", "Docker"]}
                            />
                            <ProjectCardBig
                                key='portfolio'
                                imageURL={portfolioColor[colorMode]}
                                title='Portfolio'
                                desc="Personal portfolio site, where I share updates regarding myself, blogs or any projects that I have made.
                                Built using Next.js and Chakra UI, the portfolio is responsive and I have used mdx-pages for blog posting."
                                githubLink='https://github.com/DaKeiser/portfolio'
                                deployLink='https://rithwiksai.tech'
                                tag={["Next.js", "Chakra UI", "React"]}
                            />                            
                            <ProjectCardBig
                                key='contest-bot'
                                imageURL='/images/contest-bot.png'
                                title='Codeforces Notifier Bot'
                                desc="A notifier bot on discord which reminds the user regarding the next contest on Codeforces. 
                                The bot notifies whenever there is a user request or a new contest.
                                Given an API endpoint this project can be extended as a reminder for any coding platform. "
                                githubLink='https://github.com/DaKeiser/contest-bot'
                                tag={["Python"]}
                            />
                            <ProjectCardBig
                                key='mips'
                                imageURL='/images/MIPS.png'
                                title='MIPS Processor'
                                desc="A non-pipelined 32-bit MIPS Simulator in Verilog. 
                                The processor supports operations like Load, Store, Branch Equality, Addition etc.
                                The appliction is built keeping modularity in nature which allows addition of new operations easily."
                                githubLink='https://github.com/DaKeiser/mips'
                                tag={["Verilog", "GTKWave"]}
                            />
                        </SimpleGrid>                        
                    </Flex>
                </Stack>
            </Container>
        </>
    )
}