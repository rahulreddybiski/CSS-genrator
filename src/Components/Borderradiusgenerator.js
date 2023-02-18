import { Box, Button, Grid, Slider, Typography } from '@mui/material'
import React, { useRef, useState } from 'react'



const container = {
    width : '80%',
    margin : '80px auto'
}

function Borderradiusgenerator() {

    const [sliderValue, setSliderValue] = useState(0);
    const [leftBorder, setLeftBorder] = useState(sliderValue);
    const [rightBorder, setRightborder] = useState(sliderValue);
    const [bottomleft, setBottomlft] = useState(sliderValue);
    const [bottomright, setbottomRight] = useState(sliderValue);
    const [copy, setCopy] = useState(false);

    let currentCode = useRef(null);

    const copyText = (event) => {
        const code = currentCode.current.innerText;
        navigator.clipboard.writeText(code)
        setCopy(true);
    }

    const handleSliderChange = (event, value) =>{
        setSliderValue(value);
        setLeftBorder(value);
        setRightborder(value);
        setbottomRight(value);
        setBottomlft(value);
    }

    const handleLeftBorder = (event, value) => {
        setLeftBorder(value);
    }
    const handleRightradius = (event, value) => {
        setRightborder(value);
    }
    const handleBottomLeftBorder = (event, value) => {
        setBottomlft(value);
    }
    const handleBottomRight = (event, value) => {
        setbottomRight(value);
    }
    

    const borderValues = {
        boxSizing : 'border-box',
        height : '200px', 
        width : '200px',
        backgroundColor : '#ffdbdb',
        border : '2px solid black',
        borderRadius : `${leftBorder}px ${rightBorder}px ${bottomleft}px ${bottomright}px `,
        margin : '40px'
    }
    

  return (
    <div>
        <Grid container spacing={2} sx={container}>
 
            <Grid item xs={12} sm={12} md={6}>
                <Box sx={{margin : '20px 0px', maxWidth: {xs : 250, sm : 300, md : 300} }}>
                    <Typography sx={{fontWeight : '100'}}>All Border Radius<span style={{marginLeft : '90px', color : 'blue'}}>{`${sliderValue}px`}</span></Typography>
                        <Slider onChange={handleSliderChange}
                            aria-label="Custom marks"
                            defaultValue={0}
                            step={1}
                            valueLabelDisplay="off"
                        />
                </Box>
                <Box sx={{margin : '20px 0px', maxWidth: {xs : 250, sm : 300, md : 300} }}>
                    <Typography sx={{fontWeight : '100'}}>Top Left Radius<span style={{marginLeft : '90px', color : 'blue'}}>{`${leftBorder}px`}</span></Typography>
                        <Slider onChange={handleLeftBorder}
                            aria-label="Custom marks"
                            defaultValue={0}
                            step={1}
                            valueLabelDisplay="off"
                        />
                </Box>
                <Box sx={{margin : '20px 0px', maxWidth: {xs : 250, sm : 300, md : 300} }}>
                    <Typography sx={{fontWeight : '100'}}>Top Right Radius<span style={{marginLeft : '90px', color : 'blue'}}>{`${rightBorder}px`}</span></Typography>
                        <Slider onChange={handleRightradius}
                            aria-label="Custom marks"
                            defaultValue={0}
                            step={1}
                            valueLabelDisplay="off"
                        />
                </Box>
                <Box sx={{margin : '20px 0px', maxWidth: {xs : 250, sm : 300, md : 300} }}>
                    <Typography sx={{fontWeight : '100'}}>Bottom Left Radius <span style={{marginLeft : '90px', color : 'blue'}}>{`${bottomleft}px`}</span></Typography>
                        <Slider onChange={handleBottomLeftBorder}
                            aria-label="Custom marks"
                            defaultValue={0}
                            step={1}
                            valueLabelDisplay="off"
                        />
                </Box>
                <Box sx={{margin : '20px 0px',  maxWidth: {xs : 250, sm : 300, md : 300}}}>
                    <Typography sx={{fontWeight : '100'}}>Bottom Right Radius <span style={{marginLeft : '90px', color : 'blue'}}>{`${bottomright}px`}</span></Typography>
                        <Slider onChange={handleBottomRight}
                            aria-label="Custom marks"
                            defaultValue={0}
                            step={1}
                            valueLabelDisplay="off"
                        />
                </Box>
            </Grid>

            <Grid item xs={12} sm={12} md={6}>
                        <Typography variant='h4'>CSS Border Generator</Typography>
                        <Box sx={borderValues}>
                        </Box>
                        <Typography variant='h5'>Generated CSS code</Typography>
                        <Typography variant='small'>Apply this CSS to the html element you want to style.</Typography>
                        <Box sx={{position : 'relative',background : '#e4e4ea', height : '80px', width : {xs : '100%', sm : '100%', md : '100%', lg : '100%'}, marginTop : '20px', marginTop : '20px'}}>
                            <Button  onClick={copyText} sx={{background : 'white', border : '1px solid blue', position : 'absolute', right : '5px', top : '5px'}}>{!copy ? ('COPY') : ('COPIED')}</Button>
                            <Typography ref={currentCode} variant='p' sx={{margin : '20px',position : 'absolute',maxWidth : {xs : '70%', sm : '80%', md : '80%'}}}>{`border-radius : ${leftBorder}px ${rightBorder}px ${bottomleft}px ${bottomright}px`}</Typography>
                        </Box>
                        <Typography variant='h6'>With a border generator tool, 
                                you can instantly create a border for any HTML element. 
                                It has many options and is easy to use. You can change border style,
                                border color and adjust any side border length.
                                It's easy to use.</Typography>
            </Grid>
        </Grid>
    </div>
  )
}

export default Borderradiusgenerator
