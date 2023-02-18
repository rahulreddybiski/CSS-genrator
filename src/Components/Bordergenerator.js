import { Autocomplete, Button, Grid, Slider, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
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

const options = ['Solid', 'Dotted', 'Dashed', 'Double', 'inset', 'none', 'Ridge', 'Outset', 'Hidden', 'None'];

function Bordergenerator() {
    
    const [borderStyle, setBoarderStyle] = useState('Solid');
    const [sliderValue, setSliderValue] = useState(0);
    const [borderColor, setBorderColor] = useState('#000000');
    const [copy, setCopy] = useState(false);
    let currentCode = useRef(null);

    const borderValues = {
                            boxSizing : 'border-box',
                            height : '200px', 
                            width : '200px',
                            backgroundColor : '#ffdbdb',
                            border : `${sliderValue}px ${borderStyle} ${borderColor}`,
                            margin : '40px'
                        }
    const handleChange = (event, value) => {
            setBoarderStyle(value);
    }

    const handleSliderChange = (event, value) =>{
            setSliderValue(value);
    }

    const copyText = (event) => {
        const code = currentCode.current.innerText;
        navigator.clipboard.writeText(code)
        setCopy(true);
    }
    

    return (
        <div>
        <Grid container spacing={2} sx={container}>
            <Grid item xs={12} sm={12} md={6}>
            <Autocomplete onChange={handleChange}
                disablePortal
                id="Border Style"
                options={options}
                value={borderStyle}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Border Style" />}
            />
            <Box sx={{margin : '20px 0px', maxWidth: {xs : 200, sm : 300, md : 300} }}>
                <Typography sx={{fontWeight : '100'}}>Border width All Side <span style={{marginLeft : '90px', color : 'blue'}}>{`${sliderValue}px`}</span></Typography>
                <Slider onChange={handleSliderChange}
                    aria-label="Custom marks"
                    defaultValue={0}
                    step={1}
                    valueLabelDisplay="off"
                />
            </Box>
            <Box sx={{margin : '10px 0px'}}>
                <Typography>Border Color</Typography>
                <TextField sx={{margin : '10px 0px'}} value={borderColor} onChange={(event) => setBorderColor(event.target.value) } id="outlined-basic" label="Color" variant="outlined" />
            </Box>

            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <Typography variant='h4'>CSS Border Generator</Typography>
                <Box sx={borderValues}>
                </Box>
                <Typography variant='h5'>Generated CSS code</Typography>
                <Typography variant='small'>Apply this CSS to the html element you want to style.</Typography>
                <Box sx={{position : 'relative',background : '#e4e4ea', height : '80px', width : '80%', marginTop : '20px'}}>
                    <Button  onClick={copyText} sx={{background : 'white', border : '1px solid blue', position : 'absolute', right : '5px', top : '5px'}}>{!copy ? ('COPY') : ('COPIED')}</Button>
                    <Typography ref={currentCode} variant='p' sx={{margin : '20px',position : 'absolute',maxWidth : {xs : '70%', sm : '80%', md : '80%'}}}>{`border : ${sliderValue}px ${borderStyle} ${borderColor}`}</Typography>
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

export default Bordergenerator
