import { ArrowUpIcon } from '@chakra-ui/icons'
import { Box, Button, Flex, HStack } from '@chakra-ui/react'
import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <Box w={'100%'}>
      <Flex  justifyContent={'space-between'} w={'100%'} p={'10px'}>
      <HStack>
        <NavLink to='/'>
            <Button>Home</Button>
          </NavLink>
      </HStack>
      <HStack >
        <NavLink to='/login'>
          <Button>Login</Button>
        </NavLink>
        <NavLink to='/register'>
          <Button>Register</Button>
        </NavLink>
        <NavLink to='/cart'>
          <Button leftIcon={<ArrowUpIcon/>}>cart</Button>
        </NavLink>
      </HStack>
      </Flex>
      
    </Box>
  )
}

export default NavBar; // Fixed export statement
