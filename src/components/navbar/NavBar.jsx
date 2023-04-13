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
            <Button variant={'ghost'} colorScheme='yellow'>Home</Button>
          </NavLink>
      </HStack>
      <HStack >
        <NavLink to='/login'>
          <Button variant={'outline'} colorScheme='yellow'>Login</Button>
        </NavLink>
        <NavLink to='/register'>
          <Button variant={'outline'} colorScheme='yellow'>Register</Button>
        </NavLink>
      </HStack>
      </Flex>
      
    </Box>
  )
}

export default NavBar; // Fixed export statement
