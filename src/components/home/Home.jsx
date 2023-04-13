import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { AspectRatio, Box, Button, Card, CardBody, CardFooter, CardHeader, Center, CloseButton, Container, Flex, Grid, GridItem, HStack, Image, SimpleGrid, Text, VStack } from '@chakra-ui/react'  
import { getData } from '../../redux/action/cryptoAction'
import millify from "millify"
import { Audio } from 'react-loader-spinner'
import useWebSocket, { ReadyState } from 'react-use-websocket';

import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'
// const formatCurrency = require('format-currency')

const DashBoard = () => {
const [updatedData,setUpdatedData]=useState([])
let opts = { format: '%s%v %c', code: 'USD', symbol: '$' }
  const dispatch = useDispatch() 
  
  const [socketUrl, setSocketUrl] = useState('wss://stream.binance.com:9443/ws/ethusdt@kline_30m');
  const { sendMessage, lastMessage, readyState } = useWebSocket(socketUrl);
  const data = useSelector((state) => state.getCryptoData)
  const [eth,setEth]=useState([])
 

  useEffect(() => {
    dispatch(getData())
  }, [])
  
  useEffect(() => {
    setUpdatedData(data?.data?.coins)
  }, [data])

  useEffect(() => {

    let update = lastMessage?.data
    console.log(update)
    if (update)
    {
      update = JSON.parse(update)
      setEth(update.k)
      console.log("lastMessage",update)
    }
   
  },[lastMessage])

   return (
    <>
    <Box>  
    <Box m={15} w={'100%'}>
      <SimpleGrid minChildWidth={'200px'} gap={7} p={10}>
            
               <Card>
                 <CardHeader>
                  Eth
                 </CardHeader>
                 <CardBody>
                 <p>Open Price:{eth.o}</p>
                 <p>High Price::{eth.h}</p>
                 <p>Low Price::{eth.l}</p>
                 <p>Close Price::{eth.c}</p>
                 </CardBody>
                 <CardFooter>
                 <p>Timestamp:{eth.t}</p>
                 </CardFooter>
               </Card>  
      </SimpleGrid>
    </Box>

 
         {
           updatedData?<Box m={15}>
   <Table variant='simple'>
    <TableCaption>crypto coin</TableCaption>
    <Thead >
      <Tr backgroundColor='#FCD948'>
        <Th>Symbol</Th>
        <Th>Coin</Th>
        <Th>Price</Th>
        <Th>24hVolume</Th>
      </Tr>
    </Thead>
    <Tbody>
      {
        updatedData?.map((e) => {
        return <Tr>
          <Td>
            <Image src={e?.iconUrl} w={'50px'}></Image>
          </Td>
          <Td>{e?.name}</Td>
          <Td>{millify(e?.price)}</Td>
          <Td>{millify(e['24hVolume'])}</Td>
        </Tr> 
      })

      }
     
       
    </Tbody>
    {/* <Tfoot>
      <Tr>
        <Th>To convert</Th>
        <Th>into</Th>
        <Th isNumeric>multiply by</Th>
      </Tr>
    </Tfoot> */}
  </Table>
           </Box> :
   <Container>
   <Audio
  height="80"
  width="80"
  radius="9"
  color="#FCD948"
  ariaLabel="loading"
  wrapperStyle
  wrapperClass
/>        
   </Container>          
 
 }

         
    
      </Box>
    </>
     
  )
}

export default DashBoard