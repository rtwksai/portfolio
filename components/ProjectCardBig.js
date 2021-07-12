import {
    TagLeftIcon,
    Tag,
    Text,
    Stack,
    Divider,
    TagLabel,
    Link,
    Image,
    ScaleFade
} from '@chakra-ui/react'

import {
    FaGithub,
    FaPython,
    FaDocker,
    FaDatabase,
    FaJs,
    FaReact,
    FaCode,
    FaWhmcs,
    FaExternalLinkAlt
} from 'react-icons/fa'

import { useMediaQuery } from 'react-responsive';
import ReactGA from 'react-ga'

export default function ProjectCardBig({
    imageURL,
    title,
    desc,
    githubLink,
    deployLink,
    tag,
}) {
    const getTag = (tag) => {
        let values = []
        if (tag == 'React') {
            values[0] = 'blue'  
            values[1] = FaReact 
        } 
        else if (tag == 'Python') {
            values[0] = 'orange'    
            values[1] = FaPython    
        }
        else if (tag == 'Javascript') {
            values[0] = 'yellow'
            values[1] = FaJs
        } 
        else if (tag == 'Flask') {
            values[0] = 'green'
            values[1] = FaPepperHot
        }
        else if (tag == 'docker') {
            values[0] = 'blue'
            values[1] = FaDocker
        }
        else if (tag == 'SQL') {
            values[0] = 'blue'
            values[1] = FaDatabase
        }
        else if(tag == 'ML' ) {
            values[0] = 'gray'
            values[1] = FaWhmcs
        }
        else {
            values[0] = 'gray'
            values[1] = FaCode
        }        
        return values
    }

    const isBigScreen = useMediaQuery({ minWidth: 600 });

    const Tags = tag.map((item) => (
        <Tag
            key={item}
            colorScheme={getTag(item)[0]}
            size={isBigScreen     ? 'md' : 'sm'}
        >
            <TagLeftIcon as={getTag(item)[1]}></TagLeftIcon>
            <TagLabel>{item}</TagLabel>
        </Tag>
    ))

    const handleClick = (event) => {
        ReactGA.event({
            category: 'click',
            action: event,
        })
    }

    return (
        <Stack
            bg="secondary"
            borderRadius="10px"
            minH="320px"
            maxH="500px"
            border="1px"
            borderColor={{ base: '#333', md: 'borderColor' }}
        >
        <ScaleFade in={true} transition={{ duration: 1 }}>
            <Image
                width={1250}
                height={600}
                w="auto"
                h="auto"
                src={imageURL}
                transition="0.3s"
                borderRadius="10px 10px 0px 0px"
                alt="project image"
                onLoad={() => setImageLoad(true)}
            ></Image>
            <Stack px={4} py={2}>
                <Stack isInline justifyContent="space-between" alignItems="center">
                <Text fontSize="2xl" color="displayColor">
                    {title}
                </Text>
                <Stack
                    isInline
                    justifyContent="flex-end"
                    alignItems="center"
                    spacing={4}
                >
                    {githubLink && (
                    <Link
                        href={githubLink}
                        color="white"
                        onClick={() =>
                        handleClick(`githublink_${title.replace('@', '-at-')}`)
                        }
                        isExternal
                    >
                        <FaGithub size={23} />
                    </Link>
                    )}
                    {deployLink && (
                    <Link
                        href={deployLink}
                        color="white"
                        onClick={() =>
                        handleClick(`deploylink_${title.replace('@', '-at')}`)
                        }
                        isExternal
                    >
                        <FaExternalLinkAlt size={20} />
                    </Link>
                    )}
                </Stack>
            </Stack>
            <Stack isInline>{Tags}</Stack>
            <Divider />
            <Text color="textSecondary" fontSize={['sm', 'md']}>
                {desc}
            </Text>
            </Stack>
        </ScaleFade>
        </Stack>
    )
}