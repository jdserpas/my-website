'use client'
import { Box, Flex, Text } from '@chakra-ui/react';
import { delay } from 'framer-motion';
import Typewriter from 'typewriter-effect';

export default function ElevatorPitch() {
  return(
    <Flex h={'80vh'}>
      <Box fontSize={{base:'3xl' ,sm:'4xl',md:'5xl', lg:'6xl'}} fontFamily={`'Courier New', monospace`} fontWeight={'500'} color={'whiteAlpha.900'} px={'20'} py={'10'}>
        <Typewriter
          options={{delay: 75}}
          onInit={(typewriter) => {
            typewriter
              .typeString(`Hi! `)
              .pauseFor(1500)
              .typeString(`I'm Josue Serpas`)
              .deleteChars(9)
              .typeString('h Serpas. ')
              .pauseFor(1000)
              .typeString('I make computers do cool things for a living...')
              .pauseFor(500)
              .typeString(`Wanna know how?\n Download my <a href='/document/Josh-Serpas-Resume.pdf' download>Resume<a/>`)
              .start();
          }}
        />
      </Box>
    </Flex>
  )
}