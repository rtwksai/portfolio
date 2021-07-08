import React, { useState } from 'react'
import Link from 'next/link';
import {
        useColorMode,
        Flex,
        Heading,
        Stack,
        Text,
        Box,
        Wrap,
        Link as ChakraLink,
    } from '@chakra-ui/react';
import { NextSeo } from 'next-seo'
import Container from '../components/Container'
import {linkColor, secondaryTextColor} from '../styles/darkMode'
import InterestTag from '../components/Interest'

const url = 'https://localhost:3000/'
const title = 'About - Rithwik'
const description = "Developer and an undergraduate IIIT Bangalore, India."


const Interests = {
    like: [
    "Architecture",
    "Blockchains",
    "Crime Thrillers",
    "Chess",
    "Current Affairs",
    "Hip-Hop",
    "Open Source",
    "Pizza",
    "Reddit",
    "Ricing",
    "Societal Platforms",
    "System Design"],    
    
    dislike: ["Data Science",
    "EDM",
    "Guesswork",
    "Instagram",
    "Malls",
    "Romance(Genre)",
    "Shopping",
    "Singing",
    "Snapchat",
    "Nachos",
    "OSINT"]
};




export default function About() {
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
                <Stack
                    as="main"
                    spacing={8}
                    justifyContent="center"
                    alignItems="flex-start"
                    m="0 auto 4rem auto"
                    maxWidth="700px"
                >
                    <Flex
                        flexDirection="column"
                        justifyContent="flex-start"
                        alignItems="flex-start"
                        maxWidth="700px"
                        px={4}
                    >
                        <Heading letterSpacing="tight" mb={2} as="h1" size="lg">
                            Me
                        </Heading>
                        <Text color={secondaryTextColor[colorMode]}>Hey there!
                            I&apos;m <strong>Sai Rithwik M</strong>, a Computer Science undergraduate from <ChakraLink href="https://www.iiitb.ac.in" target="_blank" color={linkColor[colorMode]}>IIIT Bangalore</ChakraLink>, India. 
                        </Text>
                        <br></br>
                        <Heading letterSpacing="tight" mb={2} as="h1" size="lg">
                            Techy techy stuff
                        </Heading>
                        <Text color={secondaryTextColor[colorMode]}>I&apos;m fascinated by almost any tech!!!
                            But of late, I&apos;ve been super interested in distributed systems and blockchains. 
                            Currently, I am working to improve Proof of Stake consensus algorithms like <ChakraLink href="https://arxiv.org/abs/1803.05069" target="_blank" color={linkColor[colorMode]}>Hotstuff</ChakraLink> and <ChakraLink href="https://developers.diem.com/main/docs/state-machine-replication-paper" target="_blank" color={linkColor[colorMode]}>DiemBFT</ChakraLink> and understand how various parameters like node count, block sizes etc. have an impact on the performance of these algorithms. 
                            I&apos;m also super interested in security especially in Cryptography, Forensics and Reverse Engineering. 
                            I have been a part of my university&apos;s InfoSec team <ChakraLink href="https://ctftime.org/team/109908" target="_blank" color={linkColor[colorMode]}>Zense</ChakraLink> where we had participated in various CTFs and even had the opportunity to have an <ChakraLink href="https://www.linkedin.com/pulse/my-experience-hosting-ctf-sai-rithwik-m/" target="_blank" color={linkColor[colorMode]}>intra-college CTF</ChakraLink>!
                        </Text>
                        <br></br>
                        <Heading letterSpacing="tight" mb={2} as="h1" size="lg">
                            Where I&apos;ve lived?
                        </Heading>  
                        <Text color={secondaryTextColor[colorMode]}>I had got a chance to live in various places. 
                            A few of my favourite ones are Kolkata, Bengaluru and Jamshedpur! 
                            When I&apos;m not in Bengaluru, I&apos;m in Chennai. I&apos;m a native Telugu speaker, but I can speak a few more languages like Hindi, Tamil and Bengali as I have lived in many places in India. 
                            I try to learn the native language of almost every place I have been to and I hope to learn some Kannada before I graduate from IIIT B.
                        </Text>
                        <br></br>
                        <Heading letterSpacing="tight" mb={2} as="h1" size="lg">
                            Interests
                        </Heading>
                        <Text color={secondaryTextColor[colorMode]}>I&apos;m a lot into lyrical and experimental hip-hop and I vibe to {' '}
                        <ChakraLink href="https://open.spotify.com/artist/2oBG74gAocPMFv6Ij9ykdo?si=oJaImoiLTAO5s1-ILb8uaw&dl_branch=1" target="_blank" color={linkColor[colorMode]}>Seedhe Maut</ChakraLink>, {' '}
                        <ChakraLink href="https://open.spotify.com/artist/7suHsCqUEifucqVyWaljgC?si=1gPKhrJ6TKm7qvDA1vbFkA&dl_branch=1" target="_blank" color={linkColor[colorMode]}>Prabh Deep</ChakraLink>, {' '}
                        <ChakraLink href="https://open.spotify.com/artist/6l3HvQ5sa6mXTsMTB19rO5?si=vbWa9R1oRQSREI-A4w80OQ&dl_branch=1" target="_blank" color={linkColor[colorMode]}>J. Cole</ChakraLink>, {' '}
                        <ChakraLink href="https://open.spotify.com/artist/4r63FhuTkUYltbVAg5TQnk?si=i_0CEt_8R6KaeTlcNMj75Q&dl_branch=1" target="_blank" color={linkColor[colorMode]}>DaBaby</ChakraLink>, {' '}
                        <ChakraLink href="https://open.spotify.com/artist/0Y5tJX1MQlPlqiwlOH1tJY?si=m8PKnFuMSbSJ0inpxs9SNA&dl_branch=1" target="_blank" color={linkColor[colorMode]}>Travis Scott</ChakraLink>, {' '}
                        <ChakraLink href="https://open.spotify.com/artist/1yCVvGnMTuLeNzbXtgAytL?si=yy1ULJHmTXGZZQ0dzIwiGg&dl_branch=1" target="_blank" color={linkColor[colorMode]}>Rebel-7</ChakraLink>, {' '}
                        <ChakraLink href="https://open.spotify.com/artist/0EAfS9gQe5SCtQp1R6hJqG?si=eoh7oRjKQBuyxbD9Ck6LIg&dl_branch=1" target="_blank" color={linkColor[colorMode]}>Ahmer</ChakraLink> and {' '}
                        <ChakraLink href="https://open.spotify.com/artist/6JvFJaw7uRQFBUzSlv28Gw?si=udOeinvpSWqE5bhMwCUWgQ&dl_branch=1" target="_blank" color={linkColor[colorMode]}>Tienas&apos;</ChakraLink> work. 
                            Even though I am not into beat-boxing or music production, I ardently follow 
                            {' '}<ChakraLink href="https://open.spotify.com/artist/5pWWDUGa89yZyjOGqgSKWB?si=t5Ts3p0ARoCj3nX3hFqHEg&dl_branch=1" target="_blank" color={linkColor[colorMode]}>MB-14</ChakraLink> and
                            {' '}<ChakraLink href="https://open.spotify.com/artist/7hI0IRD66iykVpXiieNRbe?si=DvthMAeLQwyWZ42htAhQMw&dl_branch=1" target="_blank" color={linkColor[colorMode]}>Sez on the Beat</ChakraLink>! 
                            
                            </Text>

                            <br></br>
                            
                            <Text color={secondaryTextColor[colorMode]}>
                            My relation with the arts has been pretty much complicated. 
                            For a brief period of time I had trained with keyboard and that was the period I had started using music as a stress buster.
                            As a kid, I was very much involved in glass painting and unfortunately, most of the paintings have been disposed off due to my relocation to various places. 
                            Hopefully, if I find them someday, it will be showcased here!!!
                            </Text>

                            <br></br>
                            
                            <Text color={secondaryTextColor[colorMode]}>
                            I&apos;m not that interested in sports. I have tried many of them from Archery to Swimming, but was never interested in almost any of them.
                            However, I do play a decent amount of badminton and of late I have taken some interest in chess for the last year and I&apos;m a 1200 rated rapid player on chesscom. 
                        </Text>

                        <br></br>
                        <Text color={secondaryTextColor[colorMode]}>
                            Share a slice of your <ChakraLink href="https://mojopizza.in/" target="_blank" color={linkColor[colorMode]}>pizza</ChakraLink> and I&apos;ll be your friend for lifetime.
                            Get in touch with me over <ChakraLink href="https://twitter.com/DaKeiser" target="_blank" color={linkColor[colorMode]}>Twitter</ChakraLink>!!!
                        </Text>
                        <br></br><br></br>
                        <Wrap>{
                            Interests.like.map((likes) => (
                            <InterestTag name={likes} like/>))
                        }
                        </Wrap>
                        <br></br> <br></br>
                        <Wrap>{
                            Interests.dislike.map((dislikes) => (
                            <InterestTag name={dislikes} />))
                        }
                        </Wrap>
                    </Flex>
                    
                </Stack>
            </Container>
        </>
	)
}