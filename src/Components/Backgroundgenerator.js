import { Button, Grid, TextField, Typography } from '@mui/material'
import { bgcolor, border, Box } from '@mui/system'
import React, { useRef, useState } from 'react'


const container = {
  width : '80%',
  margin : {
    xs : '80px auto',
    sm : '80px auto',
    md : '80px auto',
    lg : '20px auto',
    xl : '20px auto'
}
}



function Backgroundgenerator() {

  const [elementbgColor, setBgcolor] = useState('#ffffff')
  const [copy, setCopy] = useState(false);
  let currentCode = useRef(null);
  console.log(elementbgColor)
  const copyText = (event) => {
    const code = currentCode.current.innerText;
    navigator.clipboard.writeText(code)
    setCopy(true);
  }

  const handleColor = (event) => {
    setBgcolor(event.target.value)
  }

  const backgroundValues = {
    height : '200px', 
    width : '200px',
    backgroundColor : {elementbgColor},
    margin : '40px'
}

  return (
    <div>
        <Grid container spacing={2} sx={container}>
          <Grid item xs={12} sm={12} md={6}>
          <Box sx={{margin : '10px 0px'}}>
                <Typography>Background Color</Typography>
                <TextField value={elementbgColor} onChange={handleColor} sx={{margin : '10px 0px'}}  id="outlined-basic" label="Color" variant="outlined" />
            </Box>
          </Grid>

          <Grid item xs={12} sm={12} md={6}> 
          <Typography variant='h4'>CSS Background Generator</Typography>
                <Box sx={backgroundValues}>
                </Box>
                <Typography variant='h5'>Generated CSS code</Typography>
                <Typography variant='small'>Apply this CSS to the html element you want to style.</Typography>
                <Box sx={{position : 'relative',background : '#e4e4ea', height : '80px', width : '80%', marginTop : '20px'}}>
                    <Button onClick={copyText} sx={{background : 'white', border : '1px solid blue', position : 'absolute', right : '5px', top : '5px'}}>{!copy ? ('COPY') : ('COPIED')}</Button>
                    <Typography ref={currentCode} variant='p' sx={{margin : '20px',position : 'absolute',maxWidth : {xs : '70%', sm : '80%', md : '80%'}}}>{`background-color : ${elementbgColor}`}</Typography>
                </Box>
                <Typography variant='h6'>With a background generator tool, 
                         you can instantly create a background for any HTML element. 
                         It has many options and is easy to use.
                         It's easy to use.</Typography>
          </Grid>
        
        </Grid>  
    </div>
  )
}

export default Backgroundgenerator
