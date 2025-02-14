import React from 'react'
import Header from '../components/header/header'
import SlideBar from '../components/slidebar/SlideBar'
import Channel from '../components/channel/Channel'
import Content1 from '../components/Content1/Content1'
import Content2 from '../components/Content2/Content2'
import Carousel from '../components/carousal/Carousel'

const Home = () => {
  return (
    <>
     <Header/>
     <SlideBar/>
     
     <Channel/>
     <Content1/>
     <Content2/>
     </>
   
  )
}

export default Home