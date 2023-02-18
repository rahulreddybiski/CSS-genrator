import { Box, Button, FormControlLabel, FormGroup, Grid, Slider, TextField, Typography } from '@mui/material'
import React, { useRef, useState } from 'react'
import image from '../Images/image.jpg'
import Checkbox from '@mui/material/Checkbox';
import { maxWidth } from '@mui/system';


const container = {
    width : '80%',
    margin : {
        xs : '100px auto',
        sm : '80px auto',
        md : '80px auto',
        lg : '20px auto',
        xl : '20px auto'
    }
}

function Imagefiltergenerator() {

    const [sliderValue, setSliderValue] = useState(0);
    const [blurData, setBlurData] = useState(false)
    const [blur, setBlur] = useState(0);
    const [copy, setCopy] = useState(false);
    let currentCode = useRef(null);

    
    const copyText = (event) => {
        const code = currentCode.current.innerText;
        navigator.clipboard.writeText(code)
        setCopy(true);
    }

    const handleSliderChange = (event, value) =>{
        setSliderValue(value);
    }
    const handleBlur = (event, value) => {
        setBlur(value/100)
    }

  return (
    <div>
        <Grid container spacing={2} sx={container}>

            <Grid item xs={12} sm={12} md={6}>
                <Box sx={{margin : '20px 0px',  maxWidth: {xs : 200, sm : 300, md : 300}}}>
                      <Typography sx={{fontWeight : '100'}}>Black And White Filter<span style={{marginLeft : '90px', color : 'blue'}}>{`${sliderValue}%`}</span></Typography>
                      <Slider onChange={handleSliderChange}
                            aria-label="Custom marks"
                            defaultValue={0}
                            step={1}
                            valueLabelDisplay="off"
                      />
                </Box>
                <Box sx={{margin : '20px 0px',  maxWidth: {xs : 200, sm : 300, md : 300}}}>
                      <Typography sx={{fontWeight : '100'}}>Image Blur Filter<span style={{marginLeft : '90px', color : 'blue'}}>{`${blur}px`}</span></Typography>
                      <Slider onChange={handleBlur}
                            aria-label="Custom marks"
                            defaultValue={0}
                            step={1}
                            valueLabelDisplay="off"
                      />
                </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                    <Typography variant='h4'>CSS Image Filter Generator</Typography>
                    <Box>
                    <Box
                            component="img"
                            sx={{
                            height: 233,
                            width: 350,
                            maxHeight: { xs: 270, md: 167,lg : 300 },
                            maxWidth: { xs: 300, md: 200, lg : 300 },
                            filter: `grayscale(${sliderValue}%) blur(${blur}px)`

                            }}
                            alt="The house from the offer."
                            src={image}
                        />
                    </Box>
                    <Typography variant='h5'>Generated CSS code</Typography>
                    <Typography variant='small'>Apply this CSS to the html element you want to style.</Typography>
                    <Box sx={{position : 'relative',background : '#e4e4ea', height : '120px', width : {xs : '100%', sm : '100%', md : '100%', lg : '100%'}, marginTop : '20px'}}>
                        <Button onClick={copyText} sx={{background : 'white', border : '1px solid blue', position : 'absolute', right : '5px', top : '5px'}}>{!copy ? ('COPY') : ('COPIED')}</Button>
                        <Typography ref={currentCode} variant='p' sx={{margin : '20px',position : 'absolute',maxWidth : {xs : '70%', sm : '80%', md : '80%'}}}>
                           {`-webkit-filter: grayscale(${sliderValue}%);
                            filter: grayscale(${sliderValue}%) blur(${blur}px);`}
                        </Typography>
                    </Box>
                    <Typography variant='h6'>With a border generator tool, 
                                    you can instantly create a border for any HTML element. 
                                    It has many options and is easy to use. You can change border style,
                                    border color and adjust any side border length.
                                    It's easy to use.
                    </Typography>
            </Grid>
        </Grid>
    </div>
  )
}

export default Imagefiltergenerator
