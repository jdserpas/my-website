'use client'
import HomeIcon from '../../public/home-icon.svg';
import ResumeIcon from '../../public/resume-icon.svg';
import LinkedInIcon from '../../public/linkedin-icon.svg';
import GitHubIcon from '../../public/github-icon.svg';
import { HStack, Image, ScaleFade, StackDivider, useDisclosure, Button, Show, Text } from "@chakra-ui/react";
import { useEffect } from 'react';

export default function NavBar() {
  const {isOpen, onToggle} = useDisclosure();
  
  useEffect(()=> {
    onToggle()
  }, [])

  return (
  <nav className="bg-transparent">
    <ScaleFade initialScale={0.1} in={isOpen}>
      <HStack p={'10'} h={'20vh'} w={{base: '90vw',md:'70vw'}} justify={'space-around'} divider={<StackDivider borderColor={'black'} fontFamily={'Garamond, serif'}/>}>
        <Button colorScheme='whiteAlpha' flexShrink={1} boxSize={{base:'75', md:'100'}} w={{lg: 'fit-content'}}>
          <Image src={HomeIcon.src} alt="Home" flexShrink={'inherit'} boxSize={{base:'fit-content', lg:'75'}}/>
          <Show above='lg'>
            <Text color={'black'} fontSize={'xl'}>Home</Text>
          </Show>
        </Button>
        <Button colorScheme='whiteAlpha' boxSize={{base:'75', md:'100'}} w={{lg: 'fit-content'}}>
          <Image src={ResumeIcon.src} alt="Resume" flexShrink={'inherit'} boxSize={{base:'fit-content', lg:'75'}}/>
          <Show above='lg'>
            <Text color={'black'} fontSize={'xl'}>Resume</Text>
          </Show>
        </Button>
        <Button colorScheme='whiteAlpha' boxSize={{base:'75', md:'100'}} w={{lg: 'fit-content'}}>
          <Image src={LinkedInIcon.src} alt="LinkedIn" flexShrink={'inherit'} boxSize={{base:'fit-content', lg:'75'}}/>
          <Show above='lg'>
            <Text color={'black'} fontSize={'xl'}>LinkedIn</Text>
          </Show>
        </Button>
        <Button colorScheme='whiteAlpha' boxSize={{base:'75', md:'100'}} w={{lg: 'fit-content'}}>
          <Image src={GitHubIcon.src} alt="GitHub" flexShrink={'inherit'} boxSize={{base:'fit-content', lg:'75'}}/>
          <Show above='lg'>
            <Text color={'black'} fontSize={'xl'}>GitHub</Text>
          </Show>
        </Button>
      </HStack>
    </ScaleFade>
  </nav>)
}