import React, { useState } from 'react'
import Head from 'next/head'
import {
    Heading,
    Flex,
    Stack,
    Input,
    InputGroup,
    InputRightElement,
    SimpleGrid
} from '@chakra-ui/react'

import ProjectCardBig from '../components/ProjectCardBig'
import Container from '../components/Container'


const projects = [
    {
        // key: 'Chaos'
        // imageURL: 'https://abdulrahman.id/_next/image?url=https%3A%2F%2Fi.imgur.com%2FaKLwHif.png&w=1920&q=75'
        // title: 'Chaos'
        // desc: "Someyhih"
        // githubLink: 'https://github.com/DaKeiser/chaos'
        // deployLink: 'http://covintel.centralindia.cloudapp.azure.com:8000/'
        // tag: {["Python"]}
    },

    {

    },

]


export default function Project() {
    const [imageLoad, setImageLoad] = useState(false);
    return (
        <>
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
                        <Heading letterSpacing="tight" mb={14} as="h1" size="2xl">
                            Projects
                        </Heading>
                        <SimpleGrid isLoaded={imageLoad} columns={{ sm: 1, md: 2 }} spacing={8}>
                            <ProjectCardBig
                                key='Chaos1'
                                imageURL='https://abdulrahman.id/_next/image?url=https%3A%2F%2Fi.imgur.com%2FaKLwHif.png&w=1920&q=75'
                                title='Chaos'
                                desc="Someyhih"
                                githubLink='https://github.com/DaKeiser/chaos'
                                deployLink='http://covintel.centralindia.cloudapp.azure.com:8000/'
                                tag={["Python"]}
                            />
                            <ProjectCardBig
                                key='Chaos2'
                                imageURL='https://abdulrahman.id/_next/image?url=https%3A%2F%2Fi.imgur.com%2FaKLwHif.png&w=1920&q=75'
                                title='Chaos'
                                desc="Someyhih"
                                githubLink='https://github.com/DaKeiser/chaos'
                                deployLink='http://covintel.centralindia.cloudapp.azure.com:8000/'
                                tag={["Python"]}
                            />
                            <ProjectCardBig
                                key='Chaos3'
                                imageURL='https://abdulrahman.id/_next/image?url=https%3A%2F%2Fi.imgur.com%2FaKLwHif.png&w=1920&q=75'
                                title='Chaos'
                                desc="Someyhih"
                                githubLink='https://github.com/DaKeiser/chaos'
                                deployLink='http://covintel.centralindia.cloudapp.azure.com:8000/'
                                tag={["Python"]}
                            />
                            <ProjectCardBig
                                key='Chaos4'
                                imageURL='https://abdulrahman.id/_next/image?url=https%3A%2F%2Fi.imgur.com%2FaKLwHif.png&w=1920&q=75'
                                title='Chaos'
                                desc="Someyhih"
                                githubLink='https://github.com/DaKeiser/chaos'
                                deployLink='http://covintel.centralindia.cloudapp.azure.com:8000/'
                                tag={["Python"]}
                            />
                        </SimpleGrid>                        
                    </Flex>
                </Stack>
            </Container>
        </>
    )
}




// export default function Projects() {
//     const [query, setQuery] = useState(false)
//     const handleChange = (e) => { setQuery(e.target.value) }
//     const { colorMode } = useColorMode()
    
//     const [searchValue, setSearchValue] = useState('')

//     const filteredBlogPosts = posts
//         .sort(
//             (a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
//         )
//         .filter((frontMatter) =>
//             frontMatter.title.toLowerCase().includes(searchValue.toLowerCase()))

//     const [searchValue, setSearchValue] = useState('')

//     const filteredBlogPosts = posts
//         .sort(
//             (a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
//         )
//         .filter((frontMatter) =>
//             frontMatter.title.toLowerCase().includes(searchValue.toLowerCase()))

// 	return (
//         <>
//             {/* TODO add more SEO RELATED STUFF https://www.npmjs.com/package/next-seo */}
//             <NextSeo
//                 title={title}
//                 description={description}
//                 canonical={url}
//                 openGraph={{
//                 url,
//                 title,
//                 description
//                 }}
//             />
//             <Container>
//                 <Stack spacing={5}>
//                     {' '}
//                     <Text fontSize={{ base: '14px', md: '16px' }}>
//                         I love building projects and practice my engineering skills,
//                         here's an archive of things that I've worked on.
//                     </Text>
//                     <InputGroup maxW="400px">
//                         <InputRightElement pointerEvents="none" children={<FaSearch />} />
//                         <Input
//                         type="text"
//                         placeholder="Search projects"
//                         value={query}
//                         onChange={handleChange}
//                         />
//                     </InputGroup>
//                     <Divider />
//                 </Stack>
//                 <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={8}>
//                     {/* {projects
//                     .filter((e) =>
//                         e.fields.title.toLowerCase().includes(query.toLowerCase()),
//                     )
//                     .map((project) => (
//                         <ProjectCardBig
//                         key={project.fields.title}
//                         imageURL={project.fields.imageUrl}
//                         title={project.fields.title}
//                         desc={project.fields.description}
//                         githubLink={project.fields.githubLink}
//                         deployLink={project.fields.deployLink}
//                         tag={project.fields.tags}
//                         />
//                     ))} */}
//                         <ProjectCardBig
//                             key='Chaos'
//                             imageURL='https://abdulrahman.id/_next/image?url=https%3A%2F%2Fi.imgur.com%2FaKLwHif.png&w=1920&q=75'
//                             title='Chaos'
//                             desc="Someyhih"
//                             githubLink='https://github.com/DaKeiser/chaos'
//                             deployLink='http://covintel.centralindia.cloudapp.azure.com:8000/'
//                             tag={["Python"]}
//                         />
//                 </SimpleGrid>
//             </Container>
//         </>
// 	)
// }