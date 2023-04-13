import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { LOAD_DATA } from '../../redux/action/postAction'
import { Button } from '@chakra-ui/react'
  
const DashBoard = () => {
const dispatch = useDispatch() 
const data=useSelector((state)=>state.productsData)
 

  useEffect(() => {
    dispatch(LOAD_DATA())
  },[])
 
  return (
    <div>
      <Button>getData</Button>
    </div>
  )
}

export default DashBoard