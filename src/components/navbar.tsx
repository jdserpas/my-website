'use client'
import HomeIcon from '../../public/home-icon.svg';
import ResumeIcon from '../../public/resume-icon.svg';
import LinkedInIcon from '../../public/linkedin-icon.svg';
import GitHubIcon from '../../public/github-icon.svg';
import { HStack, Image, StackDivider, Button, Show, Text, chakra, shouldForwardProp, Box, Link } from "@chakra-ui/react";
import { Variants, isValidMotionProp, motion } from 'framer-motion';

export default function NavBar() {

  const containter = {
    hidden: { x: -1000},
    show: {
      x: 0,
      transition: {
        transition: {type:'spring', duration:0.40}
      }
    }
  }
  
  const item: Variants = {
    hidden: { opacity: 0 , y: -20},
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, duration: 2, delay: 0.5 }
    }
  };

  const SlideIn = chakra(motion.div, {
    shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
  })

  return (
  <nav className="bg-transparent">
    <SlideIn
      variants={containter}
      animate="show"
      initial="hidden">
      <HStack p={'10'} h={'20vh'} w={{base: '90vw',md:'70vw'}} justify={'space-around'} divider={<StackDivider borderColor={'black'} fontFamily={'Garamond, serif'}/>}>
        <Link href='/'>
          <Button colorScheme='whiteAlpha' flexShrink={1} boxSize={{base:'75', md:'100'}} w={{lg: 'fit-content'}}>
            <Box as={motion.div} variants={item}>
              <Image src={HomeIcon.src} alt="Home" flexShrink={'inherit'} boxSize={{base:'fit-content', lg:'75'}}/>
              <Show above='lg'>
                <Text color={'black'} fontSize={'xl'}>Home</Text>
              </Show>
            </Box>
          </Button>
        </Link>
        <Link href='documents/Josh-Serpas-Resume.pdf' download='Josh-Serpas-Resume.pdf'>
          <Button colorScheme='whiteAlpha' boxSize={{base:'75', md:'100'}} w={{lg: 'fit-content'}}>
            <Box as={motion.div} variants={item}>
              <Image src={ResumeIcon.src} alt="Resume" flexShrink={'inherit'} boxSize={{base:'fit-content', lg:'75'}}/>
            <Show above='lg'>
              <Text color={'black'} fontSize={'xl'}>Resume</Text>
            </Show>
            </Box>
          </Button>
        </Link>
        <Link href='https://linkedin.com/in/jdserpas' target='_blank'>
          <Button colorScheme='whiteAlpha' boxSize={{base:'75', md:'100'}} w={{lg: 'fit-content'}}>
            <Box as={motion.div} variants={item}>
              <Image src={LinkedInIcon.src} alt="LinkedIn" flexShrink={'inherit'} boxSize={{base:'fit-content', lg:'75'}}/>
            <Show above='lg'>
              <Text color={'black'} fontSize={'xl'}>LinkedIn</Text>
            </Show>
            </Box>
          </Button>
        </Link>
        <Link href='https://github.com/jdserpas' target='_blank'>
          <Button colorScheme='whiteAlpha' boxSize={{base:'75', md:'100'}} w={{lg: 'fit-content'}}>
            <Box as={motion.div} variants={item}>
              <Image src={GitHubIcon.src} alt="GitHub" flexShrink={'inherit'} boxSize={{base:'fit-content', lg:'75'}}/>
            <Show above='lg'>
              <Text color={'black'} fontSize={'xl'}>GitHub</Text>
            </Show>
            </Box>
          </Button>
        </Link>
      </HStack>
    </SlideIn>
  </nav>)
}