'use client'
import HomeIcon from '../../public/home-icon.svg';
import ResumeIcon from '../../public/resume-icon.svg';
import LinkedInIcon from '../../public/linkedin-icon.svg';
import GitHubIcon from '../../public/github-icon.svg';
import { HStack, Image, ScaleFade, StackDivider, useDisclosure, Button } from "@chakra-ui/react";
import { useEffect } from 'react';

export default function NavBar() {
  const {isOpen, onToggle} = useDisclosure();
  
  useEffect(()=> {
    onToggle()
  }, [])

  return (
  <nav className="bg-transparent">
    <ScaleFade initialScale={0.1} in={isOpen}>
      <HStack p={'10'} h={'20vh'} w={{base: '90vw',md:'70vw'}} justify={'space-around'} divider={<StackDivider borderColor={'black'}/>}>
        <Button colorScheme='whiteAlpha' flexShrink={1} boxSize={{base:'75', md:'100'}}>
          <Image src={HomeIcon.src} alt="Home" flexShrink={'inherit'} boxSize={'fit-content'}/>
        </Button>
        <Button colorScheme='whiteAlpha' boxSize={{base:'75', md:'100'}}>
          <Image src={ResumeIcon.src} alt="Resume" flexShrink={'inherit'} boxSize={'fit-content'}/>
        </Button>
        <Button colorScheme='whiteAlpha' boxSize={{base:'75', md:'100'}}>
          <Image src={LinkedInIcon.src} alt="LinkedIn" flexShrink={'inherit'} boxSize={'fit-content'}/>
        </Button>
        <Button colorScheme='whiteAlpha' boxSize={{base:'75', md:'100'}}>
          <Image src={GitHubIcon.src} alt="GitHub" flexShrink={'inherit'} boxSize={'fit-content'}/>
        </Button>
      </HStack>
    </ScaleFade>
  </nav>)
}