'use client'
import { Box, Button, Flex, SlideFade, Text, useDisclosure } from '@chakra-ui/react';
import { delay } from 'framer-motion';
import Typewriter from 'typewriter-effect';

export default function ElevatorPitch() {
  const {isOpen, onToggle} = useDisclosure();

  return(
    <Flex h={'80vh'}>
      <Box fontSize={{base:'2xl' ,sm:'4xl',md:'5xl', lg:'6xl'}} fontFamily={`'Courier New', monospace`} fontWeight={'600'} color={'whiteAlpha.900'} px={'20'} py={'10'}>
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
              .typeString(`Wanna know how?`)
              .pauseFor(1500)
              .callFunction(onToggle)
              .start();
          }}
        />
        <SlideFade in={isOpen}>
          <Button height={{base: '75px', md:'100px'}} 
            width={{base: '300px', md:'500px'}}  
            fontSize={{base: '23px', md:'34px'}} 
            my={'5'}
            size={'lg'} 
            color={'white'} 
            _hover={{ color: 'black', bg:'white'}}
            bg={'whiteAlpha.500'}
            border={'1px'}
            borderColor={'white'}
          >
            Download my Resume
          </Button>
        </SlideFade>
      </Box>
    </Flex>
  )
}