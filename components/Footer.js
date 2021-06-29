import {    
            Box, 
            Stack, 
            chakra,
            Heading, 
            useColorModeValue,
            ButtonGroup, 
            IconButton } from '@chakra-ui/react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import * as React from 'react'
import { Text } from '@chakra-ui/layout'

const Copyright = (props) => (
    <Text fontSize="sm" {...props}>
        &copy; {new Date().getFullYear()} Sai Rithwik M. All rights reserved.
    </Text>
)

const SocialMediaLinks = (props) => (
    <ButtonGroup variant="ghost" color="gray.600" {...props}>
        <IconButton as="a" href="https://www.linkedin.com/in/sai-rithwik-m/" aria-label="LinkedIn" icon={<FaLinkedin fontSize="20px" />} />
        <IconButton as="a" href="https://github.com/DaKeiser" aria-label="GitHub" icon={<FaGithub fontSize="20px" />} />
        <IconButton as="a" href="https://twitter.com/DaKeiser" aria-label="Twitter" icon={<FaTwitter fontSize="20px" />} />
    </ButtonGroup>
)

const Footer = () => (
    <Box
        as="footer"
        role="contentinfo"
        mx="auto"
        maxW="7xl"
        py="12"
        px={{
            base: '4',
            md: '8',
        }}
    >

            <Stack
                direction={{
                    base: 'column-reverse',
                    md: 'row',
                }}
                justifyContent="space-between"
                alignItems="center"
            >
                <Stack
                    alignItems="center"
                >
                    <SocialMediaLinks />
                    <Text textAlign="center" fontSize="sm">
                        Built with{' '}
                        <chakra.span fontWeight="semibold">
                            <a href="https://nextjs.org">Next.js</a>
                        </chakra.span>{' '}
                        &{' '}
                        <chakra.span fontWeight="semibold">
                            <a href="https://chakra-ui.com/">Chakra UI</a>
                        </chakra.span>
                    </Text>
                    <Copyright />
                </Stack>
            </Stack>
    </Box>
)

export default Footer