import { Container } from '@chakra-ui/layout'
import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
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
                {/* <meta property="og:url" content="https://abdulrahman.id" /> */}
                <meta
                    property="og:title"
                    content="Sai Rithwik M"
                />
                <meta
                    property="og:description"
                    content="Developer and an undergraduate IIIT Bangalore, India."
                />
                <meta property="og:image" content="https://i.imgur.com/AOMvmeJ.png" />
            </Head>


		</Container>
	)
}

