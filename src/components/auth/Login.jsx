import { Box, Button, Container, Flex, FormControl, FormLabel, Grid, GridItem, HStack, Image, Input, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import loginImage from "../../img/login.svg"
import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
  } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
const Login = () => {

    const [sucess, setSucess] = useState(false)
    const navigate=useNavigate()
    
    const [user, setUser] = useState({
        email:"",
        password:""
    })


    const UserData = (e) => {
        e.preventDefault()
        console.log(user)  
        setSucess(true)
        navigate("/dashboard")
    }

  return (
      <Box w={'100%'}>
          <Flex  w={'100%'} justifyContent={'space-around'} mt={20}>
              <Box w={'40%'}>
                  <Box alignItems={'left'}  > 
                      <form onSubmit={(e)=>UserData(e)}>
                        <FormControl isRequired >
                            <FormLabel>
                                Enter Email Address
                            </FormLabel>
                              <Input placeholder='enter email address' value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} isRequired></Input>
                        
                            </FormControl>
                            
                            <FormControl isRequired>
                            <FormLabel>
                                Enter Password 
                            </FormLabel>
                              <Input placeholder='enter email address' type='password'  value={user.pass} onChange={(e) => setUser({ ...user, password: e.target.value })} isRequired></Input>
                             
                          </FormControl>
                        
                          <FormControl mt={'5'} >
                              <Button w={'100%'} type='submit'>Login</Button>
                          </FormControl>
                        
                          {
                        sucess==true?<Alert status='success' mt={5}>
                        <AlertIcon />
                            Login Sucess
                        </Alert>:<></>
                          }
                          

                      </form>
                     
                  </Box>
                   
              </Box>
              <Box>
                    <Image src={loginImage} w={'300px'}></Image>
              </Box>
           </Flex>
     </Box>
  )
}

export default Login