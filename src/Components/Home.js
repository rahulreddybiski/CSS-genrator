import React from 'react'
import Header from './Header'
import { Typography, Container } from '@mui/material'
import Hero from './Hero'

const heading = {
  color : '#3399ff',
  margin : '100px 0px 10px 0px'
}

const subheading = {
  
}

function Home() {
  return (
    <div>
      <Header />
      <Container style={{width : '90%'}}>
        <Typography sx={heading} variant='h4'>
            The Best CSS Snippet Generator to make your work easy
        </Typography>
        <br></br>
        <Typography sx={subheading} variant='p'  style={{fontSize : '20px', fontWeight : '300', maxWidth : '40%'}}>
            The CSS Snippet Generator is an online tool that provides quick css code to built your application.It contains many useful CSS properties.
            You can customize the CSS properties easily and ready to copy and paste into your next project.
        </Typography>
      </Container>
      <Hero />
    </div>
  )
}

export default Home
