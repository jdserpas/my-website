'use client'
import { Box, Flex, Text } from '@chakra-ui/react';
import { delay } from 'framer-motion';
import Typewriter from 'typewriter-effect';

export default function ElevatorPitch() {
  return(
    <Flex h={'80vh'}>
      <Box fontSize={{base:'3xl' ,sm:'4xl',md:'5xl', lg:'6xl'}} fontFamily={`'Courier New', monospace`} fontWeight={'600'} color={'whiteAlpha.900'} px={'20'} py={'10'}>
        <Typewriter
          options={{delay: 75}}
          onInit={(typewriter) => {
            typewriter
              .typeString(`Hi! `)
              .pauseFor(1500)
              .typeString(`I'm Josue Se`)
              .deleteChars(5)
              .typeString('h Serpas.<br/>')
              .pauseFor(1000)
              .typeString('I make computers do cool things for a living...')
              .pauseFor(500)
              .typeString(`Wanna know how? <br/>Download my <u><a class="typewriter-link" href='/documents/Josh-Serpas-Resume.pdf' download>Resume<a/></u>.`)
              .start();
          }}
        />
      </Box>
    </Flex>
  )
}