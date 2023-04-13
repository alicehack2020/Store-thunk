import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { LOAD_DATA } from '../../redux/action/postAction'
import { AspectRatio, Box, Button, Card, CardBody, CardFooter, CardHeader, Center, CloseButton, Flex, HStack, Image, SimpleGrid, Text } from '@chakra-ui/react'  
const DashBoard = () => {
const dispatch = useDispatch() 
const data=useSelector((state)=>state.productsData)
 

  useEffect(() => {
    dispatch(LOAD_DATA())
  },[])
 
  return (
    <Box m={3}>
      {/* <Button>getData</Button> */}
      <SimpleGrid minChildWidth={'200px'} gap={7} >
        {
          data.map((e) => {
            return <Card key={e.id}>
              <CardHeader >
                 
                  <Text>
                    {e.category}
                  </Text>
                   
                
              </CardHeader>
              <CardBody>

                <Center>
                <Image src={e.image} h={'200px'}></Image>
                </Center>
                {e.title}
               
              </CardBody>
              <CardFooter>
                <Flex w={'100%'} justifyContent={'space-between'}>
                  <Text>
                  {`₹`+e.price}
                  </Text>
                  <Button>Add</Button>
                </Flex>
                
              </CardFooter>
            </Card>
          })
        }
      </SimpleGrid>
    </Box>
  )
}

export default DashBoard